import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import Cookies from 'js-cookie'

// import { jwtDecode } from "jwt-decode";
import { API_URL } from "../../utils/constants";



export const register = createAsyncThunk(
  "users/register",
  async ({ username, email, password }, thunkAPI) => {
    const body = JSON.stringify({
      username,
      email,
      password,
    });
    try {
      const res = await fetch(`${API_URL}/api/users/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
      });
      const data = await res.json();
      console.log(data)
      if (res.status === 201) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const getUser = createAsyncThunk(
  "users/me",

  async (_, thunkAPI) => {
    try {
      const res = await fetch(`${API_URL}/api/users/me`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("access")}`,
        },
      });

      const data = await res.json();

      if (res.status === 200) {
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const login = createAsyncThunk(
  "users/login",
  async ({ username, password }, thunkAPI) => {
    const body = JSON.stringify({
      username,
      password,
    });

    try {
      const res = await fetch(`${API_URL}/api/token/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body,
        credentials: 'include'
      });

      const data = await res.json();

      if (res.status === 200) {
        const { dispatch } = thunkAPI;
        const accessToken = data.access;
        localStorage.setItem("access", accessToken);

        dispatch(getUser());
        // dispatch(setAuthenticated(true))
        console.log(data);
        return data;
      } else {
        console.log(data)
        return thunkAPI.rejectWithValue(data.detail);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

export const refreshToken = createAsyncThunk(
  "users/refreshToken",
  async (_, thunkAPI) => {
    try {
      const refreshToken = Cookies.get('refresh_token'); // Получаем Refresh токен из куков
      const res = await fetch(`${API_URL}/api/token/refresh/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ refresh: refreshToken }),
      });

      const data = await res.json();

      if (res.status === 200) {
        const accessToken = data.access;
        localStorage.setItem("access", accessToken);

        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);


export const checkAuth = createAsyncThunk(
  "users/verify",
  async (_, thunkAPI) => {
    try {
      // const refresh = Cookies.get('refresh_token')
      const access = localStorage.getItem('access')
      const res = await fetch(`${API_URL}/api/token/verify/`, {

        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: access })
      });

      const data = await res.json();

      if (res.status === 200) {
        console.log("прошел запрос check")
        const { dispatch } = thunkAPI;

        dispatch(getUser());
        dispatch(setAuthenticated(true));

        return data;
      } else if (res.status === 401) {
          const refreshTokenResult = await thunkAPI.dispatch(refreshToken());
          if ( refreshTokenResult.meta.requestStatus === 'fulfilled') {
            return thunkAPI.dispatch(checkAuth());
          } else {
            return thunkAPI.rejectWithValue(data);
          }
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);



export const logout = createAsyncThunk(
  "users/logout",
  async (_, thunkAPI) => {
    try {
      // Удаление токена доступа из localStorage
      localStorage.removeItem("access");

      const { dispatch } = thunkAPI;
      dispatch(authSlice.actions.logout());
      dispatch(setAuthenticated(false))

      // Возвращаем успешный результат
      return { success: true };
    } catch (err) {
      // Возвращаем ошибку, если что-то пошло не так
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  registered: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = false;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
    setAuthenticated: (state, action) => {
      state.isAuthenticated = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload; // Устанавливаем значение error при возникновении ошибки
    },
    clearError: (state) => {
      state.error = null; // Очищаем error при успешной операции или при обновлении страницы
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.pending, (state) => {
        state.loading = true;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
        state.registered = true;
        state.error = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getUser.pending, (state) => {
        state.loading = true;
        
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
      })

  },
});

export const { resetRegistered, setAuthenticated, clearError, setError } = authSlice.actions;
export default authSlice.reducer;

// const initialState = {
//   user: localStorage.getItem("authTokens")
//     ? jwtDecode(localStorage.getItem("authTokens"))
//     : null,
//   authTokens: localStorage.getItem("authTokens")
//     ? JSON.parse(localStorage.getItem("authTokens"))
//     : null,
//   isAuthenticated: localStorage.getItem("authTokens") ? true : false,
// };

// export const loginUserAsync = createAsyncThunk(
//   "auth/loginUser",
//   async ({ username, password }) => {
//     const response = await fetch("http://127.0.0.1:8000/api/token/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     const data = await response.json();

//     if (data) {
//       console.log(data, "Прошел логин");
//       localStorage.setItem("authTokens", JSON.stringify(data));
//       return jwtDecode(data.access);
//     } else {
//       console.log("Ошибка");
//       throw new Error("Something went wrong while logging in the user");
//     }
//   }
// );

// export const updateLoginToken = createAsyncThunk(
//   "auth/updateLoginToken",
//   async ({ refresh }) => {
//     const response = await fetch("http://127.0.0.1:8000/api/token/refresh/", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ refresh }),
//     });

//     if (response.ok) {
//       const data = await response.json();
//       localStorage.setItem("authTokens", JSON.stringify(data));
//       return jwtDecode(data.access);
//     } else {
//       console.log("Выкинуло")
//     }
//   }
// );

// const updateTokenMiddleware = (store) => (next) => (action) => {
//   const result = next(action);

//   if (action.type === "auth/loginUser") {
//     const REFRESH_INTERVAL = 15000;
//     console.log("Пошел refresh");
//     const interval = setInterval(() => {
//       store.dispatch(updateLoginToken({ refresh: store.getState().auth.authTokens.refresh }));
//     }, REFRESH_INTERVAL);
//     console.log("Прошел");
//     return () => clearInterval(interval);
//   }

//   return result;
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginUser: (state, action) => {
//       state.user = action.payload;
//       state.authTokens = JSON.parse(localStorage.getItem("authTokens"));
//       state.isAuthenticated = true;
//     },
//     logoutUser: (state) => {
//       localStorage.removeItem("authTokens");
//       state.user = null;
//       state.authTokens = null;
//       state.isAuthenticated = false;
//     },
//   },
//   extraReducers: (builder) => {
//     builder.addCase(loginUserAsync.fulfilled, (state, action) => {
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     });
//   },
// });

// export const { logoutUser } = authSlice.actions;

// export const authMiddleware = updateTokenMiddleware
// export default authSlice.reducer;

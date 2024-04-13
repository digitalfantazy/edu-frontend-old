import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// import { API_URL } from "../../api/index";
import { register, refreshToken, login, getUser, checkAuth } from "../../api/index";



export const logout = createAsyncThunk("users/logout", async (_, thunkAPI) => {
  try {
    // Удаление токена доступа из localStorage
    localStorage.removeItem("access");

    const { dispatch } = thunkAPI;
    dispatch(authSlice.actions.logout());
    dispatch(setAuthenticated(false));

    // Возвращаем успешный результат
    return { success: true };
  } catch (err) {
    // Возвращаем ошибку, если что-то пошло не так
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const initialState = {
  isAuthenticated: false,
  user: null,
  loading: false,
  registered: false,
  registrationError: null,
  loginError: null,
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
        state.registrationError = null;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.registrationError = action.payload;
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.loginError = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.payload;
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
      });
  },
});

export const { resetRegistered, setAuthenticated, clearError, setError } =
  authSlice.actions;
export default authSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// import { API_URL } from "../../api/index";
import { register, login, getUser, checkAuth, logout, sendCode, resendCode } from "../index";
import { changePassword } from "../../Profile/index";

const initialState = {
  isAuthenticated: false,
  isVerificated: false,
  user: null,
  loading: false,
  registered: false,
  registrationError: null,
  loginError: null,
  error: null,
  passwordUpdated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = false;
    },
    // setAuthenticated: (state, action) => {
    //   state.isAuthenticated = action.payload;
    // },
    setError: (state, action) => {
      state.error = action.payload; // Устанавливаем значение error при возникновении ошибки
    },
    clearError: (state) => {
      state.error = null; // Очищаем error при успешной операции или при обновлении страницы
    },
    clearPasswordUpdate: (state) => {
      state.passwordUpdated = false;
    },
  },
  extraReducers: (builder) => {
    builder

      // Регистрация
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

      // Отправка кода верификации
      .addCase(sendCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(sendCode.fulfilled, (state) => {
        state.loading = false;
        state.isVerificated = true;
      })
      .addCase(sendCode.rejected, (state, action) => {
        state.loading = false;
        state.isVerificated = false;
        state.error = action.payload;
      })

      // Переотправка кода верификации  
      .addCase(resendCode.pending, (state) => {
        state.loading = true;
      })
      .addCase(resendCode.fulfilled, (state) => {
        state.loading = false;
        state.isVerificated = false;
      })
      .addCase(resendCode.rejected, (state, action) => {
        state.loading = false;
        state.isVerificated = false;
        state.error = action.payload;
      })

      // Вход
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.loginError = null;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.loginError = action.payload;
      })

      // Полученние пользователя
      .addCase(getUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getUser.rejected, (state) => {
        state.isAuthenticated = false;
        state.loading = false;
      })

      // Проверка авторизации
      .addCase(checkAuth.pending, (state) => {
        state.loading = true;
      })
      .addCase(checkAuth.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
      })
      .addCase(checkAuth.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      })

      // Выход
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.isAuthenticated = false;
        state.user = null;
        state.loading = false;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = false;
      })

      // Смена пароля
      .addCase(changePassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.passwordUpdated = false;
      })
      .addCase(changePassword.fulfilled, (state, action) => {
        state.loading = false;
        state.passwordUpdated = true;
      })
      .addCase(changePassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.passwordUpdated = false;
      });
  },
});

export const { resetRegistered, setAuthenticated, clearError, setError, clearPasswordUpdate } =
  authSlice.actions;
export default authSlice.reducer;

import AuthContainer from "./components/AuthContainer";

export { register } from "./api/registerFetch";
export { refreshToken } from "./api/refreshTokenFetch";
export { login } from "./api/loginFetch";
export { getUser } from "./api/getUserFetch";
export { checkAuth } from "./api/checkAuthFetch";
export { logout } from "./api/logoutFetch"
export { sendCode } from "./api/sendVerificationCode"
export { resendCode } from "./api/resendVerificationCode"


export { default as authSlice } from './store/authSlice';
export default AuthContainer;
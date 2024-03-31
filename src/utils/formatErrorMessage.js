export const formatErrorMessage = (field, error) => {
  switch (field) {

    case "username":
      if (error.includes("user account with this username already exists.")) {
        return "Такое имя пользователя уже занято";
      }
      if (error.includes("Ensure this field has at least 3 characters.")) {
        return "Имя пользователя должно содержать от 3 до 15 симоволов";
      }
      if (error.includes("The username must contain no more than 15 characters")) {
        return "Имя пользователя должно содержать от 3 до 15 симоволов"
      }
      if (error.includes("only english letters")) {
        return "Имя пользователя должно содержать только латинские буквы и цифры"
      }
      break;

    case "email":
      if (error.includes("user account with this email already exists.")) {
        return "Пользователь с таким email уже существует";
      }
      break;

    case "password":
      if (error.includes("at least 8 characters")) {
        return "Пароль должен содержать минимум 8 символов";
      } else if (error.includes("too common")) {
        return "Пароль не должен быть слишком простым";
      } else if (error.includes("The password is too similar to the email.")) {
        return "Пароль не должен совпадать с email";
      } else if (error.includes("entirely numeric")) {
        return "Пароль не должен состоять только из цифр";
      }
        else if (error.includes("pass only english")) {
        return "Пароль должен содержать только латинские буквы и цифры";
      }
      break;

    case "detail": 
      if (error.includes('No active account found with the given credentials')) {
        return "Неверный логин или пароль"
      }
      break
    default:
      return "Произошла ошибка";
  }
};

export const serverMessages = (errors) => {
  let message = "Произошла ошибка"; // Сообщение по умолчанию

  // Перебор всех полей ошибок
  Object.keys(errors).forEach((field) => {
    errors[field].forEach((error) => {
      switch (field) {
        case "confirm_new_password":
          if (error.includes("New passwords must match.")) {
            message = "Пароли не совпадают";
          }
          break;
        case "current_password":
          if (error.includes("Current password is incorrect.")) {
            message = "Неверный текущий пароль";
          }
          break;
        case "new_password":
          if (error.includes("It must contain at least 8 characters.")) {
            message =  "Новый пароль должен содержать минимум 8 символов";
          } else if (error.includes("too common")) {
            message = "Новый пароль не должен быть слишком простым";
          } else if (error.includes("The password is too similar to the email.")) {
            message =  "Новый пароль не должен совпадать с email";
          } else if (error.includes("entirely numeric")) {
            message = "Новый пароль не должен состоять только из цифр";
          } else if (error.includes("pass only english")) {
            message = "Новый пароль должен содержать только латинские буквы и цифры";
          }
          break;
        case "detail":
          if (error.includes("No active account found with the given credentials")) {
            message = "Неверный логин или пароль";
          }
          break;
        default:
          return "Произошла ошибка";
        // Добавьте другие кейсы по необходимости
      }
    });
  });

  return message;
};

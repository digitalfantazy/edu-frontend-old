import { createAsyncThunk } from "@reduxjs/toolkit";

import { getUser } from "./getUserFetch.js";
import { API_URL } from "../../../utils/constants.js";

// Функция для получения CSRF-токена из куки
function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const csrftoken = getCookie('csrftoken');
console.log("CSRF Token:", csrftoken);

export const login = createAsyncThunk(
  "users/login",
  async ({ username, password }, thunkAPI) => {
    const body = JSON.stringify({
      username,
      password,
    });

    const csrftoken = getCookie('csrftoken');

    try {
      const res = await fetch(`${API_URL}/api/auth/token/`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRFToken": csrftoken,  // Добавление CSRF-токена в заголовок
        },
        body,
        credentials: "include",
      });

      const data = await res.json();

      if (res.status === 200) {
        const { dispatch } = thunkAPI;
        const accessToken = data.access;
        localStorage.setItem("access", accessToken);

        dispatch(getUser());
        return data;
      } else {
        return thunkAPI.rejectWithValue(data.detail);
      }
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response.data);
    }
  }
);
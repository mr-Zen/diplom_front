import { resError } from "./res-error.js";
import { searchBtn } from "./variable/variable.js";

// Проверка на значения полей
export function minValue(elem, error) {
  if (!elem.value) {
    error.classList.add("error-message_active");
    error.textContent = "Нужно ввести ключевое слово";
    searchBtn.classList.add("search-container__btn_disabled");
    searchBtn.disabled = true;
  } else if (elem.value.length < 3) {
    error.classList.add("error-message_active");
    error.textContent = "Должно быть от 3 символов";
    searchBtn.classList.add("search-container__btn_disabled");
    searchBtn.disabled = true;
  } else {
    resError(error);
    searchBtn.classList.remove("search-container__btn_disabled");
    searchBtn.disabled = false;
  }
}

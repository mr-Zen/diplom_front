import {resError} from './res_error.js'
import { formInput, errorMessage, searchBtn} from './variable/variable.js';

// Проверка на значения полей
 export function minVal(elem, error) {
    if (!elem.value) {
      error.classList.add("error-message_active");
      error.textContent = "Нужно ввести ключевое слово";
      searchBtn.classList.add("search-container__btn_disabled")
    } else if (elem.value.length < 3) {
      error.classList.add("error-message_active");
      error.textContent = "Должно быть от 3 символов";
      searchBtn.classList.add("search-container__btn_disabled")
    } else {
      resError(error);
      searchBtn.classList.remove("search-container__btn_disabled");
      
      
    }
  }


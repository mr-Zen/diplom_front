import {resError} from './res_error.js'
import { formInput, errorMessage } from './variable/variable.js';

// Проверка на значения полей
 export function minVal(elem, error) {
    if (!elem.value) {
      error.classList.add("error-message_active");
      error.textContent = "Нужно ввести ключевое слово";
    } else if (elem.value.length < 2) {
      error.classList.add("error-message_active");
      error.textContent = "Должно быть от 2 символов";
    } else {
      resError(error);
    }
  }

  //export default formInput.addEventListener("input", minVal(formInput, errorMessage))
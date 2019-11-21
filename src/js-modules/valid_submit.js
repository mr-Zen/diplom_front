import { form, formInput, errorMessage } from "./variable/variable";
import {resError} from "./res_error";
import { minVal } from "./valid_value";

export default form.addEventListener("submit",function (event) {
    event.preventDefault();
    if(!formInput.value || formInput.value.length < 3) {
        errorMessage.classList.add("error-message_active");
        errorMessage.textContent = "Нужно ввести ключевое слово";
    }else {
        resError(errorMessage)
    }
}
)
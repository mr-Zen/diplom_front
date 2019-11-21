import { minVal } from "./valid_value";
import { errorMessage, formInput } from "./variable/variable";

function validate() {
    minVal(formInput, errorMessage)
}


export default formInput.addEventListener("input", validate)

import { minValue } from "./valid_value";
import { errorMessage, formInput } from "./variable/variable";

function validate() {
    minValue(formInput, errorMessage)
}
export default formInput.addEventListener("input", validate)

import { searchBtn, preLoader, formInput, searchBox, noResult, addCardsBtn, linkAnalytic } from "./variable/variable";


export default searchBtn.addEventListener("click", function() {
  noResult.setAttribute("style", "display:none")
  addCardsBtn.setAttribute("style", "display:none")
  linkAnalytic.setAttribute("style", "display:none")
  if (formInput.value.length >= 3) {
    preLoader.setAttribute("style", "display:block");
    searchBox.setAttribute("style", "display:block");
  }
});

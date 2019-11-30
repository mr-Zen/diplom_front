import {
  form,
  formInput,
  errorMessage,
  preLoader,
  linkAnalytic,
  cardsBox,
  addCardsBtn,
  noResult,
  searchBox
} from "./variable/variable";
import { resError } from "./res_error";
import { apiNews } from "./api_news";
import { CardList } from "./card_list";
import { locale } from "core-js";
//Функция валидации поля ввода и отрисовки новостных карточек
export default form.addEventListener("submit", function(event) {
  event.preventDefault();
  cardsBox.innerHTML = "";
  if (!formInput.value || formInput.value.length < 3) {
    errorMessage.classList.add("error-message_active");
    errorMessage.textContent = "Нужно ввести ключевое слово";
  } else {
    resError(errorMessage);
    
    apiNews
      .getNews(formInput.value)
      .then(res => {
        if (res.articles.length > 0) {
          localStorage.clear();
          localStorage.setItem("keywords", formInput.value);
          localStorage.setItem("res", JSON.stringify(res));
        }
        return res;
      })
      .then(res => {
        if (res.articles.length === 0) {
          localStorage.clear();
          noResult.setAttribute("style", "display:block");
          preLoader.setAttribute("style", "display:none");
          searchBox.setAttribute("style", "display:none");
        } else {
          new CardList(cardsBox, res.articles.slice(0, 3)),
            preLoader.setAttribute("style", "display:none"),
            addCardsBtn.setAttribute("style", "display:inline-block");
          noResult.setAttribute("style", "display:none");
        }
        linkAnalytic.setAttribute("style", "display:block");
      })
      .catch(err => {
        if (err) {
          errorMessage.textContent =
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз";
          errorMessage.setAttribute("style", "display:block");
          preLoader.setAttribute("style", "display:none");
          searchBox.setAttribute("style", "display:none");
        }
      });
  }
});

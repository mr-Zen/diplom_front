import "./pages/index.css";
import validInput from "./js-modules/valid-input";
import {
  addCardsBtn,
  cardsBox,
  searchBox,
  linkAnalytic,
  form,
  formInput,
  errorMessage,
  noResult,
  preLoader,
  config
} from "./js-modules/variable/variable";
import searchClick from "./js-modules/search-click";
import { CardList } from "./js-modules/class/cardList";
import Card from "./js-modules/class/card";
import { getMonth } from "./js-modules/helpers";
import { nullImage } from "./js-modules/helpers";
import { resError } from "./js-modules/res-error";
import { ApiNews } from "./js-modules/api/apiNews";
// Переменные для отрисовки карточек
let firstCards = 3;
let lastCards = firstCards + 3;

const apiNews = new ApiNews(config);
// Callback для CardList
const addedCard = (...args) => new Card(...args);

//Функция валидации поля ввода и отрисовки новостных карточек
form.addEventListener("submit", function(event) {
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
          const result = JSON.parse(localStorage.getItem("res"));
          new CardList(cardsBox, result.articles.slice(0, 3), addedCard);
          firstCards = 3;
          lastCards = firstCards + 3;
          if (res.articles.length > 3) {
            addCardsBtn.setAttribute("style", "display:inline-block");
          }
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
          preLoader.setAttribute("style", "display:none");
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

//Отображение первых карточек из localStorage при перезагрузке страницы
function reloadRender() {
  const results = JSON.parse(localStorage.getItem("res"));
  if (results != null && results.articles.length < 4) {
    addCardsBtn.setAttribute("style", "display:none");
  }
  if (results != null && results.articles.length > 3) {
    addCardsBtn.setAttribute("style", "display:inline-block");
  }
  if (results != null && results.articles.length > 0) {
    searchBox.setAttribute("style", "display:block");
    linkAnalytic.setAttribute("style", "display:block");
    new CardList(cardsBox, results.articles.slice(0, 3), addedCard);
  }
}
reloadRender();

//Функция отрисовки карточек из массива
function render(array) {
  if (array.length == 5) {
    lastCards = firstCards + 2;
  } else if (array.length == 4 || lastCards > array.length) {
    lastCards = firstCards + 1;
  }
  for (firstCards; firstCards < lastCards; firstCards++) {
    if (lastCards >= array.length) {
      addCardsBtn.setAttribute("style", "display:none");
    }
    if (lastCards <= array.length) {
      const fixMonth = new Date(array[firstCards].publishedAt);
      const { cardElement } = new Card(
        array[firstCards].url,
        nullImage(array[firstCards].urlToImage),
        `${fixMonth.getDate()} ${getMonth(
          fixMonth
        )}, ${fixMonth.getFullYear()}`,
        array[firstCards].title,
        array[firstCards].description,
        array[firstCards].source.name
      );
      cardsBox.insertAdjacentHTML("beforeend", cardElement);
    }
  }
  lastCards = firstCards + 3;
}

addCardsBtn.addEventListener("click", function() {
  const res = JSON.parse(localStorage.getItem("res"));
  render(res.articles);
});

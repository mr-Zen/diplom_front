import "./pages/index.css";
import validInput from "./js-modules/valid_input";
import validSubmit from "./js-modules/valid_submit";
import { apiNews } from "./js-modules/api_news";
import {
  addCardsBtn,
  cardsBox,
  searchBox,
  linkAnalytic
} from "./js-modules/variable/variable";
import searchClick from "./js-modules/search_click";
import { CardList } from "./js-modules/card_list";
import Card from "./js-modules/card";
import { getMonth } from "./js-modules/correction_date";
import { render } from "./js-modules/render_cards";

//Отображение первых карточек из localStorage при перезагрузке страницы
function reloadRender() {
  const results = JSON.parse(localStorage.getItem("res"));
  if (results != null && results.articles.length > 0) {
    searchBox.setAttribute("style", "display:block");
    linkAnalytic.setAttribute("style", "display:block");
    addCardsBtn.setAttribute("style", "display:inline-block");
    new CardList(cardsBox, results.articles.slice(0, 3));
  }
}

reloadRender()
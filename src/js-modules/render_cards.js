import { addCardsBtn, formInput, cardsBox } from "./variable/variable";
import { apiNews } from "./api_news";
import Card from "./card";
import { getMonth } from "./correction_date";

let finish = 6;
let i = 3;
//Функция отрисовки по 3 карточки из массива
export function render(array) {
  for (i; i < finish; i++) {
    if (finish >= array.length) {
      addCardsBtn.setAttribute("style", "display:none");
    }
    const fixMonth = new Date(array[i].publishedAt);
    const { cardElement } = new Card(
      array[i].url,
      array[i].urlToImage,
      `${fixMonth.getDate()} ${getMonth(fixMonth)}, ${fixMonth.getFullYear()}`,
      array[i].title,
      array[i].description,
      array[i].source.name
      
    );
    cardsBox.insertAdjacentHTML("beforeend", cardElement);
  }
  finish = i + 3;
}

export default addCardsBtn.addEventListener("click", function() {
  const res = JSON.parse(localStorage.getItem("res"));
  render(res.articles)
  
});


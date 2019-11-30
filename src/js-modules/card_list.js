import { cardsBox } from "./variable/variable";
import Card from "./card";
import { getMonth } from "./correction_date";

export class CardList {
  constructor(container, array) {
    this.container = container;
    this.array = array;
    this.render(array);
  }
  render(array) {
    array.forEach(function(item) {
      const fixMonth = new Date(item.publishedAt);
      const { cardElement } = new Card(
        item.url,
        item.urlToImage,
        `${fixMonth.getDate()} ${getMonth(fixMonth)}, ${fixMonth.getFullYear()}`,
        item.title,
        item.description,
        item.source.name
      );
      cardsBox.insertAdjacentHTML("beforeend", cardElement);
    });
  }
}

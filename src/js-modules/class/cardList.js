import { nullImage, getMonth } from "../helpers";

export class CardList {
  constructor(container, array, callback) {
    this.array = array;
    this.container = container;
    this.getCard = callback;
    this.render();
  }
  addCard(...args) {
    const { cardElement } = this.getCard(...args);
    this.container.insertAdjacentHTML("beforeend", cardElement);
  }
  render() {
    this.array.forEach(item => {
      const fixMonth = new Date(item.publishedAt);
      this.addCard(
        item.url,
        nullImage(item.urlToImage),
        `${fixMonth.getDate()} ${getMonth(fixMonth)}, ${fixMonth.getFullYear()}`,
        item.title,
        item.description,
        item.source.name
      );
    });
  }
}

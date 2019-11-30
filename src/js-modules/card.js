export default class Card {
  constructor(url, img, date, title, subtitle, resurse) {
    
    this.cardElement = this.getCard(url,img, date, title, subtitle, resurse);
    
  }
  getCard(url, img, date,  title, subtitle, resurse) {
    
    return `<div class="card-container">
    <a class="card-container__link" href="${url}" target ="blank">
      <div
        class="card-container__img">
        <img class="card-container__image" src="${img}" alt="Изображение новостной карточки">
      </div>
      <div class="card-container__text">
        <span class="card-container__date">${date}</span>
        <h2 class="card-container__title">
          ${title}
        </h2>
        <p class="card-container__subtitle">
          ${subtitle}
        </p>
        <p class="card-container__source">${resurse}</p>
      </div>
      </a>
    </div>`.trim();
  }
}

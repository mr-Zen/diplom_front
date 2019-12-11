export class GitCards {
    constructor(date, ava, name, mail, text ) {
      
      this.cardElement = this.getCard(date, ava, name, mail, text );
      
    }
    getCard(date, ava, name, mail, text ) {
      return `<div class="swiper-slide">
      <span class="swiper-slide__date">${date}</span>
      <div class="swiper-slide__autor">
        <img
          class="swiper-slide__autor-img"
          src="${ava}"
          alt="Автор"
        />
        <div class="swiper-slide__autor-container">
          <span class="swiper-slide__autor-name">${name}</span>
          <span class="swiper-slide__autor-mail">${mail}</span>
        </div>
      </div>
      <p class="swiper-slide__autor-title">
        ${text}
      </p>
    </div>`.trim();
    }
  }
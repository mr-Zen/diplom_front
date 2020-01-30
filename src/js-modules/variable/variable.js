export const form = document.forms.search;
export const formInput = form.elements.news;
export const errorMessage = document.querySelector("#errorText");
export const searchBtn = document.querySelector("#searchBtn");
export const preLoader = document.querySelector(".preloader");
export const searchBox = document.querySelector(".search-result");
export const linkAnalytic = document.querySelector(".search-result__subtitle");
export const cardsBox = document.querySelector(".cards");
export const addCardsBtn = document.querySelector(".search-result__btn")
//7 дней от текущей даты
const sevenDays = Math.round(new Date().getTime()/1000-7 * 86400);
const dateString = new Date(sevenDays*1000);
const year = new Date(dateString).getFullYear();
const month = new Date(dateString).getMonth() + 1;
const date = new Date(dateString).getDate();
export const fullDate = `${year}-${month}-${date}`;

export const config = {
    apiKey: "6e287fb17dcf42a3a51faf1b5a90d8b7",
    from: fullDate,
    to:"",
    pageSize: "100",
    
}
export const noResult = document.querySelector(".no-result");

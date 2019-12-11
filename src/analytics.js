import "./pages/analytics.css";
import { getMonth } from "./js-modules/correction_date";

const localData = JSON.parse(localStorage.getItem("res"));
const dateAnalytics = document.querySelectorAll(".analitik__chart-date");
const graf = document.querySelectorAll(".analitik__chart-percent");

function localKeyWords() {
  document.querySelector(".analitik__title").textContent =
    "Вы" +
    " " +
    "спросили:" +
    " " +
    "«" +
    localStorage.getItem("keywords") +
    "»";
  if (localData.totalResults > 100) {
    document.querySelector("#newsWeek").textContent = "100";
  } else {
    document.querySelector("#newsWeek").textContent = localData.totalResults;
  }
}
localKeyWords();

//Дата в шапке графика
function analitikMonth() {
  document.querySelector(".analitik__chart-column").textContent =
    "Дата" + " " + "(" + getMonth(new Date()) + ")";
}
analitikMonth();

// Форматирование даты для аналитики
function dateForAnalytic(date) {
  const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб"];
  return `${date.getDate()}, ${days[date.getDay()]}`;
}
// Рендер даты с ведущим нулем
function returnDate(milliseconds) {
  let date = new Date(milliseconds).getDate();
  if (date < 10) {
    date = "0" + date;
  }
  const year = new Date(milliseconds).getFullYear();
  let month = new Date(milliseconds).getMonth() + 1;
  if (month < 10) {
    month = "0" + month;
  }
  return `${year}-${month}-${date}`;
}

const dayNow = new Date();
const templateWeek = [];
templateWeek[returnDate(new Date(dayNow))] = 0;
templateWeek[returnDate(new Date(dayNow - 86400000))] = 0;
templateWeek[returnDate(new Date(dayNow - 86400000 * 2))] = 0;
templateWeek[returnDate(new Date(dayNow - 86400000 * 3))] = 0;
templateWeek[returnDate(new Date(dayNow - 86400000 * 4))] = 0;
templateWeek[returnDate(new Date(dayNow - 86400000 * 5))] = 0;
templateWeek[returnDate(new Date(dayNow - 86400000 * 6))] = 0;

// Рендер графиков
function renderEntriesWeek() {
  let sumTitle = 0;
  localData.articles.forEach(item => {
    sumTitle =
      sumTitle +
      item.title
        .toLowerCase()
        .split(localStorage.getItem("keywords").toLowerCase()).length -
      1;
    const sumTitleAndDescription = item.title + item.description;
    const allSumEntries =
      sumTitleAndDescription
        .toLowerCase()
        .split(localStorage.getItem("keywords").toLowerCase()).length - 1;
    const publishDate = item.publishedAt.split("T")[0];

    if (publishDate in templateWeek) {
      templateWeek[publishDate] += allSumEntries;
    }
    document.querySelector("#newsTitle").textContent = sumTitle;
  });
  const sorted = [];
  for (const key in templateWeek) {
    sorted[sorted.length] = key;
  }
  sorted.sort();
  for (let i = 0; i < 7; i++) {
    dateAnalytics[i].textContent = dateForAnalytic(new Date(sorted[i]));
    graf[i].textContent = templateWeek[sorted[i]];
    graf[i].style = "width: " + templateWeek[sorted[i]] + "%";
  }
}
renderEntriesWeek();

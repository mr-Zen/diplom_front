const localData = JSON.parse(localStorage.getItem("res"));
const dateAnalytics = document.querySelectorAll(".analitik__chart-date");
const graf = document.querySelectorAll(".analitik__chart-percent");

//Вставка данных для аналитики из localStorage
export function sumTitleKeyWords() {
  let entries = {};
  let sumTitle = 0;
  localData.articles.forEach(item => {
    let sum = 0;
    if (item.title) {
      sumTitle =
        sumTitle +
        item.title
          .toLowerCase()
          .split(localStorage.getItem("keywords").toLowerCase()).length -
        1;
      sum =
        sum +
        item.title
          .toLowerCase()
          .split(localStorage.getItem("keywords").toLowerCase()).length -
        1;
    }
    if (item.description) {
      sum =
        sum +
        item.description
          .toLowerCase()
          .split(localStorage.getItem("keywords").toLowerCase()).length -
        1;
    }
    
    let publishDate = item.publishedAt.split("T")[0];
    if (publishDate in entries) {
      entries[publishDate] += sum;
    } else {
      entries[publishDate] = sum;
    }

    document.querySelector("#newsTitle").textContent = sumTitle;
  });
  let sorted = [];
  for (let key in entries) {
    sorted[sorted.length] = key;
  }
  sorted.sort();
  

  for (let i = 0; i < 7; i++) {
    
    
    dateAnalytics[i].textContent = sorted[i];
    graf[i].textContent = entries[sorted[i]];
    graf[i].style = "width: " + entries[sorted[i]] + "%";
    }
  
}

export function localKeyWords() {
  document.querySelector(".analitik__title").textContent =
    "Вы" +
    " " +
    "спросили:" +
    " " +
    "«" +
    localStorage.getItem("keywords") +
    "»";
  document.querySelector("#newsWeek").textContent = localData.totalResults;
}

function getMonth(month) {
  let months = [
    "январь",
    "февраль",
    "март",
    "апрель",
    "май",
    "июнь",
    "июль",
    "август",
    "сентябрь",
    "октябрь",
    "ноябрь",
    "декабрь"
  ];

  return months[month.getMonth()];
}
//Дата в шапке графика
export function analitikMonth() {
  document.querySelector(".analitik__chart-column").textContent =
    "Дата" + " " + "(" + getMonth(new Date()) + ")";
}

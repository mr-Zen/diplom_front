const localData = JSON.parse(localStorage.getItem("res"));

//Вставка поскового запроса из localStorage
let entries={}
export function sumTitleKeyWords() {
  let sumTitle = 0;
  let sumDescription = 0;
  localData.articles.forEach(item => {
    sumTitle =
      sumTitle +
      item.title
        .toLowerCase()
        .split(localStorage.getItem("keywords").toLowerCase()).length -
      1;
      
      sumDescription = sumDescription +
      item.description
      .toLowerCase()
      .split(localStorage.getItem("keywords").toLowerCase()).length -
    1;
    //Общее количество вхождений запроса в title и description
    let sum = sumTitle + sumDescription;
  
//     let publishDate = item.publishedAt.split('T')[0];
//     if (publishDate in entries) {
//         entries[publishDate]+= sum;
//       }else{
//           entries[publishDate] = sum
//       }
//       let sorted = [];
// for (let key in entries) {
//   sorted[sorted.length] = key;
// }

    document.querySelector("#newsTitle").textContent = sumTitle;
  });
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
    let months = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь',  'декабрь'];
  
    return months[month.getMonth()];
  }
//Дата в шапке графика
export function analitikMonth(){
    document.querySelector(".analitik__chart-column").textContent = 'Дата' + ' ' + '(' + getMonth(new Date) + ')'
}
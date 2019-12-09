//Проверка наличия ссылки на изображение в карточке
 export function nullImage(elem) {
  if (!elem) {
    elem = './images/nofoto.jpg'
    return elem
  } else {
    return elem;
  }
}

// Получение и отрисовка карточек
// function getCardsElements(array){
//   array.forEach(item => {
//       const fixMonth = new Date(item.publishedAt);
//       const { cardElement } = new Card(
//         item.url,
//         nullImage(item.urlToImage),
//         `${fixMonth.getDate()} ${getMonth(fixMonth)}, ${fixMonth.getFullYear()}`,
//         item.title,
//         item.description,
//         item.source.name
//       );
//       cardsBox.insertAdjacentHTML("beforeend", cardElement);
//   })
    
// }
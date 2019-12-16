//Проверка наличия ссылки на изображение в карточке
 export function nullImage(element) {
  if (!element) {
    element = 'images/not-found_v1.svg'
    return element
  } else {
    return element;
  }
}

// Кастомная дата полученная от Api
export function getMonth(month) {
  const months = [
    "января",
    "февраля",
    "марта",
    "апреля",
    "мая",
    "июня",
    "июля",
    "августа",
    "сентября",
    "октября",
    "ноября",
    "декабря"
  ];
  return months[month.getMonth()];
}

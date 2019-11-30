// Кастомная дата полученная от Api
export function getMonth(month) {
    let months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября',  'декабря'];
  
    return months[month.getMonth()];
  }
  


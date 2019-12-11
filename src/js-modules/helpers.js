//Проверка наличия ссылки на изображение в карточке
 export function nullImage(elem) {
  if (!elem) {
    elem = 'https://diesel.tigmig.ru/image/cache/no-image-900x.jpg'
    return elem
  } else {
    return elem;
  }
}


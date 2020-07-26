// Vamos a elegir la tipografía del documento
// setting_mySubscriptions_font.html

let divBody = document.querySelector('body'); // console.log(divBody);

function fontEdit(idFont, newFont) {
  // console.log('este el el idFont: ', idFont);
  // console.log('este es el newFont: ', newFont);

  let previewCard = document.querySelector('#previewCard'); // console.log(previewCard);
  let previewMenu = document.querySelector('#previewMenu'); // console.log(previewMenu);

  const dNone = idFont.querySelector('.d-none'); // console.log(dNone);
  let divSelected = divBody.querySelector('.d-block'); // console.log(divSelected);

  // Mostrar el tilde actual
  dNone.className += ' d-block';
  dNone.classList.remove('d-none');

  // Borrar el tilde anterior
  divSelected.classList.remove('d-block');
  divSelected.className += ' d-none';

  // Cambiar la font de la preview.
  previewMenu.style.fontFamily = newFont;
  previewCard.style.fontFamily = newFont;
}

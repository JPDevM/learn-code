// Vamos a elegir la tipografía del documento
// setting_mySubscriptions_font.html

let divBody = document.querySelector('body');

let containerFonts = document.querySelector('#containerFonts');

let fontsDivs = Array.from(containerFonts.querySelectorAll('div[id^=font]'));

let allCheckIcons = Array.from(containerFonts.querySelectorAll('.fa-check'))
;

let previewCard = document.querySelector('#previewCard');
let previewMenu = document.querySelector('#previewMenu');

function fontEdit(event) {
  let parent = event.currentTarget;
  let checkIcon = parent.querySelector('.fa-check');
  let newFont = parent.dataset.font;

  allCheckIcons.forEach(function (oneCheckIcon) {
    oneCheckIcon.classList.remove('d-block');
    oneCheckIcon.classList.add('d-none');
  })

  if (!checkIcon.classList.contains('d-block')) {
    checkIcon.classList.add('d-block');
  } 

  // Cambiar la font de la preview.
  previewMenu.style.fontFamily = newFont;
  previewCard.style.fontFamily = newFont;
}

fontsDivs.forEach(function (oneDiv) {
  oneDiv.addEventListener('click', fontEdit)
})
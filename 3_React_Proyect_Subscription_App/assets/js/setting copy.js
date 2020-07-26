// Vamos a elegir la tipografía del documento
// setting_mySubscriptions_font.html

// hacer una base de datos de usuarios separada
// users;
// userId;
// userName;
// usaerPass;
// settingShort;
// settingTotal;
// settingCurrency;
// settingTheme;
// settingFont;
// settingPlan;
// subsUser;

let divBody = document.querySelector('body'); // console.log(divBody);
let divPreview = document.querySelector('.divPreview'); //console.log(divPreview);

let fontOpenSans = document.querySelector('#fontOpenSans');
console.log(fontOpenSans.attributes.fontFamily);
let fontDancingScript = document.querySelector('#fontDancingScript');
console.log(fontDancingScript);
let fontIndieFlower = document.querySelector('#fontIndieFlower');
console.log(fontIndieFlower);
let fontNunito = document.querySelector('#fontNunito');
console.log(fontNunito);
let fontRaleway = document.querySelector('#fontRaleway');
console.log(fontRaleway);
let fontRobotoMono = document.querySelector('#fontRobotoMono');
console.log(fontRobotoMono);

let divOpenSans = document.querySelector('#fontOpenSans');
console.log(divOpenSans);
let divDancingScript = document.querySelector('#fontDancingScript');
console.log(divDancingScript);
let divIndieFlower = document.querySelector('#fontIndieFlower');
console.log(divIndieFlower);
let divNunito = document.querySelector('#fontNunito');
console.log(divNunito);
let divRaleway = document.querySelector('#fontRaleway');
console.log(divRaleway);
let divRobotoMono = document.querySelector('#fontRobotoMono');
console.log(divRobotoMono);

let previewCard = document.querySelector('#previewCard');
console.log(previewCard);
let previewMenu = document.querySelector('#previewMenu');
console.log(previewMenu);

previewCard.style.fontFamily = 0;

// si selecciona entrar al divPreviev, al body y cambiarle la font

let fontFamilyDefault = previewMenu.style.fontFamily; // console.log(fontFamilyDefault);
let fontFamilySelected = divBody.style.fontFamily; // console.log(fontFamilySelected);

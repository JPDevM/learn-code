// setting_currency.html

let divBody = document.querySelector('body');
let containerCurrencys = document.querySelector('#containerCurrencys');
let arrCurrencys = [];

// Consume API's
fetch('assets/js/currency.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let allCurrencies = data.pop();
    let actualizationDate = allCurrencies.Date;
    delete allCurrencies.Date;

    for (let currency in allCurrencies) {
      // Guardo las variables en un nuevo objeto
      let crrncyId = 'crrncy';
      crrncyId = crrncyId.concat(currency);

      arrCurrencys{
        code: currency,
        id: crrncyId,
        symbol: '  ',
        value: allCurrencies[currency],
        actualization: actualizationDate,
        check: 'd-none',
      };

      addCurrency(containerCurrencys, arrCurrencys[currency], currency);
    }
  });

function addCurrency(parent, arrCurrencys, count) {
  console.log(arrCurrencys[count]);
  // try {
  //   let newCurrency = `
  //                   <div id="${arrCurrencys.id}" class="col-12 bg-dark-light border-setting-top">
  //                       <div class="row align-items-center my-2">
  //                         <div class=" col-10 text-white text-truncate">
  //                           <p class="my-0">${arrCurrencys.code} (${arrCurrencys.symbol})</p>
  //                         </div>
  //                         <div class="col-2 text-orange text-right">
  //                           <i class="fa fa-check text-success ${arrCurrencys.check}" aria-hidden="true"></i>
  //                         </div>
  //                       </div>
  //                   </div>
  //                  `;
  //   if (parent !== null) {
  //     parent.insertAdjacentHTML('beforeend', newCurrency);
  //   }
  // } catch (error) {
  //   throw new Error(
  //     'Does not load the parent. It may not be necessary in this HTML'
  //   );
  // }
}

// for (let currency in arrCurrencys) {
//   addCurrency(containerCurrencys, arrCurrencys[currency]);
// }

// Edit Currencys
let currencysDivs = Array.from(
  containerCurrencys.querySelectorAll('div[id^=crrncy]')
);
let allCheckIcons = Array.from(
  containerCurrencys.querySelectorAll('.fa-check')
);

function currencyEdit(event) {
  let parent = event.currentTarget;
  let checkIcon = parent.querySelector('.fa-check');

  // Recorremos el array de allCheckIcons y les cambiamos las clases.
  allCheckIcons.forEach(function (oneCheckIcon) {
    oneCheckIcon.classList.remove('d-block');
    oneCheckIcon.classList.add('d-none');
  });

  // Mostramos el check al clickeado.
  if (!checkIcon.classList.contains('d-block')) {
    checkIcon.classList.add('d-block');
  }
}

// La funcien escucha cada vez que se hace un evento click en un div que contiene tod la estructura de la font.
currencysDivs.forEach(function (oneDiv) {
  oneDiv.addEventListener('click', currencyEdit);
});

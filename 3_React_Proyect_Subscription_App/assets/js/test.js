const currencyTable = document.querySelector('#currencyTable');
//console.log(currencyTable);

// Problem 1
const result1 = document.querySelector('#eje1');
// console.log(result1);

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
      // Add ALL Currencys for table
      
      let finalData = {
        code: currency,
        value: allCurrencies[currency],
        actualization: actualizationDate,
      };

      addCurrency(currencyTable, finalData);

      // Add ALL Currencys for eje1 & eje2
      problem1(result1, finalData);
      // problem2(eje2, allCurrencies[i]);
    }
  });

// Insert a values of currency.json
function addCurrency(parent, data) {
  try {
    let newCurrency = `
      <tr>
        <th scope="row">€</th>
        <td>${data.code}</td>
        <td>${data.value}</td>
        <td>${data.actualization}</td>
      </tr>
    `;

    if (parent !== null) {
      parent.insertAdjacentHTML('beforeend', newCurrency);
    }
  } catch (error) {
    throw new Error(
      'Does not load the parent. It may not be necessary in this HTML'
    );
  }
}

function problem1(parent, data) {
  try {
    let resultado1 = `<p class="text-warning">resultado 1 - ${data.code}</p>`;

    if (parent !== null) {
      parent.insertAdjacentHTML('beforeend', resultado1);
    }
  } catch (error) {
    throw new Error(
      'Does not load the parent. It may not be necessary in this HTML'
    );
  }
}

/*
let colors = ['Yellow', 'Black', 'Pink', 'Blue'];
let car = {
  brand: 'Renault',
  model: 'Megane',
  year: 2020,
};

for (const oneColor of colors) {
  console.log(oneColor);
}

for (const prop in car) {
  console.log(`My car: ${prop} - ${car[prop]}`);
}
*/
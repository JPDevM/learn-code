const currencyTable = document.querySelector('#currencyTable');
//console.log(currencyTable);

// Consume API's
fetch('assets/js/currency.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let allCurrencies = data;
    for (let i = 0; i < allCurrencies.length; i++) {
      // Add ALL Currencys for table
      addCurrency(currencyTable, allCurrencies[i]);

      // Add ALL Currencys for eje1 & eje2
      problem1(eje1, allCurrencies[i]);
      // problem2(eje2, allCurrencies[i]);
    }
  });

// Insert a values of currency.json
function addCurrency(parent, data) {
  try {
    let newCurrency = `
        <tr>
          <th scope="row">€</th>
          <td>${data}</td>
          <td>${data.AUD}</td>
          <td>${data.Date}</td>
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

// Problem 1
const result1 = document.querySelector('#eje1');
console.log(result1);

function problem1(parent, data) {
  try {
    let resultado1 = `<p class="text-warning>resultado 1${data.USD}</p>`;
    console.log(resultado1);

    if (parent !== null) {
      parent.insertAdjacentHTML('beforeend', resultado1);
      console.log('entra al if');
    }
  } catch (error) {
    throw new Error(
      'Does not load the parent. It may not be necessary in this HTML'
    );
  }
}

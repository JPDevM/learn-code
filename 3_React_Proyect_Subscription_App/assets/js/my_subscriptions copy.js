const productsList = document.querySelector('#mySubscriptions');
console.log(productsList);

// Paso 2: Leer Variables de la DB
// Paso 3: Convinar 1 y 2 con 1 ejemplo
// Paso 4: que salga el listado completo

// Insert una subscription
function addSub(parent, name, colorhexa, logoicon, description, price, days) {
  let newSub = `
    <li id="card" class="my-2">
      <a href="">
        <div style="background-color:#${colorhexa}; border-radius: 0.2em;">
          <div class="row" style="color: white">
            <div class="col-2">
              <i class="fa ${
                logoicon || 'fa-spotify'
              } m-2" style="font-size: 2em;"></i>
            </div>
            <div class="col-6">
              <div class="row">
                <p class="m-0"><strong>${name}</strong></p>
              </div>
              <div class="row">
                <p class="m-0"><small>
                  ${description || ''}</small>
                </p>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <p class="text-right m-0"><strong>${
                  price || '0.00'
                }€</strong></p>
              </div>
              <div class="row">
                <p class="text-right m-0">${days}</p>
              </div>
            </div>
          </div>
        </div>
      </a>
    </li>
  `;

  parent.insertAdjacentHTML('beforeend', newSub);
}

fetch('assets/js/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let allSubscriptions = data.subscriptions;

    for (let i = 0; i < 20; i++) {
      if (allSubscriptions[i].active == 'yes') {
        addSub(
          productsList,
          allSubscriptions[i].name,
          allSubscriptions[i].colorhexa,
          allSubscriptions[i].logoicon,
          allSubscriptions[i].description,
          allSubscriptions[i].price,
          '2 días'
        );
      }
    }
  });

// function addAllSubs ()
// function addActiveSubs ()
// function addInactiveSubs ()

// Consumir API's
// fetch('assets/js/data.json')
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (data) {
//     console.log(data);
//     let allSubscriptions = data.subscriptions;

//     for (let i = 0; i < 20; i++) {
//       addSub(
//         productsList,
//         allSubscriptions[i].name,
//         allSubscriptions[i].colorhexa,
//         allSubscriptions[i].logoicon,
//         allSubscriptions[i].description,
//         allSubscriptions[i].price,
//         '2 días'
//       );
//     }
//   });

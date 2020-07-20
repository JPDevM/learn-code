const allSubsList = document.querySelector('#allSubscriptions');
console.log(allSubsList);

const mySubsList = document.querySelector('#mySubscriptions');
console.log(mySubsList);

const popSubsList = document.querySelector('#popularSubscriptions');
console.log(popSubsList);

// Paso 2: Leer Variables de la DB
// Paso 3: Convinar 1 y 2 con 1 ejemplo
// Paso 4: que salga el listado completo

// Insert a subscription with price
function addSubWithPrice(
  parent,
  name,
  colorhexa,
  logoicon,
  description,
  price,
  days
) {
  let newSubWithPrice = `
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
                <p class="m-0"><small>${description || ''}</small>
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

  parent.insertAdjacentHTML('beforeend', newSubWithPrice);
}

// Insert a subscription without price
function addSub(parent, name, colorhexa, logoicon, active) {
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
                <p class="m-0" style="line-height: 45px;"><strong>${name}</strong></p>
              </div>
            </div>
            <div class="col-4">
              <div class="row">
                <p class="text-right m-0" style="line-height: 45px;">
                  ${
                    active
                      ? '<i class="fa fa-check" aria-hidden="true"></i>'
                      : '<i class="fa fa-plus" aria-hidden="true"></i>'
                  }
                </p>
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
    let activeSubscriptions = data.subscriptions;
    let popSubscriptions = data.subscriptions;

    for (let i = 0; i < 20; i++) {
      // Add ALL subsctiption
      addSub(
        allSubsList,
        allSubscriptions[i].name,
        allSubscriptions[i].colorhexa,
        allSubscriptions[i].logoicon,
        allSubscriptions[i].active
      );

      // Add only ACTIVE subscription
      if (activeSubscriptions[i].active) {
        addSubWithPrice(
          mySubsList,
          activeSubscriptions[i].name,
          activeSubscriptions[i].colorhexa,
          activeSubscriptions[i].logoicon,
          activeSubscriptions[i].description,
          activeSubscriptions[i].price,
          '2 días'
        );
      }

      // Add only POPULAR subscription
      if (popSubscriptions[i].active) {
        addSub(
          popSubsList,
          popSubscriptions[i].name,
          popSubscriptions[i].colorhexa,
          popSubscriptions[i].logoicon,
          popSubscriptions[i].active
        );
      }
    }
  });

parent.insertAdjacentHTML('berofeend', allSubscriptions);
parent.insertAdjacentHTML('berofeend', activeSubscriptions);
parent.insertAdjacentHTML('berofeend', popSubscriptions);

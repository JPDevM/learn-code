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
  
  if (parent !== null) {
    parent.insertAdjacentHTML('beforeend', newSubWithPrice);
  }
}

// Insert a subscription without price
function addSub(parent, data) {
  try {
    let newSub = `
      <li id="card" class="my-2">
        <a href="">
          <div style="background-color:#${data.colorhexa}; border-radius: 0.2em; padding: 0 15px;">

            <div class="row align-items-center" style="color: white">
              <div class="col-3">
                <i class="fa ${data.logoicon || 'fa-spotify'} my-2" style="font-size: 2em;"></i>
              </div>

              <div class="col-6">
                <p class="m-0 text-truncate"><strong>${data.name}</strong></p>
              </div>

              <div class="col-3">
                <p class="text-right m-0">
                  <i class="fa ${ data.active ? 'fa-check' : 'fa-plus' }" aria-hidden="true"></i>
                </p>
              </div>
            </div>

          </div>
        </a>
      </li>
    `;

    if (parent !== null) {     
      parent.insertAdjacentHTML('beforeend', newSub);  
    }
  } catch (error) {
    throw new Error('Atentí que no vino el parent');
  }

}

fetch('assets/js/data.json')
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let allSubscriptionsData = data.subscriptions;
    let activeSubscriptions = data.subscriptions;
    let popSubscriptions = data.subscriptions;

    console.log(allSubscriptionsData);

    for (let i = 0; i < allSubscriptionsData.length; i++) {
      // Add ALL subsctiption
        addSub(allSubsList, allSubscriptionsData[i]);
    }

  });


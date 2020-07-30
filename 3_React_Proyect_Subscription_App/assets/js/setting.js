// Este Javascript administra la carga de los demás javascript
var pathname = window.location.pathname;

// SET Fonts
let arrSettings = [
  { pathname: '/setting_fonts.js', location: '/setting_fonts.html' },
];

function addJS(arrSettings) {
  let newJS = `
    <!-- Custom JavaScript -->
    <script src="assets/js${arrSettings.pathname}"></script>
    `;
  body.insertAdjacentHTML('beforeend', newJS);
}

fontsDivs.forEach(function (oneDiv) {
  oneDiv.addEventListener('click', fontEdit);
})

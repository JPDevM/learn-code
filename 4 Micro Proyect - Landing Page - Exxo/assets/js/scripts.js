jQuery(document).ready(function () {
  /*
	    Navigation
	*/
  $('a.scroll-link').on('click', function (e) {
    e.preventDefault();
    scroll_to($(this), $('nav').outerHeight());
  });
});

// VER COMO CAMBIAR EL COLOR DE FONDE DEL MENÚ

/*
// Hide / Show menu
var menuHeight = $('#menu_bg').outerHeight();
$('#menu_bg').css('margin-top', '-' + menuHeight); // Hide menu when page load
$('#menu_bg').css('display', 'block');

$('#burger').click(function () {
  // close
  if ($(this).hasClass('open')) {
    $('#menu_bg').animate(
      {
        marginTop: -menuHeight,
      },
      500,
      function () {
        // Animation complete.
      }
    );
  }
  // open
  else {
    $('#menu_bg').animate(
      {
        margin: 0,
      },
      500,
      function () {
        // Animation complete.
      }
    );
  }
});
*/

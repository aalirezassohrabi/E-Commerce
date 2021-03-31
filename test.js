$(document).ready(function () {
  // executes when HTML-Document is loaded and DOM is ready

  // breakpoint and up
  $(window).resize(function () {
    if ($(window).width() >= 980) {
      // when you hover a toggle show its dropdown menu
      $('.navbar .dropdown-toggle').hover(function () {
        $(this).parent().toggleClass('show')
        $(this).parent().find('.dropdown-menu').toggleClass('show')
      })

      // hide the menu when the mouse leaves the dropdown
      $('.navbar .dropdown-menu').mouseleave(function () {
        $(this).removeClass('show')
      })

      // do something here
    }
  })

  // document ready
})

// $(document).ready(function () {
//   $('[data-toggle="popover"]').popover()
// })

function myFunction() {
  var element = document.body
  element.classList.toggle('dark-mode')
}

function myFunction1(x) {
  x.classList.toggle('change')
}

function firstfunction() {
  window.open('./ref/form.html')
}

var btn = $('#button')

$(window).scroll(function () {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show')
  } else {
    btn.removeClass('show')
  }
})

btn.on('click', function (e) {
  e.preventDefault()
  $('html, body').animate({ scrollTop: 0 }, '300')
})

function goTo() {
  location.href = document.getElementById('link_id').value
}

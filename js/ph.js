$(window).on('load resize scroll', function() {
  $('.bg-static').each(function() {
    var windowTop = $(window).scrollTop();
    var elementTop = $(this).offset().top;
    var leftPosition = windowTop - elementTop;
      $(this)
        .find('.bg-move')
        .css({ left: leftPosition });
  });
});

function S_übermich() {
  const element = document.getElementById("S_übermich");
  element.scrollIntoView();
}
function S_hobbys() {
  const element = document.getElementById("S_hobbys");
  element.scrollIntoView();
}
function S_beruf() {
  const element = document.getElementById("S_beruf");
  element.scrollIntoView();
}

function S_Freizeitinteressen() {
  const element = document.getElementById("S_Freizeitinteressen");
  element.scrollIntoView();

}
$(document).ready(function() {
      $('#list .list__item').on('click', fak);
      $('#list .list__icon').addClass("show");

  });


  
  function fak(){
    $('#list .list__icon').not($(this).prev()).addClass("show");
      $(this).prev().toggleClass("show");
  }


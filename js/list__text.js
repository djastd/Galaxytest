$(document).ready(function() {
      $('#list .list__item').on('click', f_acc);
  });


  
  function f_acc(){
    $('#list .list__text').not($(this).next()).slideUp(1000);
      $(this).next().slideToggle(2000);
  }
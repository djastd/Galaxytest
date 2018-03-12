$(document).ready(function() {
      $('#list .list__item').on('click', clickItem);
      $('#list .list__icon').addClass("show");
      $('#list .list__icon').on('click', clickIcon);
  });


  
  function clickItem(){
    $('#list .list__icon').not($(this).prev()).addClass("show");
      $(this).prev().toggleClass("show");
  }

  function clickIcon(){
    $('#list .list__icon').not($(this).prev()).addClass("show");
  $(this).toggleClass("show");
  }


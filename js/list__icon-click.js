$(document).ready(function() {
  $('#list .list__icon').on('click', f_accc);
});



 function f_accc(){
$('#list .list__text').not($(this).nextAll('.list__text').first()).slideUp(1000);
$(this).nextAll('.list__text').first().slideToggle(2000);
}
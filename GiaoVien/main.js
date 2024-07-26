$(document).ready(function () {
  $('#tab1').addClass('active');
  $('#t1').addClass('active, click');


  $('.tab').click(function () {

    var tabId = $(this).data('tab');
    $('.tab').removeClass('active, click');
    $(this).addClass('active, click');
    $('.tab-content').removeClass('active');
    $('#' + tabId).addClass('active');
  });
});


$(document).ready(function () {
  $('.btnSua').click(function () {
    $('.input-active').prop('disabled', false);
  })

  $('.btnCapNhat').click(function () {
    $('.input-active').prop('disabled', true);
  })
})
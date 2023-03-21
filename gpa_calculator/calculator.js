var $oBox = $('.outer-box');
var $gpa = $('#gpa');
var $result = $('.result').hide();

$('.btn').click(function() {
  $('.block').last().clone().children().val("").parent().appendTo($('.inner-box'));
});

$oBox.on('keyup', '.units', function() {
  $gpa.text(getTotal());
});

$oBox.on("change", ".grade-select", function() {
  $gpa.text(getTotal());
  $result.is(":hidden") && $result.show();
});

function getTotal() {
  var gradeTotal = 0;
  var sum = 0;
  $(".units").each(function() {
    var $this = $(this);
    if(!isNaN($this.val()) && !isNaN($this.parent().find('.grade-select').val())) {
      sum += parseFloat($this.val() || 0) * parseFloat($this.parent().find('.grade-select').val() || 0);
      gradeTotal += parseFloat($this.val() || 0)
    }
  });
  return  (sum/gradeTotal).toFixed(2);
}

$(".btn").on("click", function () {
  
    $('html, body').animate({scrollTop:$(document).height()}, 'slow');
    return false;
});
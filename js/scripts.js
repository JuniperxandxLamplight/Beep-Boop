$(function(){

  $("form#counter").submit(function(event){
    event.preventDefault();
    var highNumberInput = parseInt($("input#highNumber").val());
    var numberList = []
      var listing = function(number){
      for (var i = 0; i <= number; i++){
        numberList.push(i);
      }
    }
    listing(highNumberInput);

  });


});

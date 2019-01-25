var stringInsert = function(array){
  array.forEach(function(number){
    if (((number+"").indexOf('3')) !== -1){
      array[number] = 'I\'m sorry Dave. I\'m afraid I can\'t do that.';
    } else if (((number+"").indexOf('2')) !== -1){
      array[number] = 'beep!';
    } else if (((number+"").indexOf('1')) !== -1){
      array[number] = 'boop!';
    }
  });
  console.log(array);
}
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
    stringInsert(numberList);

    $(".numberList").text(numberList.join(" "));
  });


});

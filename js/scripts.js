var stringInsert = function(array){
  console.log(name);
  array.forEach(function(number){
    if (((number+"").indexOf('3')) !== -1){
      array[number] = 'I\'m sorry Dave. I\'m afraid I can\'t do that.';
    } else if (((number+"").indexOf('2')) !== -1){
      array[number] = 'beep!';
    } else if (((number+"").indexOf('1')) !== -1){
      array[number] = 'boop!';
    }
  });
}
$(function(){

  $("form#counter").submit(function(event){
    event.preventDefault();
    var userName = $('input#name').val();
    var highNumberInput = parseInt($("input#highNumber").val());
    var numberList = []

    var listing = function(number){
      for (var i = 0; i <= number; i++){
        numberList.push(i);
      }
    }
    listing(highNumberInput);
    stringInsert(numberList);
    console.log(numberList);
    var finalList = numberList.map(function(number){
      if (((typeof number) === 'string') && ((number).indexOf('Dave') !== -1)){
        number = 'I\'m sorry ' + userName + '. I\'m afraid I can\'t do that.';
        console.log(number);
        return number;
      } else{
        return number;
      }
      console.log(finalList);
    });

    $(".numberList").text(finalList.join(" "));
  });


});

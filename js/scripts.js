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
}
$(function(){

  $("form#counter").submit(function(event){
    event.preventDefault();

    if ($('input#name').val() === ""){
      $("#name").removeClass("form-control")
      $("#name").addClass("form-control is-invalid")
      $("#nameError").text("Please enter your name.")
    } else if ($('input#highNumber').val() === "") {
      $("#highNumber").removeClass("form-control")
      $("#highNumber").addClass("form-control is-invalid")
      $("#numberError").text("Please enter a number.")
    } else {
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

      var finalList = numberList.map(function(number){
        if (((typeof number) === 'string') && ((number).indexOf('Dave') !== -1)){
          number = 'I\'m sorry ' + userName + '. I\'m afraid I can\'t do that.';
          return number;
        } else{
          return number;
        }
      });

      finalList.forEach(function(item){
        $("form#counter").hide();
        $("#result").fadeIn();
        if ($("#order").val() === "prepend"){
          $("ul.numberList").prepend('<li>' + item + '</li>');
        } else if ($("#order").val() === "append"){
          $("ul.numberList").append('<li>' + item + '</li>');
        }
      });
    }
  });


});

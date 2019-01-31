var arrayMaker = function(highNumber, userName){
  var numberList = [];
  for (var i = 0; i <= highNumber; i++){
    numberList.push(i);
  }
  numberList.forEach(function(number){
    if ((number.toString().indexOf('3')) !== -1){
      numberList[number] = 'I\'m sorry ' + userName + ' I\'m afraid I can\'t do that.';
    } else if ((number.toString().indexOf('2')) !== -1){
      numberList[number] = 'beep!';
    } else if ((number.toString().indexOf('1')) !== -1){
      numberList[number] = 'boop!';
    }
  });
  return numberList;
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


    var finalList = arrayMaker(highNumberInput, userName);



      $("#marvin").removeClass("firstPage");
      $("#marvin").addClass("secondPage");
      $("#oldQuote").hide();
      $("#newQuote").fadeIn();
      if (highNumberInput <= 10){
        $("#newQuote").text("Well at least you made it easy on me.");
      } else if (highNumberInput <= 50){
        $("#newQuote").text("What a pain.");
      } else if (highNumberInput <= 100){
        $("#newQuote").text("Do you like making my life difficult? Is that it?");
      } else if (highNumberInput > 100){
        $("#newQuote").text("You should take some time to really think about what you do to people for your own sick pleasure.");
      }

      finalList.forEach(function(item){
        $("form#counter").hide();
        $("#result").fadeIn();
        if ($("#order").val() === "prepend"){
          $("ul.numberList").prepend('<li class="animated heartBeat">' + item + '</li>');
        } else if ($("#order").val() === "append"){
          $("ul.numberList").append('<li class="animated heartBeat">' + item + '</li>');
        }
      });
    }
  });

  $("button#refresh").click(function(){
    location.reload();
  });

});

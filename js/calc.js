'use-strict';
$(function(){

  var calculator = new Calculator();

});

// your code here!
function Calculator(){
  $('#equals').click(function(){
    var numberOne = parseInt($('#number1').val())
    var numberTwo = parseInt($('#number2').val())
    var operation = $('#operation').val()
    var validOperators = ["+", "-", "/", "*"]

    if(isNaN(numberOne)){
      $('#result').text('Sorry, one of those is not a valid number!')
    }
    else if(isNaN(numberTwo)){
      $('#result').text('Sorry, one of those is not a valid number!')
    }
    else if(validOperators.indexOf(operation) == -1){
      $('#result').text('Sorry, not a valid operation!')
    }
    else{
      var result_operation = Check(numberOne, numberTwo, operation);
      // debugger;
       $('#result').text(result_operation)
    }
  })
}

function Check(numberOne, numberTwo, operation){
  // debugger;
  if(operation == '*'){
    // debugger;
    var result = numberOne * numberTwo;
  }
  else if(operation == '+'){
    var result = numberOne + numberTwo;
  }
  else if(operation == '-'){
    var result = numberOne - numberTwo;
  }
  else if(operation == '/'){
    var result = numberOne / numberTwo
  }
 return result
}

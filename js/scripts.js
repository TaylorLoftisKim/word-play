$(document).ready(function()  {
  $(".sentence").submit(function(event){
  event.preventDefault();
debugger;

  var sentence = $("#item1").val();
  var arrays = sentence.split(" ");
  var newArray = [];

  arrays.forEach(function(array){

  if ( array.length >= 3) {
    newArray.push(array);
  };
  });

  newArray = newArray.reverse().join(" ");
  $(".output").text(newArray);

  });
});

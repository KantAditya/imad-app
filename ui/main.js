//first select the button by using getElementById
var button = document.getElementById("counter");
var counter = 0;
//and when button is clicked a function is attached to it
//what should this function do?
//first make a request to counter end point
//then capture the response and store it in a variable
//then render the variable in correct span 
button.onclick = function() {
  counter = counter+1;
  var span = document.getElementById("count");
    span.innerHTML = counter.toString();
};
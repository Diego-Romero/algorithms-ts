
// in event bubbling the event will propagate from the most nested element all the way to the body and html tags, in that order, for example:

var parent = document.getElementById("Box");
parent.addEventListener("click", function () {
  console.log("Box is clicked");
});
var child = document.getElementById("myButton");
child.addEventListener("click", function () {
  console.log("Button is clicked");
});

// this will output button first, then box.

// in event capturing it happens in the opposite direction

var parent = document.getElementById("Box");
parent.addEventListener(
  "click",
  function () {
    console.log("Box is clicked");
  },
  true
);

var child = document.getElementById("myButton");
child.addEventListener("click", function () {
  console.log("Button is clicked");
});
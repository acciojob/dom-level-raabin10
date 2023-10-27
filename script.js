//your JS code here. If required.
// Wait for the DOM to be fully loaded before accessing elements
document.addEventListener("DOMContentLoaded", function() {
  // Find the element with the id "level"
  var targetElement = document.getElementById("level");

  if (targetElement) {
    // Initialize the DOM level counter
    var domLevel = 1;

    // Start with the target element
    var currentElement = targetElement;

    // Traverse up the DOM tree until we reach the root HTML element
    while (currentElement.parentElement) {
      domLevel++;
      currentElement = currentElement.parentElement;
    }

    // Display the DOM level using the alert function
    alert("The level of the element is: " + domLevel);
  } else {
    alert("Element with id 'level' not found.");
  }
});

var button = document.querySelector('.navbar-toggler');
var span = document.querySelector('.navbar-toggler-icon');

// Add a click event listener to the button
button.addEventListener('click', function() {
  // Toggle the classes on the span element
  span.classList.toggle('bi-x-lg');
  span.classList.toggle('navbar-toggler-icon');
});
document.getElementById('proceed-btn').addEventListener('click', function() {
  console.log('Button clicked'); // Add this line for debugging
  var selectedOption = document.getElementById('payment-method').value;
  if (selectedOption) {
    window.location.href = selectedOption; // Redirect to the selected payment option page
  } else {
    alert('Please select a payment method.');
  }
});

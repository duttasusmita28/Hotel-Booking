// script.js

document.getElementById('credit-card-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var cardNumber = document.getElementById('card-number').value;
  var expiryDate = document.getElementById('expiry-date').value;
  var cvv = document.getElementById('cvv').value;

  // Validate credit card details
  if (!cardNumber || !expiryDate || !cvv) {
    alert('Please fill in all credit card details.');
    return;
  }

  // Simulate credit card payment processing
  processCreditCardPayment(cardNumber, expiryDate, cvv);
});

function processCreditCardPayment(cardNumber, expiryDate, cvv) {
  // Placeholder for credit card payment processing logic
  setTimeout(function() {
    document.getElementById('payment-status').innerHTML = 'Credit card payment successful!';
  }, 2000); // Simulate a delay of 2 seconds
}

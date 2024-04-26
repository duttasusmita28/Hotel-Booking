// script.js

document.getElementById('debit-card-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var cardNumber = document.getElementById('card-number').value;
  var expiryDate = document.getElementById('expiry-date').value;
  var cvv = document.getElementById('cvv').value;

  // Validate debit card details
  if (!cardNumber || !expiryDate || !cvv) {
    alert('Please fill in all debit card details.');
    return;
  }

  // Simulate debit card payment processing
  processDebitCardPayment(cardNumber, expiryDate, cvv);
});

function processDebitCardPayment(cardNumber, expiryDate, cvv) {
  // Placeholder for debit card payment processing logic
  setTimeout(function() {
    document.getElementById('payment-status').innerHTML = 'Debit card payment successful!';
  }, 2000); // Simulate a delay of 2 seconds
}

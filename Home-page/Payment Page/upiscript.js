// script.js

document.getElementById('upi-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var upiId = document.getElementById('upi-id').value;

  // Validate UPI ID
  if (!upiId) {
    alert('Please enter UPI ID.');
    return;
  }

  // Simulate UPI payment processing
  processUpiPayment(upiId);
});

function processUpiPayment(upiId) {
  // Placeholder for UPI payment processing logic
  setTimeout(function() {
    document.getElementById('payment-status').innerHTML = 'Payment to ' + upiId + ' successful!';
  }, 2000); // Simulate a delay of 2 seconds
}

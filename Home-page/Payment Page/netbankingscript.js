// script.js

document.getElementById('netbanking-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  var selectedBank = document.getElementById('bank').value;

  // Validate bank selection
  if (!selectedBank) {
    alert('Please select a bank.');
    return;
  }

  // Simulate netbanking payment processing
  processNetbankingPayment(selectedBank);
});

function processNetbankingPayment(bank) {
  // Placeholder for netbanking payment processing logic
  setTimeout(function() {
    document.getElementById('payment-status').innerHTML = 'Netbanking payment to ' + bank + ' successful!';
  }, 2000); // Simulate a delay of 2 seconds
}

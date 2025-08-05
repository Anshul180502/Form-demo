document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message');

  if (name && email) {
    message.style.color = 'green';
    message.textContent = `Thank you, ${name}! We'll contact you at ${email}.`;
    this.reset(); // Clear the form
  } else {
    message.style.color = 'red';
    message.textContent = 'Please fill out both fields.';
  }
});

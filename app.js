const form = document.querySelector('#login-form');
const errorMessage = document.querySelector('#error-message');

const users = [
  { username: 'user1', password: 'pass1' },
  { username: 'user2', password: 'pass2' }
];

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = document.querySelector('#username').value;
  const password = document.querySelector('#password').value;

  const user = users.find(
    (user) => user.username === username && user.password === password
  );

  if (user) {
    // Logged in successfully
    window.location.href = 'https://www.example.com/dashboard';
  } else {
    errorMessage.textContent = 'Incorrect username or password';
  }
});

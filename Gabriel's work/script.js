function register() {
  const email = document.getElementById('reg-email').value;
  const password = document.getElementById('reg-password').value;

  if (email === 'admin@gmail.com' && password === 'Admin') {
    alert('Registration successful!');
    window.location.href = 'welcomepage.html';
  } else {
    alert('Only admin@gmail.com with password Admin is allowed.');
  }
}

function login() {
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  if (email === 'admin@gmail.com' && password === 'Admin') {
    alert('Login successful!');
    window.location.href = 'welcomepage.html';
  } else {
    alert('Invalid email or password.');
  }
}
// Handle between login and signup forms
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const showLoginBtn = document.getElementById('show-login');
const showSignupBtn = document.getElementById('show-signup');

showLoginBtn.addEventListener('click', () => {
  loginForm.style.display = '';
  signupForm.style.display = 'none';
  showLoginBtn.classList.add('active');
  showSignupBtn.classList.remove('active');
});

showSignupBtn.addEventListener('click', () => {
  loginForm.style.display = 'none';
  signupForm.style.display = '';
  showSignupBtn.classList.add('active');
  showLoginBtn.classList.remove('active');
});

// Handle login
loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;
  const message = document.getElementById('login-message');
  message.textContent = '';
  try {
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('token', data.token);
      message.style.color = 'green';
      message.textContent = 'Login successful!';
      setTimeout(() => {
        window.location.href = 'welcome.html';
      }, 800);
    } else {
      message.style.color = '#e74c3c';
      message.textContent = data.message || 'Login failed';
    }
  } catch (err) {
    message.style.color = '#e74c3c';
    message.textContent = 'Server error';
  }
});

// Handle signup
signupForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = document.getElementById('signup-name').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;
  const phone = document.getElementById('signup-phone').value;
  const message = document.getElementById('signup-message');
  message.textContent = '';
  try {
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, phone })
    });
    const data = await res.json();
    if (res.ok) {
      message.style.color = 'green';
      message.textContent = 'Sign-up successful! Please log in.';
      setTimeout(() => {
        showLoginBtn.click();
      }, 1200);
    } else {
      message.style.color = '#e74c3c';
      message.textContent = data.message || 'Sign-up failed';
    }
  } catch (err) {
    message.style.color = '#e74c3c';
    message.textContent = 'Server error';
  }
}); 
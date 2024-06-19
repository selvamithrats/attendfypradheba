function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    if (username && password) {
        localStorage.setItem(username, password);
        alert('User registered successfully!');
        document.getElementById('register-username').value = '';
        document.getElementById('register-password').value = '';
        window.location.href = 'index.html'; // Redirect to the landing page after successful registration
    } else {
        alert('Please fill out all fields.');
    }
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    if (username && password) {
        const storedPassword = localStorage.getItem(username);
        if (password === storedPassword) {
            alert('Login successful!');
            window.location.href = 'dashboard.html'; // Redirect to the dashboard page after successful login
        } else {
            alert('Invalid username or password.');
        }
    } else {
        alert('Please fill out all fields.');
    }
}



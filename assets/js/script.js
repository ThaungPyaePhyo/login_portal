document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('../php/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `username=${username}&password=${password}`
    })
    .then(response => response.text())
    .then(data => {
        document.getElementById('message').innerText = data;
        if (data === 'Login Succeed') {
            window.location.href = 'dashboard.html';
        }
    })
    .catch(error => console.error('Error:', error));
});

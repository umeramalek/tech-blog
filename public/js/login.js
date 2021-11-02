const loginSection = async (event) => {
    event.preventDefault();

    const email = document.querySelector("#email-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();
    if (!email || !password) {
        alert('Fill out both fields');
        return;
    }
    const response = await fetch('/api/users/login', { method: 'POST',
        body: JSON.stringify({
            email, password
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    if (response.ok) {
        document.location.replace('/');
    }
    else {
        alert('Login failure');
    }
};



document.querySelector("#login-form").addEventListener('submit', loginSection);

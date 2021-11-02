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

const signUpSection = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#name-signup").value.trim();
    const email = document.querySelector("#email-signup").value.trim();
    const password = document.querySelector("#password-signup").value.trim();
    if (username && email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({
                email, username, password
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        if (response.ok) {
            document.location.replace('/');
        }
        else {
            alert('Failed to signup');
        }
    }
};

document.querySelector("#login-form").addEventListener('submit', loginSection);
document.querySelector('.signup-form').addEventListener('submit', signUpSection);
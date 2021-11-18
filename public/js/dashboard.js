const postForm = async (event) => {
    event.preventDefault();

    const title = document.querySelector("#new-title").value.trim();
    const content = document.querySelector("#new-content").value.trim();
    if (title && content) {
        const response = await fetch('/api/post/new', {
            method: 'POST',
            body: JSON.stringify({
                title, content
            }),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.replace('/dashboard');
        }
        else {
            alert('Failed to make post');
        }
    }
};

document.querySelector("#post-form").addEventListener('submit', postForm);
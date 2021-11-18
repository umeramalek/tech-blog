const commentForm = async (event) => {
    event.preventDefault();

    const content = document.querySelector("#new-comment").value.trim();
    if (content) {
        const response = await fetch(`/api/post/${document.location.href[document.location.href.length-1]}`, {
            method: 'POST',
            body: JSON.stringify({content}),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok) {
            document.location.reload();
        }
        else {
            alert('Failed to add comment');
        }      
    }
};

document.querySelector("#comment-form").addEventListener('submit', commentForm);
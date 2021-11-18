const postForm = async (event) => {
    
    event.preventDefault();

    const title = document.querySelectorAll("#update-post input")[0].value.trim();
    const content = document.querySelectorAll("#update-post input")[1].value.trim();
    if (!title || !content) {
        alert('Fill out both fields')
        return;
    }
    const response = await fetch(`/api/post/${document.location.href[document.location.href.length-1]}`, {
        method: 'PUT',
        body: JSON.stringify({title, content}),
        headers: {'content-Type': 'application/json'}
    });
    response.ok? document.location.replace('/dashboard'): alert('Failed to update');
};

const deletePost = async () => {
    const response = await fetch(`/api/post/${document.location.href[document.location.href.length-1]}`, {
        method: 'DELETE',
        headers: {'Content-Type': 'application/json'}
    });
    response.ok? document.location.replace('/dashboard'): alert('Failed to delete');
};

document.querySelector("#delete-button").addEventListener('click', deletePost);
document.querySelector("#submit-form").addEventListener('click', postForm);
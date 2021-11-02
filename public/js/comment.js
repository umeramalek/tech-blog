const commentSection = async (event) => {
    event.preventDefault();


    const comment = document.querySelector("new-comment").value.trim();
    if (comment) {
        const response = await fetch (`/api/post/${document.location.href[document.location.href.length-1]}`, {
            method : 'POST',
            body: JSON.stringify([content]),
            headers: {'Content-Type': 'application/json'}
        });
        if (response.ok){
            document.location.reload();
        }
        else {
            alert("failed to add a comment")
        }
    }
};

document.querySelector("#comment-form").addEventListener('submit', commentSection);
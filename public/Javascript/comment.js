const handleComment = async (event) => {
    event.preventDefault();
    
    const post_id = document.querySelector("#post-id").value;
    const comment_text = document.querySelector('textarea[name="comment-body"]').value;
    
  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post_id,
        comment_text,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.ok) {
      document.location.reload();
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector("#new-comment")
  .addEventListener("submit,", handleComment);

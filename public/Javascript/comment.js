const handleComment = async (event) => {
    event.preventDefault();
    
    const post = document.querySelector("#post-id").value;
    const comment = document.querySelector("#comment-text").value;
    
  if (comment) {
    const response = await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({
        post,
        comment,
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

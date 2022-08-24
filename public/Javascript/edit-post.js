const handleEditPost = async (event) => {
  event.preventDefault();

  const post = document.querySelector('input[name="post-id"]').value;
  const title = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-text"]').value;

  const response = await fetch(`/api/post/${post}`, {
    method: "PUT",
    body: JSON.stringify({
      title,
      content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (response.ok) {
    document.location.replace("/dashboard");
  } else {
    alert("Failed to update your post");
  }
  document.location.replace("/dashboard");
};

document.querySelector("#edit-post").addEventListener("submit", handleEditPost);

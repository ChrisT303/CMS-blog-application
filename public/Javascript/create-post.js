const handleNewPost = async function (event) {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/posts`, {
    method: "POST",
    body: JSON.stringify({
      post_title,
      post_content,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", handleNewPost);

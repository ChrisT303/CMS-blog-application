const handleNewPost = async function (event) {
  event.preventDefault();

  const post = document.querySelector('input[name="post-title"]').value;
  const content = document.querySelector('textarea[name="post-body"]').value;

  await fetch(`/api/post`, {
    method: "POST",
    body: JSON.stringify({
      post,
      content,
    }),
    headers: { "Content-Type": "application/json" },
  });
};

document
  .querySelector("#new-post-form")
  .addEventListener("submit", handleNewPost);

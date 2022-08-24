const handleNewPost = async function (event) {
  event.preventDefault();

  const post = document.querySelector("#title-id").value;
  const content = document.querySelector("#post-content").value;

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

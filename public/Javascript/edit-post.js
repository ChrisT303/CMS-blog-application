const id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

const handleEditPost = async (event) => {
  event.preventDefault();

  const post_title = document.querySelector('input[name="post-title"]').value;
  const post_content = document.querySelector(
    'textarea[name="post-text"]'
  ).value;

  const response = await fetch(`/api/posts/${id}`, {
    method: "PUT",
    body: JSON.stringify({
      post_title,
      post_content,
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

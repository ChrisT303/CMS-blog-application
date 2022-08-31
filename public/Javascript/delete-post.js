const handleDeletePost = async () => {
  const post_id = document.querySelector('input[name="post-id"]').value;

  await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document.querySelector("#delete").addEventListener("click", handleDeletePost);

const handleDeletePost = async () => {
  const post = document.querySelector('input[name="post-id"]').value;

  await fetch(`/api/posts/${post}`, {
    method: "DELETE",
  });

  document.location.replace("/dashboard");
};

document.querySelector("#delete").addEventListener("click", deleteClickHandler);

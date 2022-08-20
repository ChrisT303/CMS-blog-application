const signupFormHandler = async (event) => {
  event.preventDefault();

 
  const username = document.querySelector("#signup-username").value.trim();
  const password = document.querySelector("#signup-password").value.trim();

  if (username && password) {
   console.log(username)
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    if (response.ok) {
     
      alert("You're signed up and ready to post!");
      document.location.replace("/dashboard");
    } else {
      alert("Signup Failed, try again");
    }
  }
};

document
  .querySelector("#signup-form")
  .addEventListener("submit", signupFormHandler);

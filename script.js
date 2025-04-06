document.addEventListener("DOMContentLoaded", function () {
  const loginButton = document.querySelector(".login-button");
  const signupButton = document.querySelector(".signup-button");

  if (loginButton) {
    loginButton.addEventListener("click", function () {
      console.log("Log In button clicked");
      // In a real application, you would redirect to a login form
    });
  }

  if (signupButton) {
    signupButton.addEventListener("click", function () {
      console.log("Sign Up button clicked");
      // In a real application, you would redirect to a signup form
    });
  }
});

const loginForm = document.getElementById("login-form");
const loginMessage = document.getElementById("loginMessage"); // You might need to add this to your HTML

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const username = loginForm.elements.username.value;
  const password = loginForm.elements.password.value;

  try {
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await response.json();

    if (response.ok) {
      loginMessage.textContent = data.message;
      localStorage.setItem("userId", data.userId); // Or handle session as needed
      window.location.href = "/dashboard.html"; // Redirect
    } else {
      loginMessage.textContent = data.message;
    }
  } catch (error) {
    console.error("Login error:", error);
    loginMessage.textContent = "An error occurred during login.";
  }
});

function redirectToReadMore(newsItem) {
  const readMoreLink = newsItem.querySelector(".read-more").href;
  window.location.href = readMoreLink;
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");
  const signupForm = document.getElementById("signupForm");

  // Login Form Logic
  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (username === "admin" && password === "admin123") {
        alert("Welcome, Admin!");
        localStorage.setItem("isAdmin", "true");
        window.location.href = "admin.html";
      } else {
        const storedPass = localStorage.getItem("user_" + username);
        if (storedPass && storedPass === password) {
          alert("Login successful!");
        } else {
          alert("Invalid username or password.");
        }
      }
    });
  }

  // Signup Form Logic
  if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const newUser = document.getElementById("newUsername").value;
      const newPass = document.getElementById("newPassword").value;
      const confirmPass = document.getElementById("confirmPassword").value;

      if (newPass !== confirmPass) {
        alert("Passwords do not match!");
        return;
      }

      if (localStorage.getItem("user_" + newUser)) {
        alert("Username already exists.");
        return;
      }

      localStorage.setItem("user_" + newUser, newPass);
      alert("Account created! You can now log in.");
      window.location.href = "index.html";
    });
  }

  // Protect Admin Page
  if (window.location.pathname.includes("admin.html")) {
    if (localStorage.getItem("isAdmin") !== "true") {
      alert("Access denied. Admins only.");
      window.location.href = "index.html";
    }
  }
});

// Admin Page Functions
function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "index.html";
}

function showRegistered() {
  let count = 0;
  for (let key in localStorage) {
    if (key.startsWith("user_")) {
      count++;
    }
  }
  document.getElementById("adminContent").innerHTML = `
    <h2>Registered Users</h2>
    <p>Total sign ups: ${count}</p>
  `;
}

function showAboutMe() {
  document.getElementById("adminContent").innerHTML = `
    <h2>About Me</h2>
    <p>Hello! I'm the admin of this platform. I manage users, updates, and keep everything running smoothly. Nice to meet you!</p>
  `;
}

function showCompany() {
  document.getElementById("adminContent").innerHTML = `
    <h2>About the Company</h2>
    <p>This is a sample system built using HTML, CSS, and JavaScript to demonstrate login, signup, and admin features.</p>
  `;
}
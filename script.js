// Login Form Logic
document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("loginForm");

  if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      // Admin credentials
      if (username === "admin" && password === "admin123") {
        alert("Welcome, Admin!");
        localStorage.setItem("isAdmin", "true");
        window.location.href = "admin.html";
      } else {
        alert("Invalid credentials or not an admin.");
      }
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

// Logout Function
function logout() {
  localStorage.removeItem("isAdmin");
  window.location.href = "index.html";
}
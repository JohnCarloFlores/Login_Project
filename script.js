document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  alert(`Username: ${username}\nPassword: ${password}`);
});
function togglePassword() {
  const password = document.getElementById("password");
  password.type = password.type === "password" ? "text" : "password";
}
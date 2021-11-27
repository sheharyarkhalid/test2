document
  .getElementById("change-theme-btn")
  .addEventListener("click", function () {
    let darkThemeEnabled = document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-theme-enabled_two", darkThemeEnabled);
  });

if (JSON.parse(localStorage.getItem("dark-theme-enabled_two"))) {
  document.body.classList.add("dark-mode");
}

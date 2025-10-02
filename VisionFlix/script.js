const toggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");
const searchBtn = document.getElementById("search-btn");
const searchBar = document.getElementById("search-bar");

toggle.addEventListener("click", () => {
  navList.classList.toggle("active");
});

searchBtn.addEventListener("click", (e) => {
  if (window.innerWidth <= 768) {
    e.preventDefault();
    searchBar.classList.toggle("active");
  }
});
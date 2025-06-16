// toggle class active

const navbarNav = document.querySelector(".navbar-nav");

//ketika hamburger menu di klik

dokument.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.tooggle("active");
};

//klik diluar sidebar unntuk menghilangkan nav

const hamburger = document.querySelector("#hamburger-menu");

9;
document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

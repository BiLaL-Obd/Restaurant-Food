// Start Header Section
let bar = document.getElementById("bar");
let nav = document.querySelector("header .navigation");

// Add Class Show To Navigation ul
bar.onclick = function () {
  nav.classList.toggle("show");
  this.classList.toggle("active");
  this.classList.toggle("fa-times");
};

document.addEventListener("click", function (e) {
  if (e.target !== bar) {
    if (nav.classList.contains("show")) {
      nav.classList.toggle("show");
      bar.classList.toggle("active");
      bar.classList.toggle("fa-times");
    }
  }
});

// nav.addEventListener("click", function (e) {
//   e.stopPropagation();
// });

let searchBtn = document.getElementById("search");
let searchBox = document.querySelector(".search-box");
let close = document.getElementById("close");

// Add Class Visible To Search Box
searchBtn.onclick = function () {
  searchBox.classList.toggle("visible");
};
close.onclick = function () {
  searchBox.classList.remove("visible");
};
document.onkeyup = function (e) {
  if (e.key === "Escape") {
    searchBox.classList.remove("visible");
  }
};

// End Header Section

let section = document.querySelectorAll("section");
let navLi = document.querySelectorAll("header ul a");
window.onscroll = () => {
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 150;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLi.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header ul a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

function loader() {
  document.querySelector(".loader").classList.add("fade-out");
}
function fadeout() {
  setInterval(loader, 3000);
}
window.onload = fadeout;

// CHANGE HEADER COLOR WHEN SCROLL
const header = document.getElementById("header");

let headerHeight = header.offsetHeight;

window.onscroll = function () {
  if (window.scrollY > headerHeight) {
    header.style.backgroundColor = "var(--light)";
    header.style.boxShadow = "0px 20px 50px rgba(0, 0, 0, 0.05)";
  } else {
    header.style.boxShadow = "unset";
    header.style.backgroundColor = "transparent";
  }
};

const nav = document.getElementById("header_container");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    nav.classList.remove("top_header_top");
  }else {
    nav.classList.add("top_header_top");
  }
});

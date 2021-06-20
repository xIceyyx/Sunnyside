const menu = document.querySelector(".nav__mobile");
const modal = document.querySelector(".mobile__menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("active");

  if (menu.classList.contains("active")) {
    modal.classList.remove("mobile-fade-out");
    modal.classList.add("mobile-fade-in");
    setTimeout(() => {
      modal.style.display = "flex";
    }, 100);
  } else {
    modal.classList.remove("mobile-fade-in");
    modal.classList.add("mobile-fade-out");
    setTimeout(() => {
      modal.style.display = "none";
    }, 100);
  }
});

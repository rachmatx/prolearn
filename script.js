const iconMenu = document.getElementById("icon-menu");
const listMenu = document.getElementById("list-menu");

iconMenu.addEventListener("click", () => {
    listMenu.classList.toggle("active");
});
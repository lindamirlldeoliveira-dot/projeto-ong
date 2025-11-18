
const btnMobile = document.getElementById("btn-mobile");
const menu = document.getElementById("menu");

btnMobile.addEventListener("click", () => {
    menu.classList.toggle("open");
});


document.addEventListener("click", (e) => {
    const dropdown = document.querySelector(".dropdown");
    if (!dropdown.contains(e.target)) {
        dropdown.classList.remove("open");
    }
});

document.querySelector(".dropdown-btn").addEventListener("click", () => {
    document.querySelector(".dropdown").classList.toggle("open");
});

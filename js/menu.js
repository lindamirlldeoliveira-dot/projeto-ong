document.addEventListener("DOMContentLoaded", () => {

    // ===========================
    // MENU HAMBÚRGUER (MOBILE)
    // ===========================
    const btnMobile = document.getElementById("btn-mobile");
    const menu = document.getElementById("menu");

    if (btnMobile) {
        btnMobile.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }

    // ===========================
    // DROPDOWN DO MENU "PROJETOS"
    // ===========================
    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
        const btn = dropdown.querySelector(".dropdown-btn");

        btn.addEventListener("click", (e) => {
            e.stopPropagation(); // evita fechar imediatamente
            dropdown.classList.toggle("open");
        });

        // fechar se clicar fora
        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    }

});

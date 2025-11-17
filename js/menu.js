document.addEventListener("DOMContentLoaded", () => {

    /* ===========================
       MENU HAMBÚRGUER (MOBILE)
    =========================== */
    const btnMobile = document.getElementById("btn-mobile");
    const menu = document.getElementById("menu");

    if (btnMobile && menu) {
        btnMobile.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }


    /* ===========================
       DROPDOWN DO MENU "PROJETOS"
    =========================== */
    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
        const btnDropdown = dropdown.querySelector(".dropdown-btn, a"); 
        // aceita botão ou <a> dependendo do HTML

        if (btnDropdown) {
            btnDropdown.addEventListener("click", (e) => {
                // No desktop o hover já abre, então este JS só atua no MOBILE
                if (window.innerWidth <= 768) {
                    e.preventDefault();  
                    dropdown.classList.toggle("open");
                }
                e.stopPropagation();
            });
        }

        // FECHA dropdown se clicar fora
        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    }

});

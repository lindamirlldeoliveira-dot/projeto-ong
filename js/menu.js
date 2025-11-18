document.addEventListener("DOMContentLoaded", () => {

   
    const btnMobile = document.getElementById("btn-mobile");
    const menu = document.getElementById("menu");

    if (btnMobile && menu) {
        btnMobile.addEventListener("click", () => {
            menu.classList.toggle("open");
        });
    }


    const dropdown = document.querySelector(".dropdown");

    if (dropdown) {
        const btnDropdown = dropdown.querySelector(".dropdown-btn, a"); 


        if (btnDropdown) {
            btnDropdown.addEventListener("click", (e) => {
                
                if (window.innerWidth <= 768) {
                    e.preventDefault();  
                    dropdown.classList.toggle("open");
                }
                e.stopPropagation();
            });
        }

   
        document.addEventListener("click", (e) => {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove("open");
            }
        });
    }

});

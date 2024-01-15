import clear from "./Functions/clearPage";
import loadDiv from "./Functions/loadDiv";
import headerDiv from "./Pages/header";
import home from "./Pages/home";
import reservation from "./Pages/reservation";
import menu from "./Pages/menu";

const init = function () {
    loadDiv(headerDiv);
    loadDiv(home);

    const homeButton = document.querySelector(".home-btn");
    const menuButton = document.querySelector(".menu-btn");
    const reservationButton = document.querySelector(".reservation-btn");

    homeButton.addEventListener('click', function () {
        clear();
        loadDiv(home);
    });

    menuButton.addEventListener('click', function () {
        clear();
        loadDiv(menu);
    });

    reservationButton.addEventListener('click', function () {
        clear();
        loadDiv(reservation);
    });
}

init();



import '../Style/style.css';
import Logo from '../Assets/Images/logo.svg';


const headerDiv = function () {
    const header = document.createElement("div");
    header.classList.add("header");

    const logoDiv = document.createElement("div");
    logoDiv.classList.add("logo");
    header.appendChild(logoDiv);

    const logo = document.createElement("img");
    logo.src = Logo;
    const logoText = document.createElement("p");
    logoText.innerHTML = "Dow Dow Bar and Kitchen";
    logoDiv.appendChild(logo);
    logoDiv.appendChild(logoText);

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");
    header.appendChild(menuDiv);

    const btnHome = document.createElement("button");
    btnHome.classList.add("home-btn");
    btnHome.innerHTML = "Home";
    menuDiv.appendChild(btnHome);

    const btnMenu = document.createElement("button");
    btnMenu.classList.add("menu-btn");
    btnMenu.innerHTML = "Menu";
    menuDiv.appendChild(btnMenu);

    const btnReservation = document.createElement("button");
    btnReservation.classList.add("reservation-btn");
    btnReservation.innerHTML = "Reservation";
    menuDiv.appendChild(btnReservation);


    return header;
}

export default headerDiv;
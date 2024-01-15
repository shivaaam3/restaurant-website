import '../Style/style.css';
import Logo from '../Assets/Images/logo.svg';
import Pasta from '../Assets/Images/Pasta.jpeg'

const home = function () {
    const introduction = document.createElement("div");
    introduction.classList.add("introduction");

    const leftPanel = document.createElement("div");
    leftPanel.classList.add("left");
    introduction.appendChild(leftPanel);

    const logo = document.createElement("img");
    logo.classList.add("logo");
    logo.src = Logo;
    leftPanel.appendChild(logo);

    const heading = document.createElement("div");
    heading.classList.add("heading");
    heading.innerHTML = "Dow Dow Bar and Kitchen";
    leftPanel.appendChild(heading);

    const body = document.createElement("div");
    body.classList.add("body");
    body.innerHTML = "The enchanted place where every dish is sprinkled with magic and served with a side of starlight.";
    leftPanel.appendChild(body);

    const rightPanel = document.createElement("div");
    rightPanel.classList.add("right");
    introduction.appendChild(rightPanel);

    const pasta = document.createElement("img");
    pasta.id = "pasta";
    pasta.src = Pasta;
    rightPanel.appendChild(pasta);


    return introduction;
}

export default home;
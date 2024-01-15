import '../Style/style.css';


const menu = function () {
    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu");


    const heading = document.createElement("div");
    heading.classList.add("main");
    heading.classList.add("heading");
    heading.innerHTML = "Menu";
    menuDiv.appendChild(heading);

    const body = document.createElement("div");
    body.classList.add("body");
    menuDiv.appendChild(body);

    for (let i = 0; i < 4; ++i) {
        const menuElements = document.createElement("div");
        menuElements.classList.add("menu-elements");

        const title = document.createElement("div");
        title.classList.add("title");
        title.innerHTML = "Appetizers";
        menuElements.appendChild(title);

        for (let i = 0; i < 5; ++i) {
            const element = document.createElement("div");
            element.classList.add("menu-element");

            const elementTitle = document.createElement("div");
            elementTitle.classList.add("title");
            elementTitle.innerHTML = "Edmame Salad";
            element.appendChild(elementTitle);

            const elementDescription = document.createElement("div");
            elementDescription.classList.add("description");
            elementDescription.innerHTML = "Edamame Beans, Mixed Greens, Red Onions, Sesame Seeds, Chilli Oil.";
            element.appendChild(elementDescription);

            const elementPrice = document.createElement("div");
            elementPrice.classList.add("price");
            elementPrice.innerHTML = "$9";
            element.appendChild(elementPrice);

            menuElements.appendChild(element);
        }

        body.appendChild(menuElements);
    }


    return menuDiv;
}

export default menu;
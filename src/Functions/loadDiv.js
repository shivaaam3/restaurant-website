const loadDiv = function (div) {
    const content = document.querySelector(".content");
    const loadedDiv = div();
    content.appendChild(loadedDiv);
}

export default loadDiv;

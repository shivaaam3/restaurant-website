import '../Style/style.css';


const reservation = function () {
    const reservationDiv = document.createElement("div");
    reservationDiv.classList.add("contact");


    const heading = document.createElement("div");
    heading.classList.add("main");
    heading.classList.add("heading");
    heading.innerHTML = "Reservation";
    reservationDiv.appendChild(heading);

    const formDiv = document.createElement("div");
    formDiv.classList.add("contact");
    formDiv.classList.add("form");
    reservationDiv.appendChild(formDiv);

    const form = document.createElement("form");
    form.classList.add("contact-form");
    form.action = "#";
    form.method = "get";
    formDiv.appendChild(form);

    const nameField = document.createElement("input");
    nameField.type = "text";
    nameField.name = "first-name";
    nameField.id = "first-name";
    nameField.placeholder = "First Name";
    form.appendChild(nameField);

    const lastNameField = document.createElement("input");
    lastNameField.type = "text";
    lastNameField.name = "last-name";
    lastNameField.id = "last-name";
    lastNameField.placeholder = "Last Name";
    form.appendChild(lastNameField);

    const numberField = document.createElement("input");
    numberField.type = "number";
    numberField.name = "contact-name";
    numberField.id = "contact-name";
    numberField.placeholder = "Contact Name";
    form.appendChild(numberField);

    const dateField = document.createElement("input");
    dateField.type = "datetime-local";
    dateField.name = "reservation-time";
    dateField.id = "reservation-time";
    form.appendChild(dateField);

    const submitBtn = document.createElement("button");
    submitBtn.type = "submit";
    submitBtn.classList.add("add");
    submitBtn.classList.add("button");
    submitBtn.id = "save";
    submitBtn.innerHTML = "Reserve";
    form.appendChild(submitBtn);

    return reservationDiv;
}

export default reservation;
function handleSubmit(e) {
    if (!nameIsValid() || !emailIsValid() || !passwordIsValid() || !confirmIsValid() || !messageIsValid()) {
        e.preventDefault();
    } else {
        submitData();
        e.preventDefault();
    }
}

function submitData() {
    const name = document.getElementById("input-name");
    const email = document.getElementById("input-email");
    const message = document.getElementById("input-message");
    const password = document.getElementById("input-password");
    const confirm = document.getElementById("input-confirm");

    console.log("Name: ", name.value);
    console.log("E-mail: ", email.value);
    console.log("Password: ", password.value);
    console.log("Confirm: ", confirm.value);
    console.log("Message: ", message.value);
}

function nameIsValid() {
    const name = document.getElementById("input-name");
    if (name.value == "") {
        name.classList.add("input-invalid");
        showWarning("warning-name");

        return false;
    }

    return true;
}

function emailIsValid() {
    const email = document.getElementById("input-email");
    if (email.value == "") {
        email.classList.add("input-invalid");
        showWarning("warning-email");

        return false;
    }

    return true;
}

function messageIsValid() {
    const message = document.getElementById("input-message");
    if (message.value == "") {
        message.classList.add("input-invalid");
        showWarning("warning-message");

        return false;
    }

    return true;
}

function passwordIsValid() {
    const password = document.getElementById("input-password");
    if (password.value == "") {
        password.classList.add("input-invalid");
        showWarning("warning-password");

        return false;
    }

    return true;
}

function confirmIsValid() {
    const password = document.getElementById("input-password");
    const confirm = document.getElementById("input-confirm");

    if (confirm.value == "" || password.value != confirm.value) {
        confirm.classList.add("input-invalid");
        showWarning("warning-confirm");

        return false;
    }

    return true;
}

function showWarning(elementId) {
    const warning = document.getElementById(elementId);
    warning.classList.add("visible");
}

function resetWarning(inputElement, warningElement) {
    inputElement.classList.remove("input-invalid");
    document.getElementById(warningElement).classList.remove("visible");
}

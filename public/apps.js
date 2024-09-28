let password = document.getElementById("generatePassword")

function generateRandomPassword() {
    let pass = "";
    
    let passwordLength = parseInt(document.getElementById("typeNumber").value);
    let addCapital = document.getElementById("checkUpperLetter").checked;
    let addNumber = document.getElementById("checkNumber").checked;
    let addSymbols = document.getElementById("checkSymbols").checked;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers   = "0123456789";
    const symbols   = "!@#$%^&*()_+-=[]{}|;':,.<>?/~";

    let characters = lowercase;
    if(addCapital === true) characters += uppercase;
    if(addNumber === true) characters += numbers;
    if(addSymbols === true) characters += symbols;

    for (let i = 0; i < passwordLength; i++) {
        let random = Math.floor(Math.random() * characters.length);
        pass += characters[random];
    }
    password.value = pass;
}

function showPassword() {
    password.type = "text"
    document.getElementById("showPassword").classList.add("d-none")
    document.getElementById("hiddenPassword").classList.remove("d-none")
}

function hiddenPassword() {
    password.type = "password"
    document.getElementById("hiddenPassword").classList.add("d-none")
    document.getElementById("showPassword").classList.remove("d-none")
}

function copyText() {
    // password.select();
    // password.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(password.value)
}
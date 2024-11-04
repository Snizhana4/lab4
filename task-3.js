function generatePassword(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }

    return password;
}

function checkPassword(password, confirmPassword) {
    return password === confirmPassword ? "Passwords match" : "Passwords do not match";
}

function generateAndCheckPassword(length = 8) {
    const generatedPassword = generatePassword(length);

    const showPassword = confirm("Do you want to see the generated password?");
    if (showPassword) {
        alert(`Your generated password is: ${generatedPassword}`);
    }

    const userPassword = prompt("Please enter the password to check:");

    const result = checkPassword(generatedPassword, userPassword);
    alert(result);
}

generateAndCheckPassword(8);

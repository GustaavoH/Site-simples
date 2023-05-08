const form = document.querySelector(".form")
const emailInput = document.querySelector("#email")
const passwordInput = document.querySelector("#password")

form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Verifica se o nome está vazio

    if(emailInput.value === "") {
        alert("Por favor, preencha o seu email")
        return;
    }
    
    if (!validatePassword(passwordInput.value)) {
        alert("A senha precisa ser no minimo 8 digitos.");
        return;
    }
    
    // Se todos os campos estiverem preenchidos, envie o form
    form.submit()
})

function validatePassword(password, minDigits) {
    if(password.length >= 8) {
        // Senha válida
        return true
    }
    // Senha Inválida
    return false
}
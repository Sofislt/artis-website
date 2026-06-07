const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');

const inputRegister = document.getElementById('input-register-form');
const inputLogin = document.getElementById('input-login-form');
const msgErroTermos = document.getElementById('msg-erro-termos');
const msgCadastro = document.getElementById('msg-submit-sucess');
const msgLogin = document.getElementById('msg-submit-login');

const listaUsuarios = [];

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

inputRegister.addEventListener("submit", function(event) {
    event.preventDefault();

    const checarTermos = document.getElementById("termos");

    if (!checarTermos.checked) {
        msgErroTermos.innerText = "Você precisa aceitar os termos de uso para se cadastrar.";
        return; 
    }

    msgErroTermos.innerText = "";

    const username = document.getElementById("register-username");
    const email = document.getElementById("register-email");
    const password = document.getElementById("register-password");

    const novoUsuario = {
        username: username.value,
        email: email.value,
        password: password.value
    };

    listaUsuarios.push(novoUsuario);

    msgCadastro.className = "sucesso";
    msgCadastro.innerText = "Usuário cadastrado com sucesso! Tente fazer login abaixo.";
    inputRegister.reset();
    console.log(listaUsuarios);
})

inputLogin.addEventListener("submit", function(event) {
    event.preventDefault();

    const emailInput = document.getElementById("login-email");
    const passwordInput = document.getElementById("login-password");

    const email = emailInput.value;
    const password = passwordInput.value;

    const usuarioEncontrado = listaUsuarios.find(function(usuario){
        return usuario.email === email && usuario.password === password;
    }) 

    if (usuarioEncontrado) {
        msgLogin.className = "sucesso";
        msgLogin.innerText = `Login efetuado com sucesso!.`;

        sessionStorage.setItem("usuarioLogado", usuarioEncontrado.username);

        inputLogin.reset();

        window.location.href = "profile.html";
    } else {
        msgLogin.className = "erro";
        msgLogin.innerText = "Usuário ou senha incorretos. Tente novamente.";
    }
})
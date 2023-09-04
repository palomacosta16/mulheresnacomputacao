function validarEmail() {
    var email = document.getElementById("email").value;
    var regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (regexEmail.test(email)) {
      alert("Sucesso! E-mail cadastrado: " + email);
    } else {
      alert("ERRO! Por favor, insira um e-mail válido.");
    }
  }
  


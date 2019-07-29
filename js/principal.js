var titulo = document.querySelector(".js-titulo");
titulo.textContent = "Aparecida Nutricionista";

for (let index = 0; index < 5; index++) {
    var paciente = document.querySelector(".js-paciente-" + (index + 1));
    
    var pacientePeso = paciente.querySelector('.js-info-peso').textContent;
    var pacienteAltura = paciente.querySelector('.js-info-altura').textContent;
    var pacienteIMC = paciente.querySelector(".js-info-imc");
    
    var validaPeso = true;
    var validaAltura = true;
    
    if (pacientePeso <= 0 || pacientePeso >= 1000) {
        validaPeso = false;
        pacienteIMC.textContent = "Peso Inválido!";
    }
    
    if (pacienteAltura <= 0 || pacienteAltura >= 3.00) {
        validaAltura = false;
        pacienteIMC.textContent = "Altura Inválida!";
    }
    
    if (validaPeso && validaAltura) {
        var imcCalculado = pacientePeso / (pacienteAltura * pacienteAltura);
        pacienteIMC.textContent = imcCalculado;
    }
}



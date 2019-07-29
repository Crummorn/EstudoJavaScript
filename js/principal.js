var titulo = document.querySelector(".js-titulo");
titulo.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll("#js-tabela-pacientes .js-paciente")

pacientes.forEach(paciente => {
    var pacientePeso = paciente.querySelector('.js-info-peso').textContent;
    var pacienteAltura = paciente.querySelector('.js-info-altura').textContent;
    var pacienteIMC = paciente.querySelector(".js-info-imc");
    
    var validaPeso = true;
    var validaAltura = true;
    
    if (pacientePeso <= 0 || pacientePeso >= 1000) {
        validaPeso = false;
        pacienteIMC.textContent = "Peso Inválido!";
        paciente.classList.add('paciente-invalido');
    }
    
    if (pacienteAltura <= 0 || pacienteAltura >= 3.00) {
        validaAltura = false;
        pacienteIMC.textContent = "Altura Inválida!";
        paciente.classList.add('paciente-invalido');
    }
    
    if (validaPeso && validaAltura) {
        var imcCalculado = pacientePeso / (pacienteAltura * pacienteAltura);
        pacienteIMC.textContent = imcCalculado.toFixed(2); // ToFixed formata as casas decimais
    }
});



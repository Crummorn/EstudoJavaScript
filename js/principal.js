var titulo = document.querySelector(".js-titulo");
titulo.textContent = "Aparecida Nutricionista";

for (let index = 0; index < 5; index++) {
    var paciente = document.querySelector(".js-paciente-" + (index + 1) )
    
    var pacientePeso = paciente.querySelector('.js-info-peso').textContent
    var pacienteAltura = paciente.querySelector('.js-info-altura').textContent
    
    var pacienteIMC = pacientePeso / (pacienteAltura * pacienteAltura)
    
    paciente.querySelector(".js-info-imc").textContent = pacienteIMC;
}



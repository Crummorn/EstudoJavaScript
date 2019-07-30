// Calculo do IMC
var pacientes = document.querySelectorAll("#js-tabela-pacientes .js-paciente")

pacientes.forEach(paciente => {
    var pacientePeso = paciente.querySelector('.js-info-peso').textContent;
    var pacienteAltura = paciente.querySelector('.js-info-altura').textContent;
    var pacienteIMC = paciente.querySelector(".js-info-imc");
    
    var validPeso = validaPeso(pacientePeso);
    var validAltura = validaAltura(pacienteAltura);
    
    if (!validPeso) {
        validPeso = false;
        pacienteIMC.textContent = "Peso Inválido!";
        paciente.classList.add('paciente-invalido');
    }
    
    if (!validAltura) {
        validAltura = false;
        pacienteIMC.textContent = "Altura Inválida!";
        paciente.classList.add('paciente-invalido');
    }
    
    if (validPeso && validAltura) {
        pacienteIMC.textContent = calculaIMC(pacientePeso, pacienteAltura); 
    }
});

function calculaIMC (peso, altura) {
    return (peso / (altura * altura)).toFixed(2); // ToFixed formata as casas decimais
}

// Edição de Titulo
var titulo = document.querySelector(".js-titulo");
titulo.textContent = "Aparecida Nutricionista";

// Calculo do IMC
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

// Formulario de Adição
var botaoAdd = document.querySelector("#adicionar-paciente");

botaoAdd.addEventListener('click', adicionarPaciente);

function adicionarPaciente () {
    event.preventDefault();

    var form = document.querySelector(".js-form-adiciona");

    var pacienteNome = form.nome.value;
    var pacientePeso = form.peso.value;
    var pacienteAltura = form.altura.value;
    var pacienteGordura = form.gordura.value;

    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');
    var nomeTd = document.createElement("td");
    nomeTd.classList.add('js-info-nome');
    var pesoTd = document.createElement("td");
    pesoTd.classList.add('js-info-peso');
    var alturaTd = document.createElement("td");
    alturaTd.classList.add('js-info-altura');
    var gorduraTd = document.createElement("td");
    gorduraTd.classList.add('js-info-gordura');
    var imcTd = document.createElement("td");
    imcTd.classList.add('js-info-imc');

    nomeTd.textContent = pacienteNome;
    pesoTd.textContent = pacientePeso;
    alturaTd.textContent = pacienteAltura;
    gorduraTd.textContent = pacienteGordura;
    imcTd.textContent = 0;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

   var tabelaPacientes = document.querySelector('#js-tabela-pacientes');
   tabelaPacientes.appendChild(pacienteTr);
}

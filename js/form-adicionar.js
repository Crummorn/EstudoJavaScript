var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener('click', adicionarPaciente);

function adicionarPaciente() {
    event.preventDefault();

    var form = document.querySelector(".js-form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibeMensagensDeErro(erros);
        return;
    }

    var tabelaPacientes = document.querySelector('#js-tabela-pacientes');

    tabelaPacientes.appendChild(pacienteTr);

    form.reset();
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
}

function obtemPacienteDoFormulario(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montaTr(paciente) {
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'js-info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'js-info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'js-info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'js-info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'js-info-imc'));

    return pacienteTr;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente (paciente) {
    var erros = [];

    if (!validaPeso(paciente.peso)) 
        erros.push("O Peso é inválido!");

    if (!validaAltura(paciente.altura)) 
        erros.push("A Altura é inválido!");

    if (!validaGordura(paciente.gordura)) 
        erros.push("A Gordura é inválido!");

    if (!validaCampoEmBranco(paciente.nome)) 
        erros.push("O Nome não pode ser em branco!");

    if (!validaCampoEmBranco(paciente.peso)) 
        erros.push("O Peso não pode ser em branco!");

    if (!validaCampoEmBranco(paciente.altura)) 
        erros.push("A Altura não pode ser em branco!");

    if (!validaCampoEmBranco(paciente.gordura)) 
        erros.push("A Gordura não pode ser em branco!");

    return erros;
}

function exibeMensagensDeErro (erros) {    
    var ulErros = document.querySelector("#mensagens-erro");
    ulErros.innerHTML = ""; // innerHTML controla o HTML dentro da tag

    erros.forEach(erro => {
        var li = document.createElement('li');
        li.textContent = erro;
        ulErros.appendChild(li);
    });
}
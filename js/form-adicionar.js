var botaoAdd = document.querySelector("#adicionar-paciente");
botaoAdd.addEventListener('click', adicionarPaciente);

function adicionarPaciente() {
    event.preventDefault();

    var form = document.querySelector(".js-form-adiciona");

    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var tabelaPacientes = document.querySelector('#js-tabela-pacientes');

    tabelaPacientes.appendChild(pacienteTr);

    form.reset();
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
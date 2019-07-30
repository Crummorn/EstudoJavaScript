var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener("input", function() {
    var pacientes = document.querySelectorAll(".js-paciente");

    if (this.value.length > 0){
        pacientes.forEach(paciente => {
            var tdNome = paciente.querySelector(".js-info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value, "i");


            if ( expressao.test(nome) ) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        });
    } else {
        pacientes.forEach(paciente => {
            paciente.classList.remove("invisivel");
        });
    }
});
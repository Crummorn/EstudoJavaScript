function validaPeso(peso) {
    bool = false;

    if (peso >= 0 && peso <= 700) 
        bool =  true;

    return bool;
}

function validaAltura(altura) {
    bool = false;

    if (altura >= 0 && altura <= 3.00) 
        bool =  true;

    return bool;
}

function validaGordura(gordura) {
    bool = false;

    if (gordura >= 0 && gordura <= 100.00) 
        bool =  true;

    return bool;
}

function validaCampoEmBranco(dado) {
    bool = false;

    if (dado.length == 0)
        bool = true;

    return bool;
}
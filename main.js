
var convidados = JSON.parse(localStorage.getItem("convidados")) || [];

var elLista = document.getElementById("lista");
var elCampo = document.getElementById("campo");
var elBotao = document.getElementById("botao");

elBotao.onclick = () => {
    var nome = elCampo.value;
    convidados.push({ nome: nome });
    elCampo.value = "";

    salvarConvidados();
    listarConvidados();
}

function salvarConvidados() {
    localStorage.setItem("convidados", JSON.stringify(convidados));
}

function listarConvidados() {
    elLista.innerHTML = "";

    for (const convidado of convidados) {

        var elConvidado = document.createElement("li");
        var elNome = document.createTextNode(convidado.nome);

        var elExcluir = document.createElement("a");
        elExcluir.setAttribute("href", "#");

        elExcluir.onclick = () => {
            convidados = convidados.filter((item) => {
                return item.nome !== convidado.nome;
            })

            salvarConvidados();
            listarConvidados();
        }

        var elExcluirTexto = document.createTextNode("Excluir");

        elConvidado.appendChild(elNome);
        elLista.appendChild(elConvidado);

        elExcluir.appendChild(elExcluirTexto)
        elConvidado.appendChild(elExcluir);
    }
}

listarConvidados();

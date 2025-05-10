const formAgdCons = document.getElementById("form-agd-cons");
//AGENDAR CONSULTAS

const dados = {}
formAgdCons.addEventListener("submit", (envio) => {

    envio.preventDefault();
    
    const listaCadCons = {
        "nome_paciente": envio.target.elements["nome_paciente"].value,
        "nome_dono":envio.target.elements["nome_dono"].value,
        "data_consulta":envio.target.elements["data_consulta"].value,
        "obs_consulta":envio.target.elements["data_consulta"].value
    }
    dados.push(listaCadCons);
    localStorage.setItem("cadastro", JSON.stringify(dados));
 
})

//EXIBIR CONSULTAS
const listaConsultas = document.getElementById("lista-consultas");


const dados2 = JSON.parse(localStorage.getItem("cadastro"));


    /*
        TEM QUE CRIAR UM FOR PORQUE FOREACH N VAI DAR PQ É OBJECT

        CRIA UM FOR PEGANDO A CHAVE E VALOR DA ARRAY Q PUXA A LOCALSTORAGE E AI É SÓ ESTILIZAR

        DE NADA PEDRO DO FUTURO 
    */

    const itemLista = document.createElement("li");
    itemLista.classList.add("item-lista-consultas");

    const div = document.createElement("div");

    const tituloItemLista = document.createElement("h4");
    tituloItemLista.innerHTML = dados2[0]["nome_paciente"];

    const dataItemLista = document.createElement("p");
    dataItemLista.innerHTML = dados2[0]["data_consulta"];

    div.appendChild(tituloItemLista);
    div.appendChild(dataItemLista);

    itemLista.appendChild(div)
   
    listaConsultas.appendChild(itemLista);





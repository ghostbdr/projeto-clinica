const btnConsultas = document.getElementById("btn-consultas");
const containerDin = document.getElementById("container-conteudo");
const btnVoltarHome = document.getElementById("btn-back-home");



btnConsultas.addEventListener("click", imprimirConsultas);
btnVoltarHome.addEventListener("click", voltarHome);










function voltarHome() {
    containerDin.innerHTML = "";
    containerDin.innerHTML = `<h1 class="titulo">Painel Principal:</h1>
                <div class="container-cards">
                    <div class="card" id="btn-consultas"><img src="../img/icon-consultas.png" alt="">Consultas</div>
                    <div class="card" id="btn-pacientes"><img src="../img/icon-pacientes.png" alt="">Pacientes</div>
                    <div class="card" id="btn-avisos"><img src="../img/icon-avisos.png" alt="">Avisos</div>
                    <div class="card" id="btn-historico"><img src="../img/icon-historico.png" alt="">Registro</div>
                </div>`
}
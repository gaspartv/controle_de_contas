let infoTable = document.getElementById("table")
infoTable.innerHTML = ""

let contas = ["CONTAS", "Luz", "Agua"]
let valor = ["VALOR", "R$230,00", "R$40,00"]
let vencimento = ["VENCIMENTO", "16/06/2022", "15/05/2022"]
let estatus = ["STATUS", "Pago", "A pagar"]

function addDivida() {
    let contasAdd = prompt("Nome da divida?")
    let valorAdd = prompt("Valor da divida?")
    let vencimentoAdd = prompt("Vencimento da divida?")
    let estatusAdd = prompt("Status da divida?")

    contas.push(contasAdd)
    valor.push(valorAdd)
    vencimento.push(vencimentoAdd)
    estatus.push(estatusAdd)
}

let contasTR = document.createElement("tr")
let valorTR = document.createElement("tr")
let vencimentoTR = document.createElement("tr")
let estatusTR = document.createElement("tr")

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1; 
let year = date.getFullYear();
let format = (day < 10 ? '0'+ day : day) + "/" + (month < 10 ? '0' + month : month) + "/" + (year < 10 ? '0' + year : year)

for (let contador = 0; contador < contas.length; contador++) {
    let vencimentoDue = vencimento[contador]
    let dayDue = vencimentoDue.substr(0,2)
    let monthDue = vencimentoDue.substr(3,2)
    let yearDue = vencimentoDue.substr(6,4)

    const contasTD = document.createElement("td")
    contasTD.innerText = contas[contador]
    contasTR.append(contasTD)

    const valorTD = document.createElement("td")
    valorTD.innerText = valor[contador]
    valorTR.append(valorTD)

    const vencimentoTD = document.createElement("td")
    vencimentoTD.innerText = vencimento[contador]
    vencimentoTR.append(vencimentoTD)
    if (year >= yearDue) {
        if (month > monthDue) {
            vencimentoTD.setAttribute("class", "vermelho")
        } else if (month == monthDue) {
            if (day >= dayDue) {
                vencimentoTD.setAttribute("class", "vermelho")
            }
        }
    }

    const estatusTD = document.createElement("td")
    estatusTD.innerText = estatus[contador]
    estatusTR.append(estatusTD)
}

infoTable.append(contasTR, valorTR, vencimentoTR, estatusTR)








let bancos = ["NuBank", "Caixa Econômica", "C6 Bank"]
let bancoSaldo = [40, 50, 80]

let saldoTotal = document.getElementById("saldo-total").innerText

document.getElementById('saldo-total').innerHTML = bancoSaldo[0] + bancoSaldo[1] + bancoSaldo[2]

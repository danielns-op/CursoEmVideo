const num = window.document.getElementById('iptnum')
const addnum = window.document.getElementById('addnum')
const areatexto = window.document.getElementById('txtbloc')
const finalizar = window.document.getElementById('iptfim')
const res = window.document.getElementById('res')

var listaNum = []

function adicionaNumero(n) {
    if (listaNum.indexOf(n) != -1) {
        window.alert(`O número ${n} já se encontra na lista`)
    } else if (n < 1 || n > 100) {
        window.alert(`O valor ${n} é inválido, informe um valor entre 1 e 100.`)
    } else if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        listaNum.push(n)
        areatexto.value += `Valor ${n} adicionado.\n`
    }
}

function enviaNumero() {
    let valor = Number(num.value)
    adicionaNumero(valor)
}

function mostraInfo() {
    if (listaNum.length == 0) {
        window.alert('Informe algum valor para continuar.')
    } else {
        let maior = 0, menor = 0, soma = 0
        let simbolo = '&#8594'

        for (const key in listaNum) {
            soma += listaNum[key]
            if (key == 0) {
                maior = listaNum[key]
                menor = listaNum[key]
            } else {
                if (listaNum[key] > maior) {
                    maior = listaNum[key]
                } else if (listaNum[key] < menor) {
                    menor = listaNum[key]
                }
            }
        }

        let media = soma / listaNum.length

        res.innerHTML = `${simbolo} Ao todo temos ${listaNum.length} números cadastrados.<br>`
        res.innerHTML += `${simbolo} O maior valor informado foi ${maior}.<br>`
        res.innerHTML += `${simbolo} O menor valor informado foi ${menor}.<br>`
        res.innerHTML += `${simbolo} Somando todos os valores, temos ${soma}.<br>`
        res.innerHTML += `${simbolo} A média dos valores digitados é ${media.toFixed(2)}.`
    }
}
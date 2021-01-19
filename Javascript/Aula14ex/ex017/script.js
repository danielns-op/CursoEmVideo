function tabuada() {
    var numero = window.document.getElementById('num')
    var texto = window.document.querySelector('textarea#cxtxt')
    var valor = Number(numero.value)

    texto.value = ''

    for (let index = 1; index <= 10; index++) {
        texto.cols = '5'
        texto.value += `${valor}x${index}=${valor * index} `
    }
}

/*
Resolução Guanabara

function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
*/
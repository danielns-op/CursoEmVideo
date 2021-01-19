function contador() {
    var emjIni = '&#x1F4E2'
    var emjFim = '&#x1F3C1'
    var emjPasso = '&#x1F449'

    var res = window.document.querySelector('div#res')
    var inicio = window.document.getElementById('inicio')
    var final = window.document.getElementById('fim')
    var passo = window.document.getElementById('passo')

    cont = Number(inicio.value)

    if (inicio.value.length == 0 || final.value.length == 0 || passo.value.length == 0) {
        window.alert('[ERRO] - Faltam dados.')
        res.innerHTML = 'Insera os dados corretos para continuar.'
    } else {
        var p = Number(passo.value)
        res.innerHTML = `Contando:<br>${emjIni}`

        if (p <= 0) {
            window.alert('O valor do PASSO foi definido com 0, valor inválido, PASSO terá o valor de 1.')
            p = 1
        }

        if (Number(inicio.value) > Number(final.value)) {
            while ( cont >= Number(final.value)) {
            res.innerHTML += ` ${cont} `
            res.innerHTML += `${emjPasso}`
            cont -= p
            }
        } else {
            while (cont <= Number(final.value)) {
                res.innerHTML += ` ${cont} `
                res.innerHTML += `${emjPasso}`
                cont += p
            }
        }

        res.innerHTML += `${emjFim}`
    }
}
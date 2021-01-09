function verificar() {
    var atual = new Date()
    var pegaAno = window.document.querySelector('input#ano')
    var res = window.document.querySelector('div#res')
    var anoAtual = atual.getFullYear()
    var anoNasc = Number(pegaAno.value)
    if (pegaAno.value.length == 0 || anoNasc > anoAtual || anoNasc <= 0) {
        window.alert('Idade iválida.')
    } else {
        var verifSexo = window.document.getElementsByName('checksex')
        var idade = anoAtual - anoNasc
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (verifSexo[0].checked) {
            genero = 'Homem'
            if (idade < 5) {
                img.setAttribute('src', './imagens/bebe_m.png')
            } else if (idade < 13) {
                img.setAttribute('src', './imagens/menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/jovem_m.png')
            } else if (idade < 41) {
                img.setAttribute('src', './imagens/homem.png')
            } else if (idade < 61) {
                img.setAttribute('src', './imagens/homem_40_60.png')
            } else {
                img.setAttribute('src', './imagens/idoso.png')
            }
        } else {
            genero = 'Mulher'
            if (idade < 5) {
                img.setAttribute('src', './imagens/bebe_f.png')
            } else if (idade < 13) {
                img.setAttribute('src', './imagens/menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', './imagens/jovem_f.png')
            } else if (idade < 41) {
                img.setAttribute('src', './imagens/mulher.png')
            } else if (idade < 60) {
                img.setAttribute('src', './imagens/mulher_40_60.png')
            } else {
                img.setAttribute('src', './imagens/idosa.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    }
}
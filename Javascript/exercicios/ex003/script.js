var btCarro = window.document.getElementById('carro')
var btMoto = window.document.getElementById('moto')
var btCores = window.document.getElementById('cores')
var res = window.document.getElementById('res')

var img = window.document.createElement('img')
img.setAttribute('id', 'foto')

function customCarro() {
    btCarro.style.background = 'rgb(195, 238, 145)'
    btMoto.style.background = 'rgb(194, 191, 191)'
    
    img.setAttribute('src', '')
    
    btCores.innerHTML = `<p>Escolha sua cor</p>`
    btCores.innerHTML += `<input type="button" value="Amarelo" id="coramarelo" onclick="escolheCorCarro(this.id)">`
    btCores.innerHTML += `<input type="button" value="Azul" id="corazul" onclick="escolheCorCarro(this.id)">`
    btCores.innerHTML += `<input type="button" value="Branco" id="corbranco" onclick="escolheCorCarro(this.id)">`
    btCores.innerHTML += `<input type="button" value="Verde" id="corverde" onclick="escolheCorCarro(this.id)">`
    btCores.innerHTML += `<input type="button" value="Vermelho" id="corvermelho" onclick="escolheCorCarro(this.id)">`
}

function customMoto() {
    btMoto.style.background = 'rgb(195, 238, 145)'
    btCarro.style.background = 'rgb(194, 191, 191)'

    img.setAttribute('src', '')

    btCores.innerHTML = `<p>Escolha sua cor</p>`
    btCores.innerHTML += `<input type="button" value="Amarelo" name="cor" id="coramarelo" onclick="escolheCorMoto(this.id)">`
    btCores.innerHTML += `<input type="button" value="Branco" name="cor" id="corbranco" onclick="escolheCorMoto(this.id)">`
    btCores.innerHTML += `<input type="button" value="Laranja" name="cor" id="corlaranja" onclick="escolheCorMoto(this.id)">`
    btCores.innerHTML += `<input type="button" value="Preto" name="cor" id="corpreto" onclick="escolheCorMoto(this.id)">`
    btCores.innerHTML += `<input type="button" value="Vermelho" name="cor" id="corvermelho" onclick="escolheCorMoto(this.id)">`

}

function escolheCorCarro(valor) {
    var corAmarela = window.document.getElementById('coramarelo')
    var corAzul = window.document.getElementById('corazul')
    var corBranco = window.document.getElementById('corbranco')
    var corVerde = window.document.getElementById('corverde')
    var corVermelho = window.document.getElementById('corvermelho')

    var cor = ''
    if (valor == 'coramarelo') {
        corAmarela.style.background = 'rgb(195, 238, 145)'
        corAzul.style.background = 'rgb(194, 191, 191)'
        corBranco.style.background = 'rgb(194, 191, 191)'
        corVerde.style.background = 'rgb(194, 191, 191)'
        corVermelho.style.background = 'rgb(194, 191, 191)'
        img.setAttribute('src', './imagens/carros/carro_amarelo.png')
    } else if (valor == 'corazul'){
        corAmarela.style.background = 'rgb(194, 191, 191)'
        corAzul.style.background = 'rgb(195, 238, 145)'
        corBranco.style.background = 'rgb(194, 191, 191)'
        corVerde.style.background = 'rgb(194, 191, 191)'
        corVermelho.style.background = 'rgb(194, 191, 191)'
        img.setAttribute('src', './imagens/carros/carro_azul.png')
    } else if (valor == 'corbranco') {
        corAmarela.style.background = 'rgb(194, 191, 191)'
        corAzul.style.background = 'rgb(194, 191, 191)'
        corBranco.style.background = 'rgb(195, 238, 145)'
        corVerde.style.background = 'rgb(194, 191, 191)'
        corVermelho.style.background = 'rgb(194, 191, 191)'
        img.setAttribute('src', './imagens/carros/carro_branco.png')
    } else if (valor == 'corverde') {
        corAmarela.style.background = 'rgb(194, 191, 191)'
        corAzul.style.background = 'rgb(194, 191, 191)'
        corBranco.style.background = 'rgb(194, 191, 191)'
        corVerde.style.background = 'rgb(195, 238, 145)'
        corVermelho.style.background = 'rgb(194, 191, 191)'
        img.setAttribute('src', './imagens/carros/carro_verde.png')
    } else if (valor == 'corvermelho') {
        corAmarela.style.background = 'rgb(194, 191, 191)'
        corAzul.style.background = 'rgb(194, 191, 191)'
        corBranco.style.background = 'rgb(194, 191, 191)'
        corVerde.style.background = 'rgb(194, 191, 191)'
        corVermelho.style.background = 'rgb(195, 238, 145)'
        img.setAttribute('src', './imagens/carros/carro_vermelho.png')
    }

    res.appendChild(img)
}

function escolheCorMoto(valor) {
    var corAmarela = window.document.getElementById('coramarelo')
    var corBranco = window.document.getElementById('corbranco')
    var corLaranja = window.document.getElementById('corlaranja')
    var corPreto = window.document.getElementById('corpreto')
    var corVermelho = window.document.getElementById('corvermelho')

    var cor = ''
    if (valor == 'coramarelo') {
        corAmarela.style.background = 'rgb(195, 238, 145)'
        corBranco.style.background = 'rgb(194, 191, 191)'
        corLaranja.style.background = 'rgb(194, 191, 191)'
        corPreto.style.background = 'rgb(194, 191, 191)'
        corVermelho.style.background = 'rgb(194, 191, 191)'
        img.setAttribute('src', './imagens/motos/moto_amarela.png')
    } else if (valor == 'corbranco'){
        corAmarela.style.background = 'rgb(194, 191, 191)'
        corBranco.style.background = 'rgb(195, 238, 145)'
        corLaranja.style.background = 'rgb(194, 191, 191)'
        corPreto.style.background = 'rgb(194, 191, 191)'
        corVermelho.style.background = 'rgb(194, 191, 191)'
        img.setAttribute('src', './imagens/motos/moto_branca.png')
    } else if (valor == 'corlaranja') {
        corAmarela.style.background = 'rgb(194, 191, 191)'
        corBranco.style.background = 'rgb(194, 191, 191)'
        corLaranja.style.background = 'rgb(195, 238, 145)'
        corPreto.style.background = 'rgb(194, 191, 191)'
        corVermelho.style.background = 'rgb(194, 191, 191)'
        img.setAttribute('src', './imagens/motos/moto_laranja.png')
    } else if (valor == 'corpreto') {
        corAmarela.style.background = 'rgb(194, 191, 191)'
        corBranco.style.background = 'rgb(194, 191, 191)'
        corLaranja.style.background = 'rgb(194, 191, 191)'
        corPreto.style.background = 'rgb(195, 238, 145)'
        corVermelho.style.background = 'rgb(194, 191, 191)'
        img.setAttribute('src', './imagens/motos/moto_preta.png')
    } else if (valor == 'corvermelho') {
        corAmarela.style.background = 'rgb(194, 191, 191)'
        corBranco.style.background = 'rgb(194, 191, 191)'
        corLaranja.style.background = 'rgb(194, 191, 191)'
        corPreto.style.background = 'rgb(194, 191, 191)'
        corVermelho.style.background = 'rgb(195, 238, 145)'
        img.setAttribute('src', './imagens/motos/moto_vermelha.png')
    }

    res.appendChild(img)
}
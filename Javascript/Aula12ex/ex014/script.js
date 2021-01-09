var agora = new Date()
var hora = agora.getHours()
var minuto = agora.getMinutes()

var texto = window.document.querySelector('div#txt')
texto.innerHTML = `<p>Agora são ${hora} horas e ${minuto} minutos.</p>`

var imagem = window.document.querySelector('div#img')
var corpo = window.document.body

if (hora < 6) {
    imagem.innerHTML = `<img src="./imagens/madrugada1.jpg" alt="madrugada">`
    corpo.style.background = "midnightblue"
} else if (hora < 12) {
    imagem.innerHTML = `<img src="./imagens/manha1.jpg" alt="uma bela manhã">`
    corpo.style.background = "rgb(240, 217, 116)"
} else if (hora < 18) {
    imagem.innerHTML = `<img src="./imagens/tarde1.jpg" alt="uma bela tarde">`
    corpo.style.background = "chocolate"
} else {
    imagem.innerHTML = `<img src="./imagens/noite1.jpg" alt="uma bela noite">`
    corpo.style.background = "rgb(54, 52, 52)"
}
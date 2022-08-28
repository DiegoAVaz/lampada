var clicks = 0

function ligaDesliga(filename){
    if (clicks <= 5){
        document.querySelector('.imagem').setAttribute('src','imagens/'+filename)
        clicks++
        document.querySelector('.clicks').innerHTML = clicks
    } else {
        document.querySelector('.text').innerHTML = 'Você queimou a lâmpada'
        document.querySelector('.imagem').setAttribute('src','imagens/'+'desligada.png')
    }
}


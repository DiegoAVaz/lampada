var clicks = 0

function ligaDesliga(filename){
    document.querySelector('.imagem').setAttribute('src','imagens/'+filename)
    clicks++
    document.querySelector('.clicks').innerHTML = clicks
}


function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)
    if (elemento === null && elemento.localName === 'audio') {
            elemento.play();
        }
        else  {
            console.log('Elemento nao encontrado')
        }    } 


const listaDeTeclas = document.querySelectorAll('.tecla');
let contador = 0;
 
//enquanto
while(contador < listaDeTeclas.length){//elemento buscado no console length

    const  tecla =  listaDeTeclas[contador]
    const instrumento =tecla.classList[1]//Buscado no  log
    //template string
    const idAudio = `#som_${instrumento}`

    tecla.onclick = function (){
        tocaSom(idAudio)//seleciona toda funçoes num clik
    }
    contador = contador + 1;
}
tecla.onkeydown = function (evento) {

//console.log(evento.code == 'Space')

    if (evento.code === 'Space' || evento.code === 'Enter') {
        tecla.classList.add('ativa');
    }
    
    }
tecla.onkeyup = function () {
    tecla.classList.remove('ativa')
}


//Animação typing
var typing = document.getElementById('typing')
var array = ['David Pimenta', 'Estudante', 'Desenvolvedor Web']
var cont = 1

var veriftyping = 1

typing.addEventListener('animationend', () => {
    if(veriftyping == 1){
        typing.style.left = "100%"
        typing.style.marginLeft = "35px"
        typing.style.animation = 'piscando 1.5s steps(100000) 1'
        typing.style.animationFillMode = "forwards";
        
        veriftyping = 2
    } else if(veriftyping == 2){
        typing.style.marginLeft = "0px"
        typing.style.left = "100%"
        typing.style.animation = 'typingrevers 1.5s steps(30) 1'
        typing.style.animationFillMode = "forwards";

        veriftyping = 3
    } else if(veriftyping == 3){
        if(cont == 3){
            cont = 0
        }
        let textoanimado = document.getElementById('textoanimado')
        textoanimado.innerText = array[cont]
        cont++
        typing.style.left = "0%";
        typing.style.animation = 'typing 1.5s steps(30) 1'
        typing.style.animationFillMode = "forwards";
        veriftyping = 1
    }

})

//Animação Typing


// Animação Arrow
var verifarrow = true

var arrow = document.getElementById('arrow')
arrow.addEventListener('animationend', () => {

    if(!verifarrow){
        arrow.style.animationName = 'arrow'
        verifarrow = true
    } else {
        arrow.style.animationName = 'arrowrevers';
        verifarrow = false
    }
})
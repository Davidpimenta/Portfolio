var typing = document.getElementById('typing')
var array = ['David Pimenta', 'Estudante', 'Desenvolvedor Web']
var cont = 1

/*setTimeout(() => {  
    typing.style.left = "100%"
    typing.style.marginLeft = "35px"
    typing.style.animation = 'piscando 1.5s steps(100000) 1'
    typing.style.animationFillMode = "forwards";
}, 1500)

setInterval(() => {
    typing.style.marginLeft = "0px"
    typing.style.left = "100%"
    typing.style.animation = 'typingrevers 1.5s steps(30) 1'
    typing.style.animationFillMode = "forwards";
}, 3000)


setInterval(() => {
    if(cont == 3){
        cont = 0
    }
    let textoanimado = document.getElementById('textoanimado')
    textoanimado.innerText = array[cont]
    cont++
    typing.style.left = "0%";
    typing.style.animation = 'typing 1.5s steps(30) 1'
    typing.style.animationFillMode = "forwards";
    setTimeout(() => {
        typing.style.left = "100%"
        typing.style.marginLeft = "35px"
        typing.style.animation = 'piscando 1.5s steps(100000) 1'
        typing.style.animationFillMode = "forwards";
    }, 1500)
}, 6000)
*/

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


var trocafoto = document.querySelector('.conteiner-foto-sobre')
var veriftrocafoto = false
trocafoto.addEventListener('click', () => {
    console.log('click')
    let foto1 = document.getElementById('foto')
    let foto2 = document.getElementById('contorno-foto2')
   

    if(!veriftrocafoto){
        console.log('click')
        foto2.style.animation = 'trocafotoa 1s steps(60) 1'
        foto2.style.animationFillMode = 'forwards'
        foto1.style.animation = 'trocafotob 1s steps(60) 1'
        foto1.style.animationFillMode = 'forwards'
        
        veriftrocafoto = true
    } else {
        foto1.style.animation = 'trocafotoa 1s steps(60) 1'
        foto1.style.animationFillMode = 'forwards'
        foto2.style.animation = 'trocafotob 1s steps(60) 1'
        foto2.style.animationFillMode = 'forwards'
        veriftrocafoto = false
    }

})


const menuopt = document.querySelectorAll('.menu-opt')
menuopt.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        var id = item.getAttribute('href')
        id = id.replace('#', '')
        const section = document.getElementById(id)
        let to = section.offsetTop - 100
        
        let scrollPositionA = window.scrollY;
        let scrollPositionB = scrollPositionA



        let scrollanimado = setInterval(() => {

            if(scrollPositionB < to){
                if(scrollPositionA == to || scrollPositionA > to){
                    clearInterval(scrollanimado)
                }
                scrollPositionA+= 10
                window.scroll(scrollPositionB, scrollPositionA)
            
            } else if(scrollPositionB > to){

                if(scrollPositionA == to || scrollPositionA < to){
                    clearInterval(scrollanimado)
                }
                scrollPositionA-= 10
                window.scroll(scrollPositionB, scrollPositionA)
            
            }
            

        }, 1)
        
    });
});


//Menu-Animation


menuopt.forEach((item) => {
    
    item.addEventListener('mouseenter', () => {
        let span = document.querySelectorAll('.menu-hover-a')
        
        if(item.getAttribute('href') == '#sobre'){
            span[0].classList = 'menu-hover-a menu-hover-a-active'
        }

        if(item.getAttribute('href') == '#estudos'){
            span[1].classList = 'menu-hover-a menu-hover-a-active'
        }

        if(item.getAttribute('href') == '#certificados'){
            span[2].classList = 'menu-hover-a menu-hover-a-active'
        }

        if(item.getAttribute('href') == '#projetos'){
            span[3].classList = 'menu-hover-a menu-hover-a-active'
        }
        if(item.getAttribute('href') == '#skills'){
            span[4].classList = 'menu-hover-a menu-hover-a-active'
        }

    })

    item.addEventListener('mouseleave', () => {
        let span = document.querySelectorAll('.menu-hover-a')
        if(item.getAttribute('href') == '#sobre'){
            span[0].classList = 'menu-hover-a'
        }

        if(item.getAttribute('href') == '#estudos'){
            span[1].classList = 'menu-hover-a'
        }

        if(item.getAttribute('href') == '#certificados'){
            span[2].classList = 'menu-hover-a'
        }

        if(item.getAttribute('href') == '#projetos'){
            span[3].classList = 'menu-hover-a'
        }
        if(item.getAttribute('href') == '#skills'){
            span[4].classList = 'menu-hover-a'
        }
    })
})



//Menu-Animation


//Estudos-Carrocel

var arrowleft = document.getElementById('arrow-left')
var arrowright = document.getElementById('arrow-right')
var contMargin = 0 

arrowleft.addEventListener('click', () => {

    let card = document.getElementById('htmlcsscard')

    if(contMargin == 0){
        contMargin = -1680
        card.style.marginLeft = '-1680px'
    } else {
        let card = document.getElementById('htmlcsscard')
        contMargin+=420
        console.log(contMargin)
        card.style.marginLeft = contMargin + 'px'
    }

})

arrowright.addEventListener('click', () => {
    
    let card = document.getElementById('htmlcsscard')

    if(contMargin == -1680){
        contMargin = 0
        card.style.marginLeft = '0px'
    } else {
        console.log(arrowleft)
        console.log(arrowright)
        let card = document.getElementById('htmlcsscard')
        contMargin-=420
        console.log(contMargin)
        card.style.marginLeft = contMargin + 'px'
    }
})


//Estudos-Carrocel

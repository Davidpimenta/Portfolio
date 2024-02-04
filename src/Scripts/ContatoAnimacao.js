
const options = {
    root: null,
    threshold: 0.3,
}

const optionsC = {
    root: null,
    threshold: observerResponsivo(),
}


//ObserverSkills
const observerContato = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            TracoAnimacao()
            
            setTimeout(() => {
                contatoAnimacaoTitulo()
            }, 350)

            setTimeout(() => {
                containerContato()
            }, 3000)

            setTimeout(() => {
               tituloCardAnimacao()
            }, 3000)
    
            setTimeout(() => {
              redesAnimacao()
            }, 4000)
           

            observerContato.unobserve(sectionContato)
        }
    })
}, options)

const observerContatoOpt = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[4].classList.add('opt-ativada')

        
        } else {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[4].classList.remove('opt-ativada')
        }
    })
}, optionsC)


const sectionContato = document.getElementById('contato')
observerContato.observe(sectionContato)
observerContatoOpt.observe(sectionContato)
//ObserverSkills

//

//contatoAnimacaoTitulo

function contatoAnimacaoTitulo(){
    let titulosContato = document.querySelector('.titulo-contato')
    titulosContato.style.opacity = '1'

    let letras = titulosContato.textContent.split(''); 
    titulosContato.textContent = ''; 

    letras.forEach((letra, index) => {
        let span = document.createElement('span');
        span.textContent = letra; 
        span.classList.add('tituloLetra');
        span.style.animationDelay = `${index * 0.1}s`; 
        titulosContato.appendChild(span);
        if(letra == 's'){
            let espaco = document.createElement('span');
            espaco.textContent = ' ';
            titulosContato.append(espaco) 
        } 
    }) 
}

//contatoAnimacaoTitulo

//AnimacaoBolinhaeTraco

function TracoAnimacao(){
    const traco = document.querySelector('.traco-top-contato')
    const bolinha = document.querySelector('.bolinha-top-contato') 
    traco.style.animation = 'tracoAnimacao 1s forwards' 
    bolinha.style.animation = 'BolinhaAnimacao 1.5s 0.8s forwards'

}

//AnimacaoBolinhaeTraco

//containerallcontato

function containerContato(){
    const container = document.querySelector('.container-all-contato')
    container.style.opacity = 1
}

//containerallcontato

//titulo-card-contato

function tituloCardAnimacao(){
    const tituloCard = document.querySelector('.titulo-card-contato')
    tituloCard.style.animation = 'tituloCardAnimacao 2s forwards'
}

//titulo-card-contato

//Redesanimacao

function redesAnimacao(){
    const redes = document.querySelectorAll('.redes-container')
    console.log(redes)
    redes.forEach((redes, index) => {
        redes.style.animation = `redesAnimacao 2s ${index * 0.1}s forwards`
    })
    
}

//Redesanimacao


function observerResponsivo(){
    if(window.innerHeight <= 380){
        return 1
    } else {
        return 0.8
    }
}

const options = {
    root: null,
    threshold: 0.2,
}

const optionsC = {
    root: null,
    threshold: 0.4,
}


const observerAfazeres = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            SectionafazerAnimacao()
           
            TituloAfazerAnimacao()

            setTimeout(() => {
                tracoAnimacaoEnd()
            }, 2000)

            setTimeout(() => {
                timelineAnimacao()
            }, 4200)
            

            observerAfazeres.unobserve(sectionAfazeres)
        } 
    })
}, options)

const sectionAfazeresOpt = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[3].classList.add('opt-ativada')
        } else {
            
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[3].classList.remove('opt-ativada')
        }
    })
}, optionsC)


//ObserverCertificados

const sectionAfazeres = document.getElementById('afazeres')
observerAfazeres.observe(sectionAfazeres)
sectionAfazeresOpt.observe(sectionAfazeres)



//SectionAfazerAnimacao

function SectionafazerAnimacao(){
    const afazer = document.getElementById('afazeres')
    afazer.style.opacity = '1'
}

//SectionAfazerAnimacao

function TituloAfazerAnimacao(){
    let tituloAfazer = document.querySelector('.titulo-afazeres')
    tituloAfazer.style.opacity = '1'

    let letras = tituloAfazer.textContent.split(''); 
    tituloAfazer.textContent = ''; 

    letras.forEach((letra, index) => {
        let span = document.createElement('span');
        span.textContent = letra; 
        span.classList.add('tituloLetra');
        span.style.animationDelay = `${index * 0.1}s`; 
        tituloAfazer.appendChild(span);
        if(letra == 'a' || letra == 'o'){
            let espaco = document.createElement('span');
            espaco.textContent = ' ';
            tituloAfazer.append(espaco) 
        } 
    }) 
}

//animacaoTituloAfazer
//animacaoTituloAfazer
//TimelineAnimacao

function timelineAnimacao(){
    const timeline = document.querySelectorAll('.container-timeline')
    const trilha = document.querySelector('.trilha')
    trilha.style.animation = 'moveline 6s linear forwards'
    for(let i = 0; i < timeline.length; i++){
        timeline[i].style.animation = `movedown 1s ${i + 1}s linear forwards`
    }
    
}

//TimelineAnimacao

//tracoAnimacaoEnd

function tracoAnimacaoEnd(){
    const tracofinalleft = document.querySelector('.tracofinalleft')
    const tracofinaldown =  document.querySelector('.tracofinaldown')
    const bolinhafinal =  document.querySelector('.bolinhafinal')

    tracofinalleft.style.animation = 'movetracoleft 1s forwards'
    tracofinaldown.style.animation = 'movetracodown 1s 1s forwards'
    bolinhafinal.style.animation = 'animacaobolinha 1s 2s forwards'
}

//tracoAnimacaoEnd
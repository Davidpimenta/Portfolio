const options = {
    root: null,
    threshold: 0.3,
}
const optionsP = {
    root: null,
    threshold: 0.8,
}



const observerProjetos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            animationTituloProjeto()
            setTimeout(() =>{
                animationCardsProjeto()
            }, 1000) 
            observerProjetos.unobserve(sectionProjetos)
        } 
    })
}, options)


const observerProjetosOpt = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[2].classList.add('opt-ativada')
        

        } else {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[2].classList.remove('opt-ativada')
        }
    })
}, optionsP)

const sectionProjetos = document.getElementById('projetos')
observerProjetos.observe(sectionProjetos)
observerProjetosOpt.observe(sectionProjetos)

//AnimationTituloProjetos

function animationTituloProjeto(){
    const tituloProject = document.querySelector('.titulo-projeto')

    tituloProject.style.opacity = '1'
    let letras = tituloProject.textContent.split(''); 
    tituloProject.textContent = ''; 
    letras.forEach((letra, index) => {
        let span = document.createElement('span');
        span.textContent = letra; 
        span.classList.add('tituloLetra');
        span.style.animationDelay = `${index * 0.1}s`; 
        tituloProject.appendChild(span);
        if(letra == 's'){
            let espaco = document.createElement('span');
            espaco.textContent = ' ';
            tituloProject.append(espaco) 
        } 
    }) 
}


//AnimationTituloProjetos

//AnimationCardsProjetos

function animationCardsProjeto(){
    const cards = document.querySelectorAll('.card')
    console.log(cards)
    let cont = 0.7
    cards.forEach((card, indice) => {
        card.style.animation = `puff-in-center 1.5s  ${cont * indice}s forwards`
        const tec = card.querySelectorAll('.tec')
        let conta = 1
        console.log(tec)
        tec.forEach((t) => {
            t.style.animation = `roll-in-left 1.5s  ${conta * indice}s forwards`
        })
        
    })
}


//AnimationCardsProjetos

//AnimationTecProjetos


//AnimationTecProjetos
const options = {
    root: null,
    threshold: 0.4,
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
                animacaoTecProjetos()
                animacaoTextosProjetos()
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


const cards = document.querySelectorAll('.card')
function animationCardsProjeto(){
    let cont = 0.7
    cards.forEach((card, indice) => {
        card.style.animation = `puff-in-center 1.5s  ${cont * indice}s forwards`
    })
}

//AnimationCardsProjetos

//AnimationTecProjetos
function animacaoTecProjetos(){
   
        let contadorTec = 0
        for(let card of cards){
            const tecs = card.querySelectorAll('.tec')
            for(let tec of tecs){
                tec.style.animation = `roll-in-left 1.5s  ${contadorTec}s forwards`
                contadorTec += 0.45
            }
        }
  
}
//AnimationTecProjetos

//AnimationTextoProjetos
function animacaoTextosProjetos(){
    setTimeout(() => {
        const textoProject = document.querySelector('.texto-projetos')
        textoProject.style.opacity = '1'
        const palavras = textoProject.textContent.split(' ');
        textoProject.textContent = '';
        var contletras = 1
        

        palavras.forEach((Palavra) => {
            const palavraInteira = document.createElement('span')
            palavraInteira.classList.add('palavra')
            palavraInteira.textContent = ' '
            for (const L of Palavra) {
                const letra = document.createElement('span')
                letra.textContent = L
                letra.classList.add('letraTextoProjeto')
                letra.style.animationDelay = `${contletras}s`
                palavraInteira.appendChild(letra)
                contletras += 0.1 

            }
            textoProject.appendChild(palavraInteira)
        });
    
    },1500)  
}
//AnimationTextoProjetos

//AnimationDescProjeto

cards.forEach((card) => {
    card.addEventListener('click', () => {
        let divTec = card.querySelector('.tecnologias')
        let divContent = card.querySelector('.conteudo-site')
        divTec.classList.toggle('tecnologias-atv')
        divContent.classList.toggle('conteudo-site-dst')
    })
})


//AnimationDescProjeto
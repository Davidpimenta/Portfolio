

const options = {
    root: null,
    threshold: 0.3,
}

const optionsP = {
    root: null,
    threshold: 0.6,
}


const observerProjetos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animationSectionProjeto()
            setTimeout(()=> {
                animationTituloProjeto()
            }, 500)
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


//animationSectionProjeto

function animationSectionProjeto(){
    const projeto = document.getElementById('projetos')
    projeto.style.opacity = 1
}

//animationSectionProjeto


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
function animacaoTecProjetos(Num=0, Array){
        let contadorTec = 0
        let guardatemp = []
        for(let card of cards){
            const tecs = card.querySelectorAll('.tec')
            let contadorArray = 0

            if(Num == 0){
                for(let tec of tecs){
                    tec.style.animation = `roll-in-left 1.5s  ${contadorTec}s forwards`
                    if(guardatemp.length < 5 ){
                        guardatemp.push(contadorTec)
                    }
                    contadorTec += 0.45
                }
            }

            if(Num == 1){
                guardatemp = [...Array]
                for(let tec of tecs){
                    setTimeout(() => {
                        tecs[contadorArray].style.animation = `roll-in-left 1.5s  ${guardatemp[contadorArray]}s forwards`
                        contadorArray++
                    }, 8000)
                    
                }
            }
        }

        if(Num == 0){
            animacaoTecProjetos(1, guardatemp)
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

let verificalink = true
const a = document.querySelectorAll('.links a')

a.forEach((link)=> {
    link.addEventListener('click', () => {
        verificalink = false
    })
})


let verificaDescAtivada = true
cards.forEach((card) => {
    card.addEventListener('click', () => {
        if(verificalink){
            if(verificaDescAtivada){
                let divTec = card.querySelector('.tecnologias')
                let divContent = card.querySelector('.conteudo-site')
                divTec.classList.toggle('tecnologias-atv')
                divContent.classList.toggle('conteudo-site-dst')

                let cardDesc = divTec.querySelector('.descricao-tec')
                cardDesc.classList.toggle('descricao-tecatv')

                let tecs = card.querySelectorAll('.tec')
                tecs.forEach((tec) => {
                    tec.classList.toggle('tec-desativada')
                })
                verificaDescAtivada = false
            } else {
                let divTec = card.querySelector('.tecnologias')
                let divContent = card.querySelector('.conteudo-site')
                let cardDesc = divTec.querySelector('.descricao-tec')
                cardDesc.classList.toggle('descricao-tecatv')
                setTimeout(() => {
                    divTec.classList.toggle('tecnologias-atv')
                    divContent.classList.toggle('conteudo-site-dst')
                }, 400)
                let tecs = card.querySelectorAll('.tec')
                tecs.forEach((tec) => {
                    tec.classList.toggle('tec-desativada')
                })
                verificaDescAtivada = true
            }

        } else {
            verificalink = true
        }
    })
})

//AnimationDescProjeto
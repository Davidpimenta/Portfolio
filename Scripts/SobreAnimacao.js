const optionsS = {
    root: null,
    threshold: 1,
} 
const options = {
    root: null,
    threshold: 0.8,
}

const observerSobre = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animaçãoTituloSobre()
            animaçãonaSectionSobre()
            animaçãonoTextoSobre()        

            setTimeout(() => {
                animaçãoFotoSobre()
            }, 1500)

            setTimeout(() => {
                animaçãoAtualmenteSobre()
            }, 1400)        
            observerSobre.unobserve(sectionSobre)
        }
    })
}, options)

const observerSobreOpt = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[0].classList.add('opt-ativada')            
        } else {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[0].classList.remove('opt-ativada')
        }
    })
}, optionsS)

const sectionSobre = document.getElementById('sobre')
observerSobre.observe(sectionSobre)
observerSobreOpt.observe(sectionSobre)

//Animação Foto sobre
const fotoSobre = document.getElementById('foto')
function animaçãoFotoSobre(){
    const contorno = document.getElementById('contorno-foto2')
    fotoSobre.style.animation = 'animaçãoFoto 1s 1s forwards'
    contorno.style.animation = 'animaçãoContorno 1s forwards'
}
//Animação Foto sobre
//Animação Section sobre
function animaçãonaSectionSobre(){
    sectionSobre.style.animation = 'CarregamentoSection 2s forwards'
}
//Animação Section sobre
//Animação Titulo Sobre
const tituloSobre = document.getElementById('sobre-titulo')
function animaçãoTituloSobre(){
    tituloSobre.style.opacity = '1'
    let letras = tituloSobre.textContent.split(''); 
    tituloSobre.textContent = ''; 
    letras.forEach((letra, index) => {
        let span = document.createElement('span');
        span.textContent = letra; 
        span.classList.add('tituloLetra');
        span.style.animationDelay = `${index * 0.1}s`; 
        tituloSobre.appendChild(span);
        if(letra == 'e'){
            let espaco = document.createElement('span');
            espaco.textContent = ' ';
            tituloSobre.append(espaco) 
        } 
    }) 
}
//Animação Titulo Sobre
//Animação no texto sobre
const texto = document.getElementById('sobre-descrição')
function animaçãonoTextoSobre(){
    texto.style.opacity = '1';
    const palavras = texto.textContent.split(' ');
    texto.textContent = '';
    var contletras = 0.1

    palavras.forEach((Palavra) => {
        const palavraInteira = document.createElement('span')
        palavraInteira.classList.add('palavra')
        palavraInteira.textContent = ' '
        for (const L of Palavra) {
            const letra = document.createElement('span')
            letra.textContent = L
            letra.classList.add('letra')
            letra.style.animationDelay = `${contletras}s`
            palavraInteira.appendChild(letra)
            contletras += 0.002 
        }
        texto.appendChild(palavraInteira) 
    });   
}
//Animação no texto sobre
//Animação AtualmenteSobre
const atualmenteSobre = document.getElementById('atualmente')
function animaçãoAtualmenteSobre(){
    atualmenteSobre.style.animation = 'animaçãoatualmente 1s forwards'
}
//Animação AtualmenteSobre


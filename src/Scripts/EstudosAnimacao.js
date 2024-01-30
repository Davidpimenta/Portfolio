
const options = {
    root: null,
    threshold: 0.5,
}

const optionsE = {
    root: null,
    threshold: 0.8,
}

var verificaskillsanimation = false
var skills = document.querySelectorAll('.skills');

const observerEstudos = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            animaçãoSectionEstudos()
            animaçãoTituloEstudos()
            animaçãoSkillsEstudos()
            setTimeout(()=>{
                animaçãoTextoEstudos()
                verificaskillsanimation = true  
            }, 2000) 
            observerEstudos.unobserve(sectionEstudos)
        
        } 
    })
}, options)
const observerEstudosOpt = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[1].classList.add('opt-ativada')
        
        } else {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[1].classList.remove('opt-ativada')
        }
    })
}, optionsE)

const sectionEstudos = document.getElementById('estudos')
observerEstudos.observe(sectionEstudos)
observerEstudosOpt.observe(sectionEstudos)

//ObserverCertificados

//AnimacaoSectionEstudos

function animaçãoSectionEstudos(){
    let estudosSection = document.getElementById('estudos')
    estudosSection.style.animation = 'CarregamentoSection 2s forwards'
}


//AnimacaoSectionEstudos

//AnimacaoSectionTitulo

function animaçãoTituloEstudos(){
    let tituloEstudos = document.querySelector('.titulo-estudos')
    tituloEstudos.style.opacity = '1'

    let letras = tituloEstudos.textContent.split(''); 
    tituloEstudos.textContent = ''; 

    letras.forEach((letra, index) => {
        let span = document.createElement('span');
        span.textContent = letra; 
        span.classList.add('tituloLetra');
        span.style.animationDelay = `${index * 0.1}s`; 
        tituloEstudos.appendChild(span);
        if(letra == 's'){
            let espaco = document.createElement('span');
            espaco.textContent = ' ';
            tituloEstudos.append(espaco) 
        } 
    }) 
}
//AnimacaoSectionTitulo
//AnimacaoSectionSkills

function animaçãoSkillsEstudos(){
    skills.forEach((skill, indice) => {

        skill.style.animation = `roll-in-left 1s ${indice * 0.4}s forwards`

    })
}

//AnimacaoSectionSkills
//AnimacaoTextoEstudos

function animaçãoTextoEstudos(){
    const texto = document.querySelector('.desc')
    texto.style.opacity = '1'
}

//AnimacaoTextoEstudos
//Animation Skill hover
skills.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        if(verificaskillsanimation){
            var bg = item.querySelector('.before');
            bg.classList.add('beforeactive');
            var text = document.querySelector('.desc')
       
            if(item.id == 'htmlconteiner'){
                text.innerHTML = 'Possuo experiência no uso do <strong class="html">HTML</strong> como linguagem de marcação para o desenvolvimento de páginas web. Tenho familiaridade com suas estruturas fundamentais, assim como compreensão do Document Object Model (DOM).<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            }
            
            if(item.id == 'cssconteiner'){
                text.innerHTML = 'Tenho experiência na utilização do <strong class="css">CSS</strong> como linguagem de estilização para páginas web. Possuo conhecimento em estilizar elementos CSS, construir estruturas de design eficazes e criar animações para aprimorar a experiência do usuário.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            }
            
            if(item.id == 'jsconteiner'){
                text.innerHTML = 'Desenvolvi habilidades em <strong class="js">JavaScript</strong>, utilizando-o para criar animações envolventes, manipular dinamicamente o Document Object Model (DOM) e construir funcionalidades interativas que agregam valor à experiência do usuário em páginas web.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            }
            
            if(item.id == 'jqueryconteiner'){
                text.innerHTML = 'Aprofundei meu conhecimento ao aprender a utilizar o <strong class="jquery">Jquery</strong>, aprimorando minhas habilidades em efetuar requisições AJAX de forma mais eficiente. Além disso, adquiri expertise na construção de animações envolventes e na configuração facilitada do Document Object Model (DOM), graças a este framework. <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            }
            
            if(item.id == 'phpconteiner'){
                text.innerHTML = 'Adquiri proficiência em <strong class="php">PHP</strong>, o que me possibilitou desenvolver páginas HTML dinâmicas e estabelecer conexões eficientes com o servidor. Agora, posso criar conteúdo interativo, manipular dados dinamicamente e aprimorar a experiência do usuário em minhas aplicações web <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            }
            
            if(item.id == 'sqlconteiner'){
                text.innerHTML = 'Adquiri conhecimentos em <strong class="sql">SQL</strong>, o que me habilitou a armazenar dados dos usuários em aplicações em que eu desempenhava um papel mais focado no back-end. Agora, posso gerenciar eficientemente informações essenciais, proporcionando uma base sólida para o desenvolvimento de aplicações robustas <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            }
            
            if(item.id == 'sassconteiner'){
                text.innerHTML = 'Atualmente, estou dedicando tempo aos estudos de <strong class="sass">SASS</strong>, utilizando esta linguagem de extensão do CSS no desenvolvimento de sites. Busco aprofundar meu conhecimento nesta poderosa ferramenta, explorando suas funcionalidades para otimizar a criação de estilos e aprimorar a qualidade dos meus projetos web. <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            }
            
            if(item.id == 'bootsconteiner'){
                text.innerHTML = 'Aprofundei meus conhecimentos em desenvolvimento web ao aprender <strong class="bootstrap">Bootstrap</strong>. Esta experiência enriqueceu minha capacidade de estruturar elementos HTML e aplicar estilos CSS de maneira mais eficiente, utilizando o framework. Além disso, adquiri habilidades para incorporar facilmente funcionalidades adicionais às páginas, tornando o processo de construção mais ágil e eficaz.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            }
            text.style.animation = ' text-focus-in 0.2s steps(60) 1 running'
        }
    });
    
    item.addEventListener('mouseleave', () => {
        if(verificaskillsanimation){
            var bg = item.querySelector('.before');
            bg.classList.remove('beforeactive');
            var text = document.querySelector('.desc')
            text.innerHTML = 'As habilidades que adquiri enquanto estudava.<strong class="mousehoveraviso">(Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = ' text-focus-inB 0.2s steps(60) 1 running'
        }
    });
});
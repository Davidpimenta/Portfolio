//Animação de carregamento

//Entrada do site animação

//Entrada do site animação


//Animação de carregamento

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

//Animação Arrow

//Animação Scroll
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
                console.log(scrollPositionA)
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
//Animação Scroll


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

        if(item.getAttribute('href') == '#projetos'){
            span[2].classList = 'menu-hover-a menu-hover-a-active'
        }

        if(item.getAttribute('href') == '#certificados'){
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

        if(item.getAttribute('href') == '#projetos'){
            span[2].classList = 'menu-hover-a'
        }

        if(item.getAttribute('href') == '#certificados'){
            span[3].classList = 'menu-hover-a'
        }
        if(item.getAttribute('href') == '#skills'){
            span[4].classList = 'menu-hover-a'
        }
    })
})



//Menu-Animation

//Animation Skill hover

var skills = document.querySelectorAll('.skills');

skills.forEach((item) => {
    item.addEventListener('mouseenter', () => {
        var bg = item.querySelector('.before');
        bg.classList.add('beforeactive');
        var text = document.querySelector('.desc')
        
        if(item.id == 'htmlconteiner'){
            text.innerHTML = 'Possuo experiência no uso do <strong class="html">HTML</strong> como linguagem de marcação para o desenvolvimento de páginas web. Tenho familiaridade com suas estruturas fundamentais, assim como compreensão do Document Object Model (DOM).<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = 'descanimadaA 0.4s steps(60) 1'
        }

        if(item.id == 'cssconteiner'){
            text.innerHTML = 'Tenho experiência na utilização do <strong class="css">CSS</strong> como linguagem de estilização para páginas web. Possuo conhecimento em estilizar elementos CSS, construir estruturas de design eficazes e criar animações para aprimorar a experiência do usuário.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = 'descanimadaA 0.4s steps(60) 1'
        }

        if(item.id == 'jsconteiner'){
            text.innerHTML = 'Desenvolvi habilidades em <strong class="js">JavaScript</strong>, utilizando-o para criar animações envolventes, manipular dinamicamente o Document Object Model (DOM) e construir funcionalidades interativas que agregam valor à experiência do usuário em páginas web.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = 'descanimadaA 0.4s steps(60) 1'
        }

        if(item.id == 'jqueryconteiner'){
            text.innerHTML = 'Aprofundei meu conhecimento ao aprender a utilizar o <strong class="jquery">Jquery</strong>, aprimorando minhas habilidades em efetuar requisições AJAX de forma mais eficiente. Além disso, adquiri expertise na construção de animações envolventes e na configuração facilitada do Document Object Model (DOM), graças a este framework. <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = 'descanimadaA 0.4s steps(60) 1'
        }

        if(item.id == 'phpconteiner'){
            text.innerHTML = 'Adquiri proficiência em <strong class="php">PHP</strong>, o que me possibilitou desenvolver páginas HTML dinâmicas e estabelecer conexões eficientes com o servidor. Agora, posso criar conteúdo interativo, manipular dados dinamicamente e aprimorar a experiência do usuário em minhas aplicações web <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = 'descanimadaA 0.4s steps(60) 1'
        }

        if(item.id == 'sqlconteiner'){
            text.innerHTML = 'Adquiri conhecimentos em <strong class="sql">SQL</strong>, o que me habilitou a armazenar dados dos usuários em aplicações em que eu desempenhava um papel mais focado no back-end. Agora, posso gerenciar eficientemente informações essenciais, proporcionando uma base sólida para o desenvolvimento de aplicações robustas <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = 'descanimadaA 0.4s steps(60) 1'
        }

        if(item.id == 'sassconteiner'){
            text.innerHTML = 'Atualmente, estou dedicando tempo aos estudos de <strong class="sass">SASS</strong>, utilizando esta linguagem de extensão do CSS no desenvolvimento de sites. Busco aprofundar meu conhecimento nesta poderosa ferramenta, explorando suas funcionalidades para otimizar a criação de estilos e aprimorar a qualidade dos meus projetos web. <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = 'descanimadaA 0.4s steps(60) 1'
        }

        if(item.id == 'bootsconteiner'){
            text.innerHTML = 'Aprofundei meus conhecimentos em desenvolvimento web ao aprender <strong class="bootstrap">Bootstrap</strong>. Esta experiência enriqueceu minha capacidade de estruturar elementos HTML e aplicar estilos CSS de maneira mais eficiente, utilizando o framework. Além disso, adquiri habilidades para incorporar facilmente funcionalidades adicionais às páginas, tornando o processo de construção mais ágil e eficaz.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'
            text.style.animation = 'descanimadaA 0.4s steps(60) 1'
        }

    });

    item.addEventListener('mouseleave', () => {
        var bg = item.querySelector('.before');
        bg.classList.remove('beforeactive');
        var text = document.querySelector('.desc')
        text.innerHTML = 'As habilidades que adquiri enquanto estudava.<strong class="mousehoveraviso">(Passe o mouse em cima para ver as descrições)</strong>'
        text.style.animation = 'descanimadaB 0.4s steps(60) 1'

        
    });
});



//Animation Skill hover
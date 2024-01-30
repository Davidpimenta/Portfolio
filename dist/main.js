(()=>{var e={297:()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&e.unobserve(o)}))}),{root:null,threshold:.4}),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[3].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[3].classList.remove("opt-ativada")}))}),{root:null,threshold:.8}),o=document.getElementById("Afazeres");e.observe(o),t.observe(o)},165:()=>{var e=document.getElementById("typing"),t=["David Pimenta","Estudante","Desenvolvedor Web"],o=1,s=1;e.addEventListener("animationend",(()=>{1==s?(e.style.left="100%",e.style.marginLeft="35px",e.style.animation="piscando 1.5s steps(100000) 1",e.style.animationFillMode="forwards",s=2):2==s?(e.style.marginLeft="0px",e.style.left="100%",e.style.animation="typingrevers 1.5s steps(30) 1",e.style.animationFillMode="forwards",s=3):3==s&&(3==o&&(o=0),document.getElementById("textoanimado").innerText=t[o],o++,e.style.left="0%",e.style.animation="typing 1.5s steps(30) 1",e.style.animationFillMode="forwards",s=1)}));var a=!0,n=document.getElementById("arrow");n.addEventListener("animationend",(()=>{a?(n.style.animationName="arrowrevers",a=!1):(n.style.animationName="arrow",a=!0)}))},313:()=>{var e=!1,t=document.querySelectorAll(".skills");const o=new IntersectionObserver((s=>{s.forEach((s=>{s.isIntersecting&&(document.getElementById("estudos").style.animation="CarregamentoSection 2s forwards",function(){let e=document.querySelector(".titulo-estudos");e.style.opacity="1";let t=e.textContent.split("");e.textContent="",t.forEach(((t,o)=>{let s=document.createElement("span");if(s.textContent=t,s.classList.add("tituloLetra"),s.style.animationDelay=.1*o+"s",e.appendChild(s),"s"==t){let t=document.createElement("span");t.textContent=" ",e.append(t)}}))}(),t.forEach(((e,t)=>{e.style.animation=`roll-in-left 1s ${.4*t}s forwards`})),setTimeout((()=>{document.querySelector(".desc").style.opacity="1",e=!0}),2e3),o.unobserve(a))}))}),{root:null,threshold:.4}),s=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[1].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[1].classList.remove("opt-ativada")}))}),{root:null,threshold:.8}),a=document.getElementById("estudos");o.observe(a),s.observe(a),t.forEach((t=>{t.addEventListener("mouseenter",(()=>{if(e){t.querySelector(".before").classList.add("beforeactive");var o=document.querySelector(".desc");"htmlconteiner"==t.id&&(o.innerHTML='Possuo experiência no uso do <strong class="html">HTML</strong> como linguagem de marcação para o desenvolvimento de páginas web. Tenho familiaridade com suas estruturas fundamentais, assim como compreensão do Document Object Model (DOM).<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'),"cssconteiner"==t.id&&(o.innerHTML='Tenho experiência na utilização do <strong class="css">CSS</strong> como linguagem de estilização para páginas web. Possuo conhecimento em estilizar elementos CSS, construir estruturas de design eficazes e criar animações para aprimorar a experiência do usuário.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'),"jsconteiner"==t.id&&(o.innerHTML='Desenvolvi habilidades em <strong class="js">JavaScript</strong>, utilizando-o para criar animações envolventes, manipular dinamicamente o Document Object Model (DOM) e construir funcionalidades interativas que agregam valor à experiência do usuário em páginas web.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'),"jqueryconteiner"==t.id&&(o.innerHTML='Aprofundei meu conhecimento ao aprender a utilizar o <strong class="jquery">Jquery</strong>, aprimorando minhas habilidades em efetuar requisições AJAX de forma mais eficiente. Além disso, adquiri expertise na construção de animações envolventes e na configuração facilitada do Document Object Model (DOM), graças a este framework. <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'),"phpconteiner"==t.id&&(o.innerHTML='Adquiri proficiência em <strong class="php">PHP</strong>, o que me possibilitou desenvolver páginas HTML dinâmicas e estabelecer conexões eficientes com o servidor. Agora, posso criar conteúdo interativo, manipular dados dinamicamente e aprimorar a experiência do usuário em minhas aplicações web <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'),"sqlconteiner"==t.id&&(o.innerHTML='Adquiri conhecimentos em <strong class="sql">SQL</strong>, o que me habilitou a armazenar dados dos usuários em aplicações em que eu desempenhava um papel mais focado no back-end. Agora, posso gerenciar eficientemente informações essenciais, proporcionando uma base sólida para o desenvolvimento de aplicações robustas <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'),"sassconteiner"==t.id&&(o.innerHTML='Atualmente, estou dedicando tempo aos estudos de <strong class="sass">SASS</strong>, utilizando esta linguagem de extensão do CSS no desenvolvimento de sites. Busco aprofundar meu conhecimento nesta poderosa ferramenta, explorando suas funcionalidades para otimizar a criação de estilos e aprimorar a qualidade dos meus projetos web. <strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'),"bootsconteiner"==t.id&&(o.innerHTML='Aprofundei meus conhecimentos em desenvolvimento web ao aprender <strong class="bootstrap">Bootstrap</strong>. Esta experiência enriqueceu minha capacidade de estruturar elementos HTML e aplicar estilos CSS de maneira mais eficiente, utilizando o framework. Além disso, adquiri habilidades para incorporar facilmente funcionalidades adicionais às páginas, tornando o processo de construção mais ágil e eficaz.<strong class="mousehoveraviso"> (Passe o mouse em cima para ver as descrições)</strong>'),o.style.animation=" text-focus-in 0.2s steps(60) 1 running"}})),t.addEventListener("mouseleave",(()=>{if(e){t.querySelector(".before").classList.remove("beforeactive");var o=document.querySelector(".desc");o.innerHTML='As habilidades que adquiri enquanto estudava.<strong class="mousehoveraviso">(Passe o mouse em cima para ver as descrições)</strong>',o.style.animation=" text-focus-inB 0.2s steps(60) 1 running"}}))}))},760:()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(function(){const e=document.querySelector(".titulo-projeto");e.style.opacity="1";let t=e.textContent.split("");e.textContent="",t.forEach(((t,o)=>{let s=document.createElement("span");if(s.textContent=t,s.classList.add("tituloLetra"),s.style.animationDelay=.1*o+"s",e.appendChild(s),"s"==t){let t=document.createElement("span");t.textContent=" ",e.append(t)}}))}(),setTimeout((()=>{s.forEach(((e,t)=>{e.style.animation=`puff-in-center 1.5s  ${.7*t}s forwards`})),a(),setTimeout((()=>{const e=document.querySelector(".texto-projetos");e.style.opacity="1";const t=e.textContent.split(" ");e.textContent="";var o=1;t.forEach((t=>{const s=document.createElement("span");s.classList.add("palavra"),s.textContent=" ";for(const e of t){const t=document.createElement("span");t.textContent=e,t.classList.add("letraTextoProjeto"),t.style.animationDelay=`${o}s`,s.appendChild(t),o+=.1}e.appendChild(s)}))}),1500)}),1e3),e.unobserve(o))}))}),{root:null,threshold:.4}),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[2].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[2].classList.remove("opt-ativada")}))}),{root:null,threshold:.8}),o=document.getElementById("projetos");e.observe(o),t.observe(o);const s=document.querySelectorAll(".card");function a(e=0,t){let o=0,n=[];for(let a of s){const s=a.querySelectorAll(".tec");let r=0;if(0==e)for(let e of s)e.style.animation=`roll-in-left 1.5s  ${o}s forwards`,n.length<5&&n.push(o),o+=.45;if(1==e){n=[...t];for(let e of s)setTimeout((()=>{s[r].style.animation=`roll-in-left 1.5s  ${n[r]}s forwards`,r++}),8e3)}}0==e&&a(1,n)}let n=!0;document.querySelectorAll(".links a").forEach((e=>{e.addEventListener("click",(()=>{n=!1}))}));let r=!0;s.forEach((e=>{e.addEventListener("click",(()=>{if(n)if(r){let t=e.querySelector(".tecnologias"),o=e.querySelector(".conteudo-site");t.classList.toggle("tecnologias-atv"),o.classList.toggle("conteudo-site-dst"),t.querySelector(".descricao-tec").classList.toggle("descricao-tecatv"),e.querySelectorAll(".tec").forEach((e=>{e.classList.toggle("tec-desativada")})),r=!1}else{let t=e.querySelector(".tecnologias"),o=e.querySelector(".conteudo-site");t.querySelector(".descricao-tec").classList.toggle("descricao-tecatv"),setTimeout((()=>{t.classList.toggle("tecnologias-atv"),o.classList.toggle("conteudo-site-dst")}),400),e.querySelectorAll(".tec").forEach((e=>{e.classList.toggle("tec-desativada")})),r=!0}else n=!0}))}))},187:()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&e.unobserve(o)}))}),{root:null,threshold:.4}),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[4].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[4].classList.remove("opt-ativada")}))}),{root:null,threshold:.8}),o=document.getElementById("skills");e.observe(o),t.observe(o)},831:()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(function(){a.style.opacity="1";let e=a.textContent.split("");a.textContent="",e.forEach(((e,t)=>{let o=document.createElement("span");if(o.textContent=e,o.classList.add("tituloLetra"),o.style.animationDelay=.1*t+"s",a.appendChild(o),"e"==e){let e=document.createElement("span");e.textContent=" ",a.append(e)}}))}(),o.style.animation="CarregamentoSection 2s forwards",function(){n.style.opacity="1";const e=n.textContent.split(" ");n.textContent="";var t=.1;e.forEach((e=>{const o=document.createElement("span");o.classList.add("palavra"),o.textContent=" ";for(const s of e){const e=document.createElement("span");e.textContent=s,e.classList.add("letra"),e.style.animationDelay=`${t}s`,o.appendChild(e),t+=.002}n.appendChild(o)}))}(),setTimeout((()=>{!function(){const e=document.getElementById("contorno-foto2");s.style.animation="animaçãoFoto 1s 1s forwards",e.style.animation="animaçãoContorno 1s forwards"}()}),1500),setTimeout((()=>{r.style.animation="animaçãoatualmente 1s forwards"}),1400),e.unobserve(o))}))}),{root:null,threshold:.4}),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[0].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[0].classList.remove("opt-ativada")}))}),{root:null,threshold:1}),o=document.getElementById("sobre");e.observe(o),t.observe(o);const s=document.getElementById("foto"),a=document.getElementById("sobre-titulo"),n=document.getElementById("sobre-descrição"),r=document.getElementById("atualmente")},127:()=>{document.querySelectorAll(".menu-opt").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();var o=e.getAttribute("href");o=o.replace("#","");let s=document.getElementById(o).offsetTop-150,a=window.scrollY,n=a,r=setInterval((()=>{n<s?((a==s||a>s)&&clearInterval(r),a+=10,window.scroll(n,a)):n>s&&((a==s||a<s)&&clearInterval(r),a-=10,window.scroll(n,a))}),1)}))}))}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(127),o(165),o(831),o(313),o(760),o(297),o(187)})()})();
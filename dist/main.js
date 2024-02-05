(()=>{var e={297:()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(document.getElementById("afazeres").style.opacity="1",function(){let e=document.querySelector(".titulo-afazeres");e.style.opacity="1";let t=e.textContent.split("");e.textContent="",t.forEach(((t,o)=>{let s=document.createElement("span");if(s.textContent=t,s.classList.add("tituloLetra"),s.style.animationDelay=.09*o+"s",e.appendChild(s),"a"==t||"o"==t){let t=document.createElement("span");t.textContent=" ",e.append(t)}}))}(),setTimeout((()=>{!function(){const e=document.querySelector(".tracofinalleft"),t=document.querySelector(".tracofinaldown"),o=document.querySelector(".bolinhafinal");e.style.animation="movetracoleft 0.8s forwards",t.style.animation="movetracodown 0.8s 0.8s forwards",o.style.animation="animacaobolinha 0.8s 1.5s forwards"}()}),2e3),setTimeout((()=>{!function(){const e=document.querySelectorAll(".container-timeline");document.querySelector(".trilha").style.animation="moveline 4s linear forwards";for(let t=0;t<e.length;t++)e[t].style.animation=`movedown 1s ${t+1}s linear forwards`}()}),3800),e.unobserve(o))}))}),{root:null,threshold:.2}),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[3].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[3].classList.remove("opt-ativada")}))}),{root:null,threshold:.4}),o=document.getElementById("afazeres");e.observe(o),t.observe(o)},290:()=>{const e={root:null,threshold:window.innerHeight<=380?1:.8},t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(function(){const e=document.querySelector(".traco-top-contato"),t=document.querySelector(".bolinha-top-contato");e.style.animation="tracoAnimacao 1s forwards",t.style.animation="BolinhaAnimacao 1.5s 0.8s forwards"}(),setTimeout((()=>{!function(){let e=document.querySelector(".titulo-contato");e.style.opacity="1";let t=e.textContent.split("");e.textContent="",t.forEach(((t,o)=>{let s=document.createElement("span");if(s.textContent=t,s.classList.add("tituloLetra"),s.style.animationDelay=.1*o+"s",e.appendChild(s),"s"==t){let t=document.createElement("span");t.textContent=" ",e.append(t)}}))}()}),350),setTimeout((()=>{document.querySelector(".container-all-contato").style.opacity=1}),3e3),setTimeout((()=>{document.querySelector(".titulo-card-contato").style.animation="tituloCardAnimacao 2s forwards"}),3e3),setTimeout((()=>{!function(){const e=document.querySelectorAll(".redes-container");console.log(e),e.forEach(((e,t)=>{e.style.animation=`redesAnimacao 2s ${.1*t}s forwards`}))}()}),4e3),t.unobserve(s))}))}),{root:null,threshold:.3}),o=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[4].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[4].classList.remove("opt-ativada")}))}),e),s=document.getElementById("contato");t.observe(s),o.observe(s)},165:()=>{var e=document.getElementById("typing"),t=["David Pimenta","Estudante","Desenvolvedor Web"],o=1,s=1;e.addEventListener("animationend",(()=>{1==s?(e.style.left="100%",e.style.marginLeft="35px",e.style.animation="piscando 1.5s steps(100000) 1",e.style.animationFillMode="forwards",s=2):2==s?(e.style.marginLeft="0px",e.style.left="100%",e.style.animation="typingrevers 1.5s steps(30) 1",e.style.animationFillMode="forwards",s=3):3==s&&(3==o&&(o=0),document.getElementById("textoanimado").innerText=t[o],o++,e.style.left="0%",e.style.animation="typing 1.5s steps(30) 1",e.style.animationFillMode="forwards",s=1)}));var a=!0,n=document.getElementById("arrow");n.addEventListener("animationend",(()=>{a?(n.style.animationName="arrowrevers",a=!1):(n.style.animationName="arrow",a=!0)}))},313:()=>{var e=!1,t=document.querySelectorAll(".skills");const o=new IntersectionObserver((s=>{s.forEach((s=>{s.isIntersecting&&(document.getElementById("estudos").style.animation="CarregamentoSection 2s forwards",function(){let e=document.querySelector(".titulo-estudos");e.style.opacity="1";let t=e.textContent.split("");e.textContent="",t.forEach(((t,o)=>{let s=document.createElement("span");if(s.textContent=t,s.classList.add("tituloLetra"),s.style.animationDelay=.1*o+"s",e.appendChild(s),"s"==t){let t=document.createElement("span");t.textContent=" ",e.append(t)}}))}(),t.forEach(((e,t)=>{e.style.animation=`roll-in-left 1s ${.4*t}s forwards`})),setTimeout((()=>{document.querySelector(".desc").style.opacity="1",e=!0}),2e3),o.unobserve(a))}))}),{root:null,threshold:.5}),s=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[1].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[1].classList.remove("opt-ativada")}))}),{root:null,threshold:.8}),a=document.getElementById("estudos");o.observe(a),s.observe(a),t.forEach((t=>{t.addEventListener("mouseenter",(()=>{if(e){t.querySelector(".before").classList.add("beforeactive");var o=document.querySelector(".desc");"htmlcontainer"==t.id&&(o.innerHTML='Possuo experiência no uso do <strong class="html">HTML</strong> como linguagem de marcação para o desenvolvimento de páginas web. Tenho familiaridade com suas estruturas fundamentais, assim como compreensão do Document Object Model (DOM).<strong class="mousehoveraviso"> (Passe o mouse em cima ou clique para ver as descrições)</strong>'),"csscontainer"==t.id&&(o.innerHTML='Tenho experiência na utilização do <strong class="css">CSS</strong> como linguagem de estilização para páginas web. Possuo conhecimento em estilizar elementos CSS, construir estruturas de design eficazes e criar animações para aprimorar a experiência do usuário.<strong class="mousehoveraviso"> (Passe o mouse em cima ou clique para ver as descrições)</strong>'),"jscontainer"==t.id&&(o.innerHTML='Desenvolvi habilidades em <strong class="js">JavaScript</strong>, utilizando-o para criar animações envolventes, manipular dinamicamente o Document Object Model (DOM) e construir funcionalidades interativas que agregam valor à experiência do usuário em páginas web.<strong class="mousehoveraviso"> (Passe o mouse em cima ou clique para ver as descrições)</strong>'),"jquerycontainer"==t.id&&(o.innerHTML='Aprofundei meu conhecimento ao aprender a utilizar o <strong class="jquery">Jquery</strong>, aprimorando minhas habilidades em efetuar requisições AJAX de forma mais eficiente. Além disso, adquiri expertise na construção de animações envolventes e na configuração facilitada do Document Object Model (DOM), graças a este framework. <strong class="mousehoveraviso"> (Passe o mouse em cima ou clique para ver as descrições)</strong>'),"phpcontainer"==t.id&&(o.innerHTML='Adquiri proficiência em <strong class="php">PHP</strong>, o que me possibilitou desenvolver páginas HTML dinâmicas e estabelecer conexões eficientes com o servidor. Agora, posso criar conteúdo interativo, manipular dados dinamicamente e aprimorar a experiência do usuário em minhas aplicações web <strong class="mousehoveraviso"> (Passe o mouse em cima ou clique para ver as descrições)</strong>'),"sqlcontainer"==t.id&&(o.innerHTML='Adquiri conhecimentos em <strong class="sql">SQL</strong>, o que me habilitou a armazenar dados dos usuários em aplicações em que eu desempenhava um papel mais focado no back-end. Agora, posso gerenciar eficientemente informações essenciais, proporcionando uma base sólida para o desenvolvimento de aplicações robustas <strong class="mousehoveraviso"> (Passe o mouse em cima ou clique para ver as descrições)</strong>'),"sasscontainer"==t.id&&(o.innerHTML='Atualmente, estou dedicando tempo aos estudos de <strong class="sass">SASS</strong>, utilizando esta linguagem de extensão do CSS no desenvolvimento de sites. Busco aprofundar meu conhecimento nesta poderosa ferramenta, explorando suas funcionalidades para otimizar a criação de estilos e aprimorar a qualidade dos meus projetos web. <strong class="mousehoveraviso"> (Passe o mouse em cima ou clique para ver as descrições)</strong>'),"bootscontainer"==t.id&&(o.innerHTML='Aprofundei meus conhecimentos em desenvolvimento web ao aprender <strong class="bootstrap">Bootstrap</strong>. Esta experiência enriqueceu minha capacidade de estruturar elementos HTML e aplicar estilos CSS de maneira mais eficiente, utilizando o framework. Além disso, adquiri habilidades para incorporar facilmente funcionalidades adicionais às páginas, tornando o processo de construção mais ágil e eficaz.<strong class="mousehoveraviso"> (Passe o mouse em cima ou clique para ver as descrições)</strong>'),o.style.animation=" text-focus-in 0.2s steps(60) 1 running"}})),t.addEventListener("mouseleave",(()=>{if(e){t.querySelector(".before").classList.remove("beforeactive");var o=document.querySelector(".desc");o.innerHTML='As habilidades que adquiri enquanto estudava.<strong class="mousehoveraviso">(Passe o mouse em cima ou clique para ver as descrições)</strong>',o.style.animation=" text-focus-inB 0.2s steps(60) 1 running"}}))}))},760:()=>{const e={root:null,threshold:window.innerHeight<=380?1:.5},t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting&&(document.getElementById("projetos").style.opacity=1,setTimeout((()=>{!function(){const e=document.querySelector(".titulo-projeto");e.style.opacity="1";let t=e.textContent.split("");e.textContent="",t.forEach(((t,o)=>{let s=document.createElement("span");if(s.textContent=t,s.classList.add("tituloLetra"),s.style.animationDelay=.1*o+"s",e.appendChild(s),"s"==t){let t=document.createElement("span");t.textContent=" ",e.append(t)}}))}()}),500),setTimeout((()=>{a.forEach(((e,t)=>{e.style.animation=`puff-in-center 1.5s  ${.7*t}s forwards`})),n(),setTimeout((()=>{const e=document.querySelector(".texto-projetos");e.style.opacity="1";const t=e.textContent.split(" ");e.textContent="";var o=1;t.forEach((t=>{const s=document.createElement("span");s.classList.add("palavra"),s.textContent=" ";for(const e of t){const t=document.createElement("span");t.textContent=e,t.classList.add("letraTextoProjeto"),t.style.animationDelay=`${o}s`,s.appendChild(t),o+=.1}e.appendChild(s)}))}),1500)}),1e3),t.unobserve(s))}))}),{root:null,threshold:.3}),o=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[2].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[2].classList.remove("opt-ativada")}))}),e),s=document.getElementById("projetos");t.observe(s),o.observe(s);const a=document.querySelectorAll(".card");function n(e=0,t){let o=0,s=[];for(let n of a){const a=n.querySelectorAll(".tec");let r=0;if(0==e)for(let e of a)e.style.animation=`roll-in-left 1.5s  ${o}s forwards`,s.length<5&&s.push(o),o+=.45;if(1==e){s=[...t];for(let e of a)setTimeout((()=>{a[r].style.animation=`roll-in-left 1.5s  ${s[r]}s forwards`,r++}),8e3)}}0==e&&n(1,s)}let r=!0;document.querySelectorAll(".links a").forEach((e=>{e.addEventListener("click",(()=>{r=!1}))}));let i=!0;a.forEach((e=>{e.addEventListener("click",(()=>{if(r)if(i){let t=e.querySelector(".tecnologias"),o=e.querySelector(".conteudo-site");t.classList.toggle("tecnologias-atv"),o.classList.toggle("conteudo-site-dst"),t.querySelector(".descricao-tec").classList.toggle("descricao-tecatv"),e.querySelectorAll(".tec").forEach((e=>{e.classList.toggle("tec-desativada")})),i=!1}else{let t=e.querySelector(".tecnologias"),o=e.querySelector(".conteudo-site");t.querySelector(".descricao-tec").classList.toggle("descricao-tecatv"),setTimeout((()=>{t.classList.toggle("tecnologias-atv"),o.classList.toggle("conteudo-site-dst")}),400),e.querySelectorAll(".tec").forEach((e=>{e.classList.toggle("tec-desativada")})),i=!0}else r=!0}))})),console.log(e)},831:()=>{const e=new IntersectionObserver((t=>{t.forEach((t=>{t.isIntersecting&&(function(){n.style.opacity="1";let e=n.textContent.split("");n.textContent="",e.forEach(((e,t)=>{let o=document.createElement("span");if(o.textContent=e,o.classList.add("tituloLetra"),o.style.animationDelay=.1*t+"s",n.appendChild(o),"e"==e){let e=document.createElement("span");e.textContent=" ",n.append(e)}}))}(),o.style.animation="CarregamentoSection 2s forwards",function(){r.style.opacity="1";const e=r.textContent.split(" ");r.textContent="";var t=.1;e.forEach((e=>{const o=document.createElement("span");o.classList.add("palavra"),o.textContent=" ";for(const s of e){const e=document.createElement("span");e.textContent=s,e.classList.add("letra"),e.style.animationDelay=`${t}s`,o.appendChild(e),t+=.002}r.appendChild(o)}))}(),setTimeout((()=>{a.style.animation="animaçãoFoto 1s 1s forwards",s.style.animation="animaçãoFoto 1s 2s forwards"}),1500),setTimeout((()=>{i.style.animation="animaçãoatualmente 1s forwards"}),1400),e.unobserve(o))}))}),{root:null,threshold:.4}),t=new IntersectionObserver((e=>{e.forEach((e=>{e.isIntersecting?document.querySelectorAll(".opt-desativada")[0].classList.add("opt-ativada"):document.querySelectorAll(".opt-desativada")[0].classList.remove("opt-ativada")}))}),{root:null,threshold:1}),o=document.getElementById("sobre");e.observe(o),t.observe(o);const s=document.getElementById("foto"),a=document.querySelector(".container-foto-sobre"),n=document.getElementById("sobre-titulo"),r=document.getElementById("sobre-descrição"),i=document.getElementById("atualmente")},127:()=>{const e=document.querySelectorAll(".menu-opt");function t(e){var t=e.getAttribute("href");t=t.replace("#","");let o=document.getElementById(t).offsetTop-100,s=window.scrollY,a=s,n=setInterval((()=>{a<o?((s==o||s>o)&&clearInterval(n),s+=8,window.scroll(a,s)):a>o&&((s==o||s<o)&&clearInterval(n),s-=10,window.scroll(a,s))}),1)}e.forEach((e=>{e.addEventListener("click",(o=>{o.preventDefault(),t(e)}))})),document.getElementById("arrow").addEventListener("click",(()=>{t(e[0])}))},501:()=>{const e=document.getElementById("btn-menu");e.addEventListener("click",(()=>{e.classList.toggle("ativar");const t=document.querySelector(".menu-ul"),o=document.querySelectorAll(".opt");t.classList.toggle("menu-ul-act"),o.forEach((e=>{e.classList.toggle("opt-animacao")}))}))}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";o(127),o(165),o(831),o(313),o(760),o(297),o(290),o(501)})()})();
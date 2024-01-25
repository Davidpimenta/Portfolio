const options = {
    root: null,
    threshold: 0.3,
}

const optionsC = {
    root: null,
    threshold: 0.8,
}

const observerCertificados = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
            observerCertificados.unobserve(sectionCertificados)
        } 
    })
}, options)
const observerCertificadosOpt = new IntersectionObserver((entries) => {
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

const sectionCertificados = document.getElementById('certificados')
observerCertificados.observe(sectionCertificados)
observerCertificadosOpt.observe(sectionCertificados)

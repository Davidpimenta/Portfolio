const options = {
    root: null,
    threshold: 0.3,
}

const optionsC = {
    root: null,
    threshold: 0.8,
}

const observerAfazeres = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
          
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

const sectionAfazeres = document.getElementById('Afazeres')
observerAfazeres.observe(sectionAfazeres)
sectionAfazeresOpt.observe(sectionAfazeres)

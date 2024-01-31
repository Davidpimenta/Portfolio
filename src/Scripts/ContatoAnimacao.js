
const options = {
    root: null,
    threshold: 0.4,
}

const optionsC = {
    root: null,
    threshold: 0.8,
}


//ObserverSkills
const observerContato = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
    
            observerContato.unobserve(sectionContato)
        }
    })
}, options)

const observerContatoOpt = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[4].classList.add('opt-ativada')
        } else {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[4].classList.remove('opt-ativada')
        }
    })
}, optionsC)


const sectionContato = document.getElementById('contato')
observerContato.observe(sectionContato)
observerContatoOpt.observe(sectionContato)
//ObserverSkills
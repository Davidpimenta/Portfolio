const options = {
    root: null,
    threshold: 0.3,
}

const optionsC = {
    root: null,
    threshold: 0.4,
}

const opt = {
    root: null,
    threshold: 0.5,
}

const optT = {
    root: null,
    threshold: 1,
}

const observerAfazeres = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            addTimelineID()
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
            trilhaAnimacao(false)
            
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[3].classList.remove('opt-ativada')
        }
    })
}, optionsC)


//ObserverCertificados

const sectionAfazeres = document.getElementById('afazeres')
observerAfazeres.observe(sectionAfazeres)
sectionAfazeresOpt.observe(sectionAfazeres)

//TrilhaAnimacao


//TrilhaAnimacao

//timeLineAnimacao


//timeLineAnimacao
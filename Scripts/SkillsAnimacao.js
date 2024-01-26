
import * as animacaoSkills from '/Scripts/EntradaAnimacao.js'

const optionsSk = {
    root: null,
    threshold: 0.3,
}
const optionsS = {
    root: null,
    threshold: 0.8,
}

var verificaSobreAnimacao = true

//ObserverSkills
const observerSkills = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {

            observerSkills.unobserve(sectionSkills)
        }
    })
}, optionsSk)
const observerSkillsOpt = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[4].classList.add('opt-ativada')
        } else {
            const optsmarcadores = document.querySelectorAll('.opt-desativada')
            optsmarcadores[4].classList.remove('opt-ativada')
        }
    })
}, optionsS)


const sectionSkills = document.getElementById('skills')
observerSkills.observe(sectionSkills)
observerSkillsOpt.observe(sectionSkills)
//ObserverSkills
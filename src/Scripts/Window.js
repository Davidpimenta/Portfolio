//Animação Scroll
const menuopt = document.querySelectorAll('.menu-opt')
menuopt.forEach((item) => {
    item.addEventListener('click', (event) => {
        event.preventDefault()
        var id = item.getAttribute('href')
        id = id.replace('#', '')
        const section = document.getElementById(id)
        let to = section.offsetTop - 150
        
        let scrollPositionA = window.scrollY;
        let scrollPositionB = scrollPositionA

        let scrollanimado = setInterval(() => {
            
            if(scrollPositionB < to){
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
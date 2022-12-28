const reveal = document.getElementsByClassName('reveal')
const arrayReveal= Array.from(reveal)
const activeIndex = arrayReveal.findIndex((item) => item.classList.contains('reveal'))


function isVisible(event){
    function showEl(element){
        
        const {top, bottom} = element.getBoundingClientRect()
        if (bottom < 0){
            element.classList.remove('reveal_active')
        }
        if (top > window.innerHeight){
            element.classList.remove('reveal_active')
        }
        else {
            element.classList.add('reveal_active')
            }         
    }
    arrayReveal.forEach( function(item){
        showEl(item) 
    })

}
     
    
window.addEventListener('scroll', isVisible)

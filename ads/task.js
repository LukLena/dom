const rotator = document.getElementsByClassName('rotator__case')
const rot = document.getElementsByClassName('rotator') 


    function change(event){
        const rotActive = rot[0].querySelector('.rotator__case_active')   
        rotActive.classList.remove('rotator__case_active')
        if (rotActive.nextElementSibling ){
            rotActive.nextElementSibling.classList.add('rotator__case_active')
           
        }
        else {
             rot[0].firstElementChild.classList.add('rotator__case_active')
        }     
  }

setInterval(change, 1000)



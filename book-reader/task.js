const fontSize = document.getElementsByClassName('font-size')
const book = document.getElementById('book')

for (let i = 0; i < fontSize.length; i++){
   
    function active(event){
       event.preventDefault()
       const activeFont = document.getElementsByClassName('book__control')
        
       activeFont[0].querySelector('.font-size_active').classList.remove('font-size_active')
       fontSize[i].classList.add('font-size_active')
        
        console.log(fontSize[i].dataset.size)
        if (fontSize[i].dataset.size == 'small') {
            book.classList.remove('book_fs-big')
            book.classList.add('book_fs-small')
        }
        else if (fontSize[i].dataset.size == 'big'){
            book.classList.remove('book_fs-small')
            book.classList.add('book_fs-big')   
        }
        else {
             book.classList.remove('book_fs-small', 'book_fs-big')  
        }
     
    }
    
    fontSize[i].addEventListener('click', active)
}
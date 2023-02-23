function nameEffect(element1, element2){
    const textArray = element1.innerHTML.split('')
    element1.innerHTML = ' '
    const textArray2 = element2.innerHTML.split('')
    element2.innerHTML = ' '
    
    textArray.forEach(function(letra, i){
        setTimeout(function(){
            element1.innerHTML += letra
        }, 110 * i)
    })
    setTimeout(function(){
        textArray2.forEach(function(letra, i){
            setTimeout(function(){
                element2.innerHTML += letra
            }, 190 * i)
        })
    }, 2700) 
}
const myName = document.querySelector('.name')
const salutationText = document.querySelector('.salutationText')

nameEffect(salutationText, myName)
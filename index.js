
let docTitle = document.title 

window.addEventListener('blur', () => {
    document.title = 'Volte para página de treinamentos'
})

window.addEventListener('focus', () => {
    document.title = docTitle
})
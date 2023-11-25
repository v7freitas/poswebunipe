// Etapa 0
// pega todos os elementos do header já que vamos clicar neles
// Etapa 1
// Adiciona evento de click em todos os headers e bota o console.log
// Etapa 2
// Pegga o parent node no console.log
// Etapa 3
// Pega todos os '.accordion-item'
// Etapa 4
// verifica se esta ativo para adicionar e remover as classes
// Etapa 5
// para cada item remve e adiciona classe de ativo e fechado

const elementHeader = document.querySelectorAll('.accordion-header');
const accordionItems = document.querySelectorAll('.accordion-item')

    elementHeader.forEach((elementHeader) => {
        elementHeader.addEventListener('click', (event) => {
            const item = elementHeader.parentNode
            console.log(item)
            const isActive = item.classList.contains('accordion-item--active')
            console.log(isActive)
            
            accordionItems.forEach((item) => {
                item.classList.remove('accordion-item--active')
                item.classList.add('accordion-item--closed')
            })

        })
        
        //element.addEventListener('click', (event) =>{

        //console.log(element)
    });

    
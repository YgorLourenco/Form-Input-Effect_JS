const labels = document.querySelectorAll('.form-control label')

// .map -> define a função -> define o array -> define a função que ira pegar os items do array definido -> então o .map cria um novo array com esses items

labels.forEach(function(label) {
    label.innerHTML = label.innerText
// Split transforma um texto em array
    .split('')
// primeiro parametro 'letter' vai ter o valor original e o segundo parametro o 'index' e o array que vai ser processado de fato, assim o .map vai criar um novo array com um delay de transição de 50ms baseado na regra CSS do elemento dinamico em cada posição do array
    .map((letter,index) => 
    `<span style="transition-delay: ${index * 50}ms">${letter}</span>`
    )
// join vai juntar o array novo criado pelo .map
    .join('')
})
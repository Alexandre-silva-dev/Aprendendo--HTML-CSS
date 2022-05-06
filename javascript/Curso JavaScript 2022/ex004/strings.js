const escola = 'saraiva'

console.log(escola.charAt(4))
console.log(escola.charAt(9))
console.log(escola.charCodeAt(4))

//template string

const nome = 'Alexandre'
const concatenacao = 'Olá, ' + nome + '!'
const template = ` 
        Olá 
        ${nome}!`
console.log (concatenacao, template)

console.log(`1 + 1 = ${1+1}`)
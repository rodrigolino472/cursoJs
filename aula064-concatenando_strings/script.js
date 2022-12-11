//concatenando arrays
//usamos concat ou ...spread operator para unir strings

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1 + a2 //dessa forma, transformamos em string e concatenamos
console.log(a3, typeof(a3))

const a4 = a1.concat(a2, [7, 8, 9], 10)
console.log(a4)

//usando o spread operator:
const a5 = [...a1, 'teste', ...a2, ...['teste1', 'teste2', 'teste3']]
console.log(a5, typeof(a5))//todas as informações unidas em um unico arrays
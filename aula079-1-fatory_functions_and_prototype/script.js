const talk = {
    talk(){
        console.log(`${this.name} is talking!`)
    }
}
const eat = {
    eat(){
        console.log(`${this.name} is talking!`)
    }
}
const drink = {
    drink(){
        console.log(`${this.name} is talking!`)
    }
}
const peoplePrototype = Object.assign({}, talk, eat, drink) //Posso usar o spread operator: {...talk, ...eat}
function createPeople(name, lastName){
    return Object.create(
        peoplePrototype, {
        name: {
            value: name
        }, 
        lastName: {
            value: lastName
        }}
    )
}

const people1 = createPeople('Adam', 'Gonçalves')
console.log(people1.talk())
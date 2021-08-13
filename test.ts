function sayHello(person: string){
    return 'Hello' + person
}
console.log(sayHello('Tom'))
function alertName(): void{
    return 
}
let a: null = undefined
let b: undefined = null
let c: number | string | boolean
a = null
a = undefined 
c = 1
c = false
c = '1'
c = undefined
c = null
interface Person{
    name: string,
    age: number,
    sex?: string
    [propName: string]: any
    readonly id: number
}
let p = {
    name: 'tom',
    age: false,
    id: 1
}
p.id = 2
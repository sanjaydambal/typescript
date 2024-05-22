import express from 'express';

const app = express();

app.get('/', (req, res) => { 
    res.send('listening');
})
let counter:string;
counter = "one";
console.log(counter)
let arr: number[] = [2,4,5,6];
console.log(arr)
interface obj {
    id:number;
    name:string;
    test:()=>void;
    test2:()=>void;
}
let obj1:obj = {
    id:1,
    name:"sanjay",
    test : ()=>{console.log("testing")},
    test2 : ()=>{console.log("testing2")}
}
console.log(obj1.name)
interface Animal {
    speak: () => void
  }

  class Dog implements Animal {
    speak() {
      console.log('Woof! I am Dog!')
    }
  }

  class Cat implements Animal {
    speak() {
      console.log('Meoww! I am Cat!')
    }
  }

  class AnimalFactory {
    static createAnimal(type: 'dog' | 'cat'): Animal {
      if (type === 'dog') {
        return new Dog()
      }

      if (type === 'cat') {
        return new Cat()
      } else throw new Error()
    }
  }


function greet(name:string){
return `hello ${name}`
}
console.log(greet("sanjay"))

let description : (string | number) = `Hello am learning the basics of typescript throuh Typescript tutorial and will complete by today 6 pm`;
console.log(description);
const pending : boolean = false
const hasError : boolean = true;
let result = pending && hasError;
console.log(result);
let vacant: {} = {};

console.log(vacant.toString());
let arr2 :(number | string|boolean |null)[] = ["Js","Typescript",5,true,null];
console.log(arr2)
let skill : [string,number] = ["Js",8]
console.log(skill);
let color,color2 : [number,number,number?]; color= [255,0,255];color2 = [255,0,0];
console.log(color2)
enum Month{ 
    Jan,
    Feb,
    Mar,
    Apr,
    May,
    Jun,
    Jul,
    Aug,
    Sep,
    Oct,
    Nov,
    Dec
}
function isItSummer(month:Month){
    let isSummer:boolean;
    switch(month){
        case Month.Mar:case Month.Apr :case Month.May : isSummer = true; break;
        default: isSummer = false; break;
    }
    return isSummer;
}
let res : number;
res = 10.2415;
console.log(res.toFixed())
console.log(color)
type alphaNumeric = number |string;
function add(a: alphaNumeric,b:alphaNumeric){
    if(typeof a === 'number' && typeof  b === 'number'){
        return a+b
    }
    if(typeof a === 'string' && typeof  b === 'string'){
        return a.concat(b)
    }
    else{
        throw new Error("Its should be a number or string")
    }
}
console.log(add("g","o"))
// example on string literal which is best suited for union types
type MouseEvent = 'click' | 'dblclick' | 'mouseup' | 'mousedown';
let mouseEvent: MouseEvent;
mouseEvent = 'click';
let counter1 = 99;
let max = 100;
counter1<max ? counter1++ :counter1 = 1
console.log(counter1)
app.listen(3000, () => {
    console.log('listening on port 3000');
})
interface SortingStretegy {
    sort(arr: number[]): number[]
  }

  class BubbleSort implements SortingStretegy {
    sort(arr: number[]): number[] {
      console.log('Using Bubble Sort!')
      // Implement Here
      return arr
    }
    test(){
        console.log("tested")
    }
  }
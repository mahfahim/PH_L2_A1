// Problem 1:

function filterEvenNumbers(arr: number[]): number[]{
    const new_arr: number[] = [];
    for(let i=0; i<arr.length; i++){
        const value = arr[i];
        if( value !== undefined && value % 2 === 0){
            new_arr.push(value);
        }
    }
    return new_arr;
}

const x:number[] = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(x);






// Problem 2: 

function reverseString(str: string){
    const n: number = str.length - 1;
    let new_str: string = "";
    for(let i=n; i>=0; i--){
        new_str += str[i];
    }
    return new_str;
}


const ans1: string = reverseString("typescript");
console.log(ans1);






// Problem 3: 


function checkType(StringOrNumber: string | number):string{
  if(typeof(StringOrNumber) === "string"){
    return "String";
  }else{
    return "Number";
  }
}

let output1: string = checkType("Hello");
let output2: string = checkType(42);

console.log(output1);
console.log(output2);




// Problem 4:

function getProperty<T, K extends keyof T>(obj:T,key:K):T[K]{
    
    return  obj[key];
    
}

const user = {id: 1, name: "John Doe", age: 21};
const ans2 = getProperty(user, "name");
console.log(ans2);



// Problem 5: 


interface Book {
    title : string;
    author : string;
    publishedYear : number;
}


function toggleReadStatus(book:Book){
    const obj = {
        ...book,
        isRead: true,
    }
    return obj ; 
}


const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
console.log(toggleReadStatus(myBook));



// problem 6:

class Person {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
};

class Student extends Person {
    grade: string;

    constructor(name: string, age: number, grade: string){
        super(name, age);
        this.grade = grade;
    }

    getDetails(): string{
        const detail: string = `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
        return detail;
    }
}


const student = new Student("Alice", 20, "A");
console.log(student.getDetails());




// Problem-7:

function getIntersection(a1: number[], a2: number[]):number[]{
    const new_arr: number[] = [];
    a1.forEach( (x) => {
        if(a2.includes(x)){
            new_arr.push(x);
        }
    });

    return new_arr;
}


let ans3 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(ans3);





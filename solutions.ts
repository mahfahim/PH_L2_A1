// Problem 1:

function filterEvenNumbers(arr: number[]): number[]{
    const new_arr: number[] = [];

    arr.forEach( (x) =>{
        if( x % 2 === 0){
            new_arr.push(x);
        }
    })
    return new_arr;
}






// Problem 2: 

function reverseString(str: string): string{
    const n: number = str.length - 1;
    let new_str: string = "";
    for(let i=n; i>=0; i--){
        new_str += str[i];
    }
    return new_str;
}






// Problem 3: 

type StringOrNumber = string | number;

function checkType(value: StringOrNumber):string{
  if(typeof value === "string"){
    return "String";
  }else{
    return "Number";
  }
}





// Problem 4:

function getProperty<T, K extends keyof T>(obj:T,key:K):T[K]{
    
    return  obj[key];
    
}






// Problem 5: 


interface Book {
    title : string;
    author : string;
    publishedYear : number;
}

type BookWithRead = Book & {isRead: boolean};

function toggleReadStatus(book:Book): BookWithRead{
    const obj = {
        ...book,
        isRead: true,
    }
    return obj ; 
}






// problem 6:

class Person {
    name: string;
    age: number;

    constructor(name: string, age:number){
        this.name = name;
        this.age = age;
    }
}

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







// Problem-7:

function getIntersection(a1: number[], a2: number[]):number[]{
    const new_arr: number[] = [];
    a1.forEach( (x) => {
        const exist_a2: boolean = a2.includes(x);
        const exist_new_arr: boolean = new_arr.includes(x);
        if(exist_a2 && !exist_new_arr){
            new_arr.push(x);
        }
    });

    return new_arr;
}









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

filterEvenNumbers([1, 2, 3, 4, 5, 6]);




// Problem 2: 

function reverseString(str: string): string{
    const n: number = str.length - 1;
    let new_str: string = "";
    for(let i=n; i>=0; i--){
        new_str += str[i];
    }
    return new_str;
}

reverseString("typescript");




// Problem 3: 

type StringOrNumber = string | number;

function checkType(value: StringOrNumber):string{
  if(typeof value === "string"){
    return "String";
  }else{
    return "Number";
  }
}

checkType("hello");
checkType(42);



// Problem 4:

function getProperty<T, K extends keyof T>(obj:T,key:K):T[K]{
    
    return  obj[key];
    
}

const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");




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

const myBook = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };
toggleReadStatus(myBook);




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


const student = new Student("Alice", 20, "A");
student.getDetails();




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


getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7])






// შექმენით ობიექტი სახელად Person,ობიექტს ექნება სახელი,გვარი,ასაკი.

let person = {name: "achi",lastname:"Phutkaradze", age: 19 }
// console.log(person)

// დაამატეთ ობიექტში ფუნქცია სახელად sayHello რომელიც დაპრინტავს ობიექტში სახელის values.

person.sayHello = function (){
    console.log(person.name)
}
// person.sayHello()

// წაშალეთ ასაკის property.

// delete person.age
// console.log(person)

// დაამატეთ ობიექტში job.

person.job ="Programmer"
// console.log(person)


// დაამატეთ ობიექტში ფუნქცია რომელიც დააბრუნებს ობიექტის job-ის სიგრძეს.

person.jobLength = function(){
let result = person.job.length
return result
}

console.log(person.jobLength())

// ამის შემდეგ დაპრინტეთ უბრალოდ ობიექტში არსებული მეთოდების რაოდენობა.
// let arr = Object.keys(person)
// console.log(arr.length)

// გაარკვიეთ ,აქვს თუარა ობიექტს gender property ,თუ არაქვს ,მაშინ შექმენით მეთოდი .

// let hasown = Object.hasOwn(person,"gender")
// console.log(hasown)

// person.gender = "Male"
// console.log(person)

// გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა property.

//  let arr = Object.keys(person) 
// console.log(arr)
// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i])
// }
// გადაუარეთ for ციკლით ობიექტს და დაპრინტეთ ყველა value.

//  let arr = Object.values(person) 
// for(let i = 0; i<arr.length;i++){
//     console.log(arr[i])
// }


// დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

// let arr = [{name:"achi", age:20},{name:"giorgi", age:23}]

// function obj(arr){
// for(let i = 0; i<arr.length;i++){
//     let objects = Object.keys(arr[i])
//     console.log(objects)
// } 
// }

// console.log(obj(arr))
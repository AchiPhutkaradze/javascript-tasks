// დაწერეთ პროგრამა მასივში რიცხვების საშუალოს საპოვნელად.

// let arr = [1,2,3,4,5,6,7]
//     let result = arr.length/2
//     console.log(result)

// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა რიცხვის ჯამი.

// let arr = [1,3,4,56,8]
// let result = 0
//  for(let i = 0;i<arr.length;i++){
//      result = result + arr[i]
//  }
//  console.log(result)

// დაწერეთ პროგრამა რიცხვების მასივის ზრდის მიხედვით დასალაგებლად.

//  let arr = [1,3,4,56,8]
// let result = arr.toSorted((a,b) => a-b)
// console.log(result)

//  დაწერეთ პროგრამა მასივში ყველაზე დიდი ელემენტის მოსაძებნად.

// let arr =[1,34,6576,8789,45444,34]
//     let maxNum = Math.max(...arr)
// console.log(maxNum)

// დაწერეთ პროგრამა მასივის ყველაზე პატარა ელემენტის მოსაძებნად.

// let arr =[1,34,6576,8789,45444,34]
//     let minNum = Math.min(...arr)
// console.log(minNum)

// დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა მასივი კონკრეტულ ელემენტს.

// let arr =[1,34,6576,8789,45444,34,77]

// console.log(arr.includes(77))

// დაწერეთ პროგრამა მასივიდან ელემენტის ამოსაღებად.

//  let arr =[1,34,6576,8789,45444,34,77]

// console.log(arr[6])

// დაწერეთ პროგრამა, რომ იპოვოთ მასივის ყველა ლუწი რიცხვის ჯამი.
// let arr = [2,3,4,5,6,7,8,9,10,12]
// let count = 0
// for(let i =0;i<arr.length;i++){
//     if(arr[i] %2 ===0){
//     count = count + arr[i]
//     }
// }
// console.log(count)

// დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის მოსაძებნად.

// let arr = [23,212,46,5,64,7,81,91,120,132]
// let sorted = arr.sort((a,b) => a-b)
// console.log(sorted[sorted.length -2])

// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა ორი მასივი ტოლი.

// let arr1=[1,2,3,34]
// let arr2=[1,2,4,34,34]
// function arrays (arr1,arr2){

// if(arr1.length === arr2.length){
//     for(let i = 0;i<arr1.length;i++){
//     console.log(arr1[i])
//       if(!arr2.includes(arr1[i])){
//             return "არ არის ორი მასივი ერთმანეთის ტოლი"
//         }
//      }
//             return "ორი მასივი ერთმანეთის ტოლია"
//     }
//     {
//          return "არ არის ორი მასივი ერთმანეთის ტოლი"
//     }
// }
// console.log(arrays(arr1,arr2))

// დაწერეთ პროგრამა რომ ორი სორტირებული მასივის შერთდეს და გახდეს ერთი მასივი რომელიც ასევე სორტირებული იქნება.

// let arr1 = []
// let arr2 = [1,4,5,76,9,90]
// let arr3 = [12,45,23,8,21]

// let sorted2 =arr2.sort((a,b) => a-b)
// let sorted3 = arr3.sort((a,b) => a-b)
// arr1 = [...sorted2,...sorted3]
// let sorted = arr1.sort((a,b) => a-b)
// console.log(sorted)

// დაწერეთ პროგრამა სტრიქონების მასივის ანბანის მიხედვით დასალაგებლად.
// let namesArr = ["achi","daviti","giorgi","mariami","natia","luka"]

// function sortedNames(names){
// let sorted = names.sort()
// return sorted
// }
// console.log(sortedNames(namesArr))

// დაწერეთ პროგრამა მრავალ მასივებს შორის საერთო ელემენტების მოსაძებნად

// let arr1 = [11,12,13,14,15,16,17]
// let arr2  =[21,22,23,24,25,26,17]
// let arr3 = [31,42,43,44,45,46,17]

// function threeArr(arr1,arr2,arr3){
// for(let i =0;i<arr1.length;i++){
//     if(arr3 && arr2.includes(arr1[i])){
//         let number = arr1[i]
//         return `საერთო ელემენტია ${number}`
//     }
// }
// }
// console.log(threeArr(arr1,arr2,arr3))

// შექმენით ობიექტი სახელწოდებით car თვისებებით მარკის, მოდელისა და წლისთვის. დაბეჭდეთ ობიექტი კონსოლზე.

// let car = {Mark:"Audi",Model:"TT", year:2022 }
// console.log(car)



// დაამატეთ მეთოდი car ობიექტს სახელწოდებით start, რომელიც ბეჭდავს "The car is starting!" როდესაც გამოძახება. გამოიძახეთ დაწყების მეთოდი.

// let car = {Mark:"Audi",Model:"TT", year:2022, start: "The car is starting!" }

// console.log(car.start)

// შექმენით სხვა ობიექტი სახელად Person სახელის, ასაკისა და ქალაქის თვისებებით. დაბეჭდეთ სახელის თვისება წერტილის გამოყენებით.

// let person = {name:"achi" , age:19 , city: "Batumi"}

// console.log(person.name)

// დაამატეთ ახალი თვისება სახელწოდებით job, Person ობიექტს და მიანიჭეთ მას მნიშვნელობა. დაბეჭდეთ განახლებული ობიექტი.
// let person = {name:"achi" , age:19 , city: "Batumi"}

// person.job = "programmer"
// console.log(person)



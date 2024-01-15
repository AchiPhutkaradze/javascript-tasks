// დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ  რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.

// function generateRandomNumber(min,max){
// min = min + 1 
// let result =   Math.floor(Math.random() * (max - min) ) + min;
// return result
// }
// console.log(generateRandomNumber(95,100))

// დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// function capitalizeWords(string){
//     let splited = string.split(" ")
//     for(let i = 0;i<splited.length;i++){
//     splited[i]=splited[i][0].toUpperCase()+splited[i].slice(1)
//     }
//     return splited.join(" ")
// }
// console.log(capitalizeWords("hello world"))



// დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.

// let array = [{age:20 ,name:"giorgi", name:"achi"},{name:"giorgi", age:20, age:22 }]

// let array = [{age:20 ,name:"giorgi", name:"achi"},{name:"giorgi", age:20, age:22 }]

// function obj (arr){
//     let arr2 = []
//  for(let i=0;i<arr.length;i++){
//     let values = Object.values(arr[i])
//     arr2 = [...arr2,...values]    
// }
//     toFindDuplicates = arry => arry.filter((item,index) => arry.indexOf(item) === index)
//     let result = toFindDuplicates(arr2)
//     return result
// }
// console.log(obj(array))


// დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.

// let word = "The quick brown fox jumps over the lazy dog.".toLowerCase()
// let alphabet = "abcdefghijklmnopqrstuvwxyz"
// function foo(str){
//   for(let i=0;i<alphabet.length;i++){
//     if(str.indexOf(alphabet[i]) == -1){
//          return false
//     }
// }
//   return true     

//     }
// console.log(foo(word))


// დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შეყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".
// let word = "Hello my my name is achi".toLowerCase().split(" ")
// function foo(str){
// toFindDuplicates = arry => arry.filter((item,index) => arry.indexOf(item) ===  index )
// let result = toFindDuplicates(str)
// result = result.sort()
// for(let i = 0; i<result.length;i++){
// if(result[i] === "a" || result[i] === "is" || result[i] === "the"){
// let index =result.indexOf(result[i])
// let last = result.splice(index,1)
// }
// }
// return result
// }
// console.log(foo(word))


// ------------------------short version -------------------------------------------
// დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
// let array  = [1,2,3,"Hello","world",false,undefined, 0, "",NaN, null,true]
// function foo (arr){
// console.log(arr.filter(Boolean))

// }
// foo(array)
//------------------------------------------------------------------------------------

//-----------------------  -------------------------------------------
// let array  = [1,2,3,"Hello","world",false,undefined, 0, "",NaN, null,false,undefined, 0, "",NaN, null,false,undefined, 0, "",NaN, null,false,undefined, 0, "",NaN, null]
// function foo (arr){
// arr = arr.filter((item) => {
// if(item !== true || item !== false || item !== undefined || item !== 0 || item !== "" || item !== NaN  ){
//           return item
// }
// })
// console.log(arr)
// }
// foo(array)
//--------------------------------------------------------------------------------------------------

// დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.

// let word = "Hello world".split(" ")
// function string(str){
// console.log(str.reverse())
// }
// string(word)



// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
// let palindrome = "madam"
// function pallindromeStr(str){
// let join = str.split("").reverse().join("");
// console.log(join)
//  if(join === str){
//      return `this is palindrome` 
//  }else{
//      return `This is not a palindrome`
// }
// }
// console.log(pallindromeStr(palindrome))


// დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce).

// let numbers = [1,2,3,4,6,4]
// let count = 0
// function calc(arr){
// for(let i=0;i<arr.length;i++) {   
// count = count + arr[i]
// }
// console.log(count)
// }
// calc(numbers)




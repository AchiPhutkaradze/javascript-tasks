// დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა რიცხვი გასაყოფი სხვა რიცხვზე.
// let num1 = 12
// let num2 = 4
// function 
// if(num1 % num2 === 0){
//     console.log("იყოფა")
// }else
// {
//     console.log("არ იყოფა")
// }



// დაწერეთ პროგრამა, რათა შეამოწმოთ სტრიქონი ცარიელია თუ არა.
// let str = "Hello world"
// let trim = str.trim(" ")
//  if (trim.length > 0){
//      console.log("არ არის ცარიელი")
//  }else{
//      console.log("ცარიელია")
//  }

 
// // დაწერეთ პროგრამა, რათა შეამოწმოთ, შეიცავს თუ არა სტრიქონი კონკრეტულ სიტყვას.
// let str = "Hello world,I'm Developer :)"
// if(str.includes("Developer")){
//     console.log("sheicavs")
// }
// else{
//     console.log("ar sheicavs")
// }
// დაწერეთ პროგრამა, რომ იპოვოთ მინიმალური ორი რიცხვიდან.

// let num1 = 4
// let num2 = 2

// if(num1 < num2){
//     console.log(num1)
// }
// else if(num2 < num1){
//     console.log(num2)
// }

// დაწერეთ პროგრამა რომელიც კონსოლში გამოპრინტავს რიცხვებს 0 დან 10 ის ჩათვლით.
// for(let i = 0;i <= 10;i++){
//     console.log(i)
// }


// // დაწერეთ პროგრამა წინადადებაში ყველაზე გრძელი სიტყვის სიგრძის საპოვნელად.
// let str = "Hello, I'm from Georgia"
// let str1 = str.split(" ")
// let maxLength = str[0]
// for(let i=0;i<str1.length;i++){
//     if(str1[i].length > maxLength.length){
//          maxLength = str1[i]
//     }
   
    
// }
//  console.log(maxLength)
// დაწერეთ პროგრამა, რომელიც ბეჭდავს ლუწ რიცხვებს 1-დან 20-მდე for loop-ის გამოყენებით.

// for(let i = 1;i<20;i++){
//     if(i % 2 === 0){
//         console.log(i)}
// }
// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს შეიყვანოს რიცხვი და დაბეჭდოს "Hello!" იმდენჯერ რამდენსაც უდრის ეს შეყვანილი რიცხვი.

// let number = Number(prompt("enter the number "))
// for(let i= 0;i<number;i++){
//     console.log("Hello")
// }


// დაწერეთ პროგრამა, რომელიც გამოთვლის რიცხვების ჯამს 1-დან 100-მდე for loop-ის გამოყენებით და დაბეჭდავს შედეგს.
// let total = 0
// for(let i=1;i<100;i++){
//     total = i + total
// }
// console.log(total)



// დაწერეთ პროგრამა, რომელიც ინფუთის სახით მიიღებს თვის რიცხვს (1 იანვრისთვის, 2 თებერვლისთვის და ა.შ.) და ამობეჭდავს დღეების რაოდენობას ამ თვეში switch/case-ის გამოყენებით.

// switch(Number(prompt("Enter month number: "))){
// case 1:
// console.log(31);
// break;
// case 2:
// console.log(28);
// break;
// case 3:
// console.log(31);
// break;
// case 4:
//     console.log(30)
//     break;
// case 5 :
//     console.log(31)
//     break;
// case 6 :
//     console.log(30)
//     break;
// case 7 :
//     console.log(31)
//     break;
// case 8:
//     console.log(31)
//     break;
// case 9:
//     console.log(30)
//     break;
// case 10:
//     console.log(31)
//     break;
// case 11:
//     console.log(30)
//     break;
// case 12:
//     console.log(31)
//     break;
// }



// დაწერეთ პროგრამა, რომელიც სთხოვს მომხმარებელს გამოიცნოს საიდუმლო რიცხვი 1-დან 10-მდე. განაგრძეთ გამოცნობის მოთხოვნა, სანამ ისინი სწორად გამოიცნობენ, while loop-ის გამოყენებით.
// let secretNum = 7
// let input = Number(prompt("Enter a number from 1 to 10: "))
// while(input !== secretNum){
//   input = Number(prompt("Enter a number from 1 to 10: "))
// }{
// console.log("it is correct")
// }
// }
// დაწერეთ პროგრამა, რომელიც მიიღებს შეფასებას (A, B, C, D ან F) ინფუთის სახით და დაბეჭდავს შესაბამის შეტყობინებას switch/case-ის გამოყენებით. მაგალითად, თუ ინფუთი არის "A", უნდა დაბეჭდოს "შესანიშნავი!"
// switch(prompt("Rate ")){
//     case "A" :
//         console.log("შესანიშნავი")
//         break;
//     case "B" :
//         console.log("კარგი")
//         break;
//     case "C" :
//         console.log("ნორმალური")
//         break;
//     case "D" :
//         console.log("ცუდი")
//         break;
//     case "F" : 
//         console.log("ძალიან ცუდი")
//         break;
// }


// დაწერეთ პროგრამა, რომელიც მოუწოდებს მომხმარებელს შეიყვანოს პაროლი. პროგრამამ უნდა გააგრძელოს პაროლის მოთხოვნა სწორი პაროლის შეყვანამდე. სწორი პაროლის შეყვანის შემდეგ აჩვენეთ წარმატების შეტყობინება. სწორი პაროლი არის "12345".

// let secretPass= 12345
// let inp = Number(prompt("Enter Password: ")) 
// while(secretPass !== inp ){
//      inp = Number(prompt("Enter Password: "))
// }{
//     console.log("It is correct")
// }

// დაწერეთ ფუნქცია სახელად countBs, რომელიც იღებს სტრიქონს თავის ერთადერთ არგუმენტად და აბრუნებს სტრიქონში დიდი "B" სიმბოლოების რაოდენობას.
//  function countBs (string){
//      let count= 0

//      for(let i=0;i<string.length;i++){
// if(string[i].includes("B")){
//     count++
//      }
//  }
//  console.log(count)
//  }
//  countBs("Big Brother")
// დაწერეთ ფუნქცია სახელად sumDigits, რომელიც არგუმენტად იღებს რიცხვს და აბრუნებს მისი ციფრების ჯამს.
// function sumDigits(number){
// let str = number.toString()
// let count = 0
// for(let i = 0;i<str.length;i++){
// count = count + Number(str[i])
// }
// return count
    
// }

// console.log(sumDigits(123456789))





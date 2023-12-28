//დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი ლუწია თუ კენტი.
// function foo(num){
//     if(num % 2 === 0){
//         console.log("ლუწია")
//     }else{
//         console.log("კენტია")
//     }
// }
// foo(5)

//დაწერეთ პროგრამა, რათა შეამოწმოთ რიცხვი დადებითია, უარყოფითი თუ ნული.
//  function foo(num){
//  let b = Math.sign(num);
//  if (b === 0){
//      console.log("ნულია")
//  }else if(b === 1){
//      console.log("დადებითია")
//  }else{
//      console.log("უარყოფითია")
//  }
//  }
// foo(23)

// ----------project 7 ----------------------
// let noun = prompt("Enter a noun: ");
// let verb = prompt("Enter a verb: ")
// let adjective = prompt("Enter a adjective: ")
// let adverb = prompt("Enter a adverb: ")

// let result = "Do you" + " " + verb + " " + "your"+ " " + adjective + " " + noun + " " + adverb + "?" + " " +"That's hilarious!"
// console.log(result)

//-----------project 8 ----------------------------------------
// let score = prompt("Enter the student's score: ")

// if (score >= 90 && score <= 100){
//     console.log(`Student's Score: ${score}`)
//     console.log("Grade: A")
// }else if(score >= 80 && score <= 89){
//      console.log(`Student's Score: ${score}`)
//     console.log("Grade: B")
// }else if(score >= 70 && score <= 79){
//       console.log(`Student's Score: ${score}`)
//     console.log("Grade: C")
// }else if(score >= 60 && score <= 69){
//           console.log(`Student's Score: ${score}`)
//     console.log("Grade: D")
// }else{
//      console.log(`Student's Score: ${score}`)
//     console.log("Grade: F")
// }

// // --------------project 9 ------------------------
// let firstNum = parseInt(prompt(" What is the first number: "))
// let secondNum = parseInt(prompt(" What is the second number: "))

// let plus = firstNum + secondNum
// let minus = firstNum - secondNum
// let x = firstNum * secondNum
// let div = firstNum / secondNum

// console.log(firstNum + " " + "+" + " " +  secondNum + " " + "=" + " " + plus)
// console.log(firstNum + " " + "-" + " " +  secondNum + " " + "=" + " " + minus)
// console.log(firstNum + " " + "*" + " " +  secondNum + " " + "=" + " " + x)
// console.log(firstNum + " " + "/" + " " +  secondNum + " " + "=" + " " + div)

// -------------project 10 -------------------------
// let m = Number(prompt("M: "))

// let result = (300000000  * m) * 2
// console.log(`E: ${result}`)

// ---------------------project 11 ----------------------
// let num =parseInt(prompt("How much was the meal? $"))
// let perc = parseInt(prompt("What percentage would you like to tip ? " ))

// let result = num * perc / 100
// console.log( "Leave: " + "$" + result.toFixed(2))

// let num =parseInt(prompt("How much was the meal? $"))
// let perc = parseInt(prompt("What percentage would you like to tip ? " ))

// let result =( num * perc / 100).toFixed(2)
// let str = result.toString();
// let myStr = str.slice(str.length - 1)
// if(str.length - 2 === 0){
//     console.log(myStr)
// }else{
//     console.log( "Leave: " + "$" + result)
// }
// console.log(str)

// --------project12--------------------
// let age1 =parseInt(prompt("What is your current age? "))
// let age2 =parseInt(prompt("At what age would you like to retire? "))
// let result = age2 - age1
// let data = new Date()
// let currentYear = data.getFullYear()
// let retirementYear = currentYear + result
// console.log(`You have ${result} years left until you can retire.`)
// console.log(` It's ${currentYear}, so you can retire in ${retirementYear}.`)

//-------------project 13 -----------------------
// let length =parseInt(prompt(" What is the length of the room in feet? "))
// let width =parseInt(prompt("What is the width of the room in feet? "))
// console.log(`You entered dimensions of ${length} feet by ${width} feet.`)
// console.log("The area is")
// let f2 = length * width;
// console.log(`${f2} square feet`)
// let m2 = f2 * 0.09290304
// console.log(`${m2}  square meters`)

//----------project 14 ------------------------

// let people = prompt("How many people? ")
// let pizza = prompt("How many pizzas do you have? ")
// console.log(` ${people} people with ${pizza} pizzas`)
// let piece = (pizza *  8) / people
// let result = piece-piece%1
// let leftover = (piece%1 * people).toFixed()
// function foo(){
//     if(piece%2 === 0){
//       console.log(  `Each person gets ${piece} pieces of pizza.`)
//       console.log(`There are 0 leftover pieces.`)
//     }else {
//         console.log(`Each person gets ${result} pieces of pizza.`)
//         console.log(`There are ${leftover} leftover pieces.`)
//     }

// }
// foo()

// ----------------project 14---------------------

// let people = prompt("How many people? ")
// let pizza = prompt("How many pizzas do you have? ")
// console.log(` ${people} people with ${pizza} pizzas`)
// let piece = (pizza *  8) / people
// let result = piece-piece%1
// let leftover = (piece%1 * people).toFixed()
// let corr = piece > 1 ? "pieces" : "piece"
// let corr2 = leftover > 1 ? "pieces" : "piece"
// function foo(){
//         console.log(`Each person gets ${result} ${corr} of pizza.`)
//         console.log(`There are ${leftover} leftover ${corr2}.`)
// }
// foo()

// ----------------- project 15 ---------------------------
// let length = prompt("What is the length of the room in feet? ")
// let width = prompt("What is the width of the room in feet? ")
// let sq = length * width
// let gallons = sq / 350
// console.log(`You will need to purchase ${Math.ceil(gallons)} gallons of paint to cover ${sq} square feet.`)

// --------------- project 16 ------------------------
// let item1 = prompt("Enter the price of item 1: ")
// let quantity1 =prompt("Enter the quantity of item 1: ")
// let item2 = prompt("Enter the price of item 2: ")
// let quantity2 = prompt("Enter the quantity of item 2: ")
// let item3 = prompt("Enter the price of item 3: ")
// let quantity3 = prompt("Enter the quantity of item 3: ")
// let subtotal = item1 * quantity1 + item2 * quantity2 + item3 * quantity3
// let tax = (subtotal * 5.5)/100
// let total = subtotal + tax
// console.log(`Subtotal: $${subtotal}`)
// console.log(`Tax: $${tax.toFixed(2)}`)
// console.log(`Total: $${total.toFixed(2)}`)

// -------------------project 17 -------------------------------
// let euro = prompt("How many euros are you exchanging? ")
// let rate = prompt("What is the exchange rate? ")
// let dollar =(euro * rate) / 110.5609
// console.log(` ${euro} euros at an exchange rate of ${rate} is ${dollar.toFixed(2)} U.S. dollars.`)
// -----------------project 18 ----------------------------------
// let principal = Number(prompt("Enter the principal: "))
// let rate = prompt("Enter the rate of interest: ")
// let year = prompt("Enter the number of years: ")
// let percent = (principal * rate / 100) * year
// let result = principal + percent
// console.log(`After ${year} years at ${rate}%, the investment will be worth $${result.toFixed()}.`)

// --------------------project 19 ---------------------------
// let principal = Number(prompt("What is the principal amount?  "))
// let rate = Number(prompt("What is the rate? "))
// let year = prompt("What is the number of years? ")
// let time = prompt("What is the number of times the interest is compounded per year? ")
// let perc = rate/100
// let a = principal * Math.pow(1 + perc / time,time * year)
// console.log(` $${principal} invested at ${rate}% for ${year} years compounded ${time} times per year is $${a.toFixed(2)}.`)


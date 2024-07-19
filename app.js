// Question No. 1
// function printHello() {
//     console.log ('Hello User')
// }
// printHello()

// Question No. 2
// var p = document.querySelector ('#p')
// function date_time(){
//     p.innerHTML = Date();
// }

// Question No.3
// function greetUser (firstname , lastname) {
//     alert ('Welcome Mr. / Mrs.'+" "+firstname+" "+lastname+" "+"to our webpage")
// }
// greetUser ('Muhammad', 'Talal')

// Question No. 4
// function addNumbers () {
//     var num1 = +prompt('Enter first number')
//     var num2 = +prompt('Enter second number')
//     return num1+ num2
// }

// Question No. 5
// function calculator (num1,num2,operator) {
//     if (operator === "+") {
//         return num1+num2
//     } else if(operator === "-") {
//         return num1 - num2
//     } else if (operator === "*"){
//         return num1*num2
//     }else if (operator === "/") {
//         return num1/num2
//     }else {
//         return 'Enter operator'
//     }
// }

// Question No. 6
// function square(number) {
//     return number*number
// }

// Question No. 7
// var num;
// var product;
// function factorial (number) {
//     if (number > 1 && product == undefined) {
//         num = number - 1
//         product = number * num
//         number = num 
//         factorial (number)
//     }else if (number > 1){
//         num = number - 1
//         product = product * num
//         number = num 
//         factorial (number)
//     }else {
//         console.log ('The factorial of the number is', product)
//     }
//     return product
// }
// factorial(5)

// Question No. 8
// var startNumber;
// var endNumber;
// function countBtwNumbers() {
//     if (startNumber == undefined && endNumber == undefined){
//         startNumber = +prompt ('Enter starting number')
//         endNumber = +prompt ('Enter ending number')
//         countBtwNumbers()
//     }else if ((startNumber >= 0 || startNumber <=0) && startNumber<endNumber){
//         console.log (startNumber)
//         startNumber += 1
//         countBtwNumbers()
//     }else {
//         console.log (endNumber)
//     }
// }
// countBtwNumber()

// Question No. 9
// function calculateHypotenuse (){
//     // Variable Declaration
//     var base = +prompt ('Enter length of base')
//     var perpendicular = +prompt ('Enter length of perpendicular')
    
//     // Inner Function
//     function calculateSquare (number){
//         return number**2
//     }

//     // Hypotenuse
//     var hypotenuse = Math.sqrt(calculateSquare(base)+calculateSquare(perpendicular))
    
//     return hypotenuse
// }

// var k = calculateHypotenuse()
// console.log (k)

// Question No. 10
// NOT DONE

// Question No. 11
// NOT DONE

// Question No. 12
// function AreaOfRectangle (width,height){
//     return width*height
// }
// var k = AreaOfRectangle(10,5)
// console.log (k)

// Question No. 13
// NOT DONE

// Question No. 14
// NOT DONE

// Question No. 15
// var param = function inner() { 
//        return typeof inner; 
// }
// alert(param()); 

// Question No. 16
// function PowerOfNumber(number,power){
//     return number**power
// }
// var k = PowerOfNumber(2,4)
// console.log (k)

// Question No. 17
// var randomNumber;
// function dice (){
//     randomNumber = Math.floor(Math.random()*10)
//     if (randomNumber>=1 && randomNumber <= 6) {
//         return randomNumber
//     }else {
//         return dice()
//     }
// }
// var k = dice()
// console.log(k)

// Question No. 18
// function reverseNumber(x) {
//     var reverseString = x.toString().split('').reverse().join('')
//     return reverseString
// }
// var k = reverseNumber(22550560)
// console.log (k)

// Question No. 19
// function checkPalindrome(string) {
//     if (typeof(string) === 'number') {
//         console.log ('You have entered a number, type string please')
//     } else if (typeof(string) === 'string'){
//         reverseString = string.split('').reverse().join('')
//         if (reverseString === string){
//             console.log ('Its a Palindrome')
//         }else {
//             console.log ('Its not a Palindrome')
//         }
//     } else if (typeof(string) === 'boolean'){
//         console.log ('Boolean entered, enter string please')
//     }else {
//         console.log ('Enter argument please')
//     }
// }

// checkPalindrome ('madam')

// Please do uncomment the driver's code of each function to check the output. 

// Assignment 1
function checkNumber(num){
    if (num == 0){
        return "Zero";
    }
    else if (!isNaN(num)){
        if (num > 0){
            return "Positive Number";
        }
        else{
            return "Negative Number";
        }
    }
    else{
        return "Input not a number";
    }
}
// let userInput = prompt("Enter a number")
// console.log(checkNumber(parseInt(userInput)))

// Assignment 2
function Factorial(num){
    if (num<=0){
        return 'Please enter a positive number'
    }
    else{
        let ans = 1
        for (let i = num; i>1; i--)
        {
            ans = ans * i  
        }
    return ("Factorial = " + ans)
    }
}

// let val = prompt("Enter a value to calculate its factorial")
// parseInt(val)
// console.log(Factorial(parseInt(val)))



// Assignment 3
function greaterNum(num1,num2){
    if (!isNaN(num1) && !isNaN(num2)){
        if (num1 > num2){
            return (num1+" is greater")
        }
        else if (num1 < num2){
            return (num2 + " is greater")
        }
        else{
            return "Both are equal"
        }
    }
    else{
        return "Enter a valid number"
    }
}
// let a = prompt("enter num 1 to check greater or less")
// let b = prompt("enter num 2 to check greater or less")
// console.log(greaterNum(parseInt(a),parseInt(b)))



// Assignment 4
function isPalindrome(str) {    
    const new_str = str.replace(/[^a-zA-Z0-9]/g, '')
    let ans = ''
    for (let i = new_str.length - 1; i >= 0; i--) {
      ans += new_str[i]
    }
    
    if (ans === new_str) {
      return ('It is a Palindrome')
    } else {
      return ('It is not a palindrome')
    }
  }
//  const str1 = prompt("Enter a string to check palindrome or not")
//  console.log(isPalindrome(str1));



// Assignment 5
function primeNumbers(number){
    console.log(2)
    if (!isNaN(number)){
        for (let i=3; i<=number; i++){
            let check = 0

            for (let j=2; j<=Math.sqrt(i); j++){
                if (i % j == 0){
                    check = 1
                    break
                }  
            }

            if (check === 0){
                console.log(i)
            }
        }
    }
    else{
        return ('Invalid input')
    }
}
// let number="Enter a number to check prime"
// console.log(primeNumbers(parseInt(number)))



// Assignment 6
function calculator(num1,num2,operator){
    if (!isNaN(num1) && !isNaN(num2) && isNaN(operator))
    {
        if (num2 == 0 && operator == '/'){
            return 'Cannot divide by zero'
        }
        else if (operator == '+'){
            return (num1 + num2)
        }
        else if (operator == '-'){
            return (num1 - num2)
        }
        else if (operator == '*'){
            return (num1 * num2)
        }
        else if (operator == '/'){
            return (num1 / num2)
        }
        else{
            return 'Invalid input'
        }
    }
    else{
        return 'Invalid input'
    }
}
// let x = prompt("enter number 1")
// let op = prompt("enter a operator (+,-,*,/)")
// let y = prompt("enter number 2")
// console.log(calculator(parseInt(x),parseInt(y),op))



// Assignment 7
function countVowel(string){
    string = string.toLowerCase()
    let count = 0
    if (isNaN(string)){
    for (i=0; i<=string.length; i++){
        if (string[i]=='a' || string[i]=='e' || string[i]=='i' || string[i]=='o'|| string[i]=='u'){ 
            count = count + 1
        }
    }
    return ("Total vowels = " + count)
    }
    else{
        return ('Invalid input')
    }
}

// let string = prompt('Enter a string to check number of vowels')
// console.log(countVowel(string))



// Assignment 8
function checkPerfectNumber(n){
    count=0
    if (!isNaN(n) && n>0){
        for (let i=1; i<=n/2; i++){
            if (n % i == 0){
                count = count + i
            }
        }
        if(count == n){
            return (n +' is a perfect number!')
        }
        else{
            return (n +' is not a perfect number')
        }
        }
        else{
            return 'Invalid input'
        }
}
// let value = prompt("Enter a number to check number is perfect or not")
// console.log(checkPerfectNumber(parseInt(value)))



// Assignment 9 
function fiboNumbers(range){
    if (!isNaN(range) && range>0){
    let num1=0
    let num2=1
    console.log(num1)
    console.log(num2)
    for (i=1; i<=range-2; i++){
        let num3 = num1 + num2
        console.log(num3)
        num1 = num2
        num2 = num3
    }
    }
    else{
        return 'Invalid Input'
    }
}
// let range = prompt('Enter a number to print fibonacci numbers')
// console.log(fiboNumbers(parseInt(range)))



// Assignment 10
function multiplication(num){
    for (i=1; i<=10; i++){
        console.log(num + ' x ' + i +" = " + num*i)
    }
}
// let int = prompt("Enter a number to get its multiples")
// console.log(multiplication(int))
// write a function that takes the input string and reverses it
// example
// argument: Hello
// return: olleH

function reverseThisString(string){
    return string.split('').reverse().join('');
}
console.log(reverseThisString('Hello'));




// write a function that takes the input string and switches all uppercase characters to lowercase and lowercase charcaters to uppercase
// example:
// argument: Hello World
// return: hELLO wORLD
function swapCase(string) {
    var swap = "";
    for(var i=0; i<string.length; i++){
        if(string[i] === string[i].toLowerCase()){
            swap += string[i].toUpperCase();
        }
        else{
            swap += string[i].toLowerCase();
        }
    }
    return swap;
}
console.log(swapCase('Hello World'));




//convert array of numbers from farenheit to celcius
// example:
// argument: [23, 32, 41, 50, 59]
// return: [-5, 0, 5, 10, 15]
// hint: use Array.map
function toCelcius(array){
    var result = [];
    for(var i=0; i<array.length;i++){
        array[i] = ((array[i] - 32) / 1.8);
        result.push(array[i]);
    }
    return result.toString();
}
console.log(toCelcius([23, 32, 41, 50, 59]));




//write a function that takes an input array and returns an array of booleans (>=75) or fail (<75)
// example:
// argument: [20, 30, 50, 80, 90, 100]
// return: [false, false, false, true, true, true]
// hint: use Array.map
var numbers = [20, 30, 50, 80, 90, 100];
function passOrFail(array){
    var result = [];
    for(var i = 0; i < array.length; i++){
        if(array[i] >= 75){
            result.push(true);
        }
        else{
            result.push(false);
        }
    }
    return result.toString();
}  
console.log(passOrFail([20, 30, 50, 80, 90, 100]));




//write code that loops through the two variables returns an array ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// example:
// return: ['2 is zwei', '3 is drei', '4 is vier', '5 is fünf', '6 is sechs']
// hint: use Array.forEach, Array.map or a for loop
function germanNumbers(){
    const cardinalNumbers = [2,3,4,5,6];
    const germanNumbers = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];

    cardinalNumbers.forEach(element => console.log(element + " is " + germanNumbers[element-2]));
}
germanNumbers();




// write code that returns an array of ONLY prime numbers that are in the array numbers
// example: 
// return [2, 3, 5, 7, 11, 13]
// hint use: Array.filter

function isPrime(num) {
    for(var i = 2; i < num; i++)
      if(num % i === 0) return false;
    return num > 1;
}  

function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const filtered = numbers.filter(n => isPrime(n) == true)
    console.log(filtered);
}

returnPrimeNumbers();





//Write a function that loops through and console.log's the numbers from 1 to 100, except multiples of three, log (without quotes) "CSC225 RULES" instead of the number, for the multiples of five, log (without quotes) "I LOVE JAVASCRIPT". For numbers which are multiples of both three and five, log (without quotes) "CSC225 RULES I LOVE JAVASCRIPT" Console log out:
function oneHundred(){
    for(var i = 1; i <= 100; i++){
        if(i%3==0 && i%5==0){
            console.log("CSC225 RULES I LOVE JAVASCRIPT");
        }
        else if(i%3==0){
            console.log("CSC225 RULES");
        }
        else if(i%5==0){
            console.log("I LOVE JAVASCRIPT");
        }
        else{
            console.log(i);
        }
    }
}
oneHundred();

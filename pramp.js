//Create a function that takes in two numbers. If the second number is divisible by the first, alert the product of those two numbers. If not, alert the sum of those two numbers.
//numbers are going to be integers
//return value will be an integer

//function
//take two numbers
/// boolean if modulus === 0 alert product
/// if not alert sum

// only dividing the second by the first, all other cases are not mentioned
// divide by 0

let numComparison = (firstNumber, secondNumber) => {
    if (firstNumber === 0){
        return secondNumber;
    }
    compBool = secondNumber % firstNumber === 0;
    switch (compBool){
        case true:
            return firstNumber*secondNumber;
        case false:
            return firstNumber+secondNumber;
    };
}

console.log(numComparison(25, 5));
function getArraySum(numbers){
    let sum = 0;
    for(let i = 0; i < numbers.length; i++){
        element = numbers[i];
        sum = sum + element;
    }
    return sum;
}

let numbers = [85, 65, 70, 92, 95, 75];
let output = getArraySum(numbers)
console.log(output);
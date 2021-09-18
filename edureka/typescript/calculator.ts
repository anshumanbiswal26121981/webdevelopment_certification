function calculator (num1: number, num2 : number, operator?: string): number { // question mark on operator means it is optional
    let result : number;

    switch(operator) {
        case "-": {
            result = num2 - num1;
        }
        break;
        case "/": {
            result = num2 / num1;
        }
        break;
        case "*": {
            result = num1 * num2;
        }
        break;
        default: {
            result = add(num1,num2);
        }
        break;

    }
    return result;
}

function add (number1: number, number2: number) {
    return number1 + number2;
}
console.log(calculator(2,4 ,"+"));
console.log(calculator(1,3 )); // this works because the operator parameter is optional made by putting question mark
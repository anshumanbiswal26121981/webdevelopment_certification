function calculator(num1, num2, operator) {
    var result;
    switch (operator) {
        case "-":
            {
                result = num2 - num1;
            }
            break;
        case "/":
            {
                result = num2 / num1;
            }
            break;
        case "*":
            {
                result = num1 * num2;
            }
            break;
        default:
            {
                result = num1 + num2;
            }
            break;
    }
    return result;
}
console.log(calculator(1, 3, "+"));

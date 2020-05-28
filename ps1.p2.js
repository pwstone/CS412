function findOperator(input) {
    const stringArray = input.split('');
    const left = Number(stringArray[0]);
    const operator = stringArray[1];
    const right = Number(stringArray[2]);
    switch(operator) {
        case '+':
            return left + right;
        case '-':
            return left - right;
        case '*':
            return left * right;
        case '/':
            return left / right;
        case '%':
            return left % right;
    }
}

console.log(`5 * 7 = ${findOperator('5*7')}`)
console.log(`9 % 3 = ${findOperator('9%3')}`)
console.log(`2 + 8 = ${findOperator('2+8')}`)



const findOperator = input => {
    if(typeof(input) != typeof('')) {
        return () => console.log('Invalid Input');
    }
    const operatorCheck = ['+', '-', '*', '%', '/'];
    const stringArray = input.split('');
    const left = parseInt(stringArray[0]);
    const operator = stringArray[1];
    const right = parseInt(stringArray[2]);
    if(operatorCheck.indexOf(operator) < 0) {
        return () => console.log('Invalid Input');
    }
    switch(operator) {
        case '+':
            return () => left + right;
        case '-':
            return () => left - right;
        case '*':
            return () => left * right;
        case '/':
            return () => left / right;
        case '%':
            return () => left % right;
    }
}

module.exports = findOperator;

console.log(`5 * 7 = ${findOperator('5*7')()}`);
console.log(`9 % 3 = ${findOperator('9%3')()}`);
console.log(`2 + 8 = ${findOperator('2+8')()}`);
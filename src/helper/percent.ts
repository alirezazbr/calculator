import Sum from './sum';
import Minus from './minus';
import Divide from './divide';
import Multiply from './multiply';

const Percent = (num1: number, num2: number, operator: string): number => {
    if (operator === 'sum') {
        return Sum(num1, (num1 * (num2 /100)));
    }

    if (operator === 'minus') {
        return Minus(num1, (num1 * (num2 /100)));
    }

    if (operator === 'multiply') {
        return Multiply(num1, (num1 * (num2 /100)));
    }

    if (operator === 'divide') {
        return Divide(num1, (num1 * (num2 /100)));
    }

    return 0;
};

export default Percent;

function* fibonaci() {
    let [val1, val2, result] = [0, 1, 0];
    yield val1;
    yield val2;
    while (true) {
        result = val1 + val2;
        [val1, val2] = [val2, result];
        yield result
    }
}

function* evenFibonaci() {
    let sequence = fibonaci();
    let iterator = sequence.next().value
    while (true) {
        if(iterator % 2 === 0) {
            yield iterator;
        }
        iterator = sequence.next().value
    }
}

const evenFib = evenFibonaci();
let count = 6;
while (count-- > 0) {
    console.log(`Even fib: ${evenFib.next().value}`);
}


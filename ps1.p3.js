function problemThree(input, createOutput) {
    return createOutput(input);
}

console.log(problemThree('supercalifragilisticexpialidocious', (input) => {
    return input.split(/(?=c)/g)
}));

console.log(problemThree('supercalifragilisticexpialidocious', (input) => {
    stringObject = {
        originalString: input,
        modifiedString: input.replace(/a/g, 'A'),
        numberReplaced: input.split('a').length - 1,
        length: input.length
    }
    return stringObject
}));
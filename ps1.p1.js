const inOrder = input => {
    let cleanString = input.replace(/[0-9]/g, '');
    cleanString = cleanString.replace(/[^\w\s]|_/g, "")
        .replace(/\s+/g, " ");
    const stringArray = cleanString.split('');
    return stringArray.sort().join('');
}

console.log(`supercalifragilisticexpialidocious in alphabetical order is:${inOrder('supercalifragilisticexpialidocious')}`)

console.log(`xzazret!lp.?673 in alphabetical order is: ${inOrder('xzazret!lp.?673')}`)

console.log(`1234567890?.,!zyxwvutsrqponmlkjihgfedcba in alphabetical order is:${inOrder('1234567890?.,!zyxwvutsrqponmlkjihgfedcba')}`)



function* wordPrint(str) {
    const stringArray = str.split(' ');
    for(let i = 0; i < stringArray.length; i++) {
        yield stringArray[i];
    }
}

let word = wordPrint('All I know is something like a bird within her sang');
for(i = word.next().value; i != undefined; i = word.next().value) {
    console.log(i);
}

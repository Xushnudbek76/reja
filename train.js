// Task B

const numbers = (string) => {
    let countOfNumbers = 0;
    for(let i = 0; i < string.length; i++) {
     if(!isNaN(string[i])) {
        countOfNumbers++;
     };
    }
    return countOfNumbers;
}
console.log('raqamlar soni:', numbers('sanisoa7c8dscsd89csdc'));

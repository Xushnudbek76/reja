// C-TASK

const sameWords = (first, second) => {
    if(first.length !== second.length) return false;
    let a = first.split("").sort().join("")
    let b = second.split("").sort().join("");
    return a === b;
}
console.log(sameWords('salom', 'lomas'));
// F-Task
const same = (str) => {
 const newStr = new Set();
 
 for (let e of str) {
    if ( newStr.has(e)) {
        return true
    }
 newStr.add(e);
 }
 return false
};

console.log(same('Salomm'));
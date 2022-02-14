// Unlimited parameters to a function using arguments



function addNumbers(num1, num2) {

    let number = 0;
    for (const num of arguments) {
        number = number + num;
    }
    return number;
}
const result = addNumbers(111, 23, 433, 5, 56, 787, 88);
console.log(result);


// Unlimited parameters to a function using arguments


function addString(str1, str2) {

    let string = '';
    for (const str of arguments) {

        string = string + str + ' ';
    }
    return string;
    const nmaam = num1 + num2;
    return nmaam;

}
const summary = addString('mr', 'jhon', 'doe', 'son', 'of', 'mark', 'doe');
// console.log(summary);
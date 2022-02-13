const products = [
    ' iPhone 11 pro 80gb',
    ' iPhone 12 pro 128gb',
    'vivo v10 plus 128gb',
    'oppo f11 80gb',
    'bule color case ',
    'lenevo Laptop',
    'hp core i5 laptop',
    'max green Power Supply',
    'Yuga Power Supply',
    'G110 Power Supply',
    ' Andoriad Phone ',
    ' balck color watch ',
    'sumsang pro tab'

]

const searching = 'laptop';
const searching2 = 'phone';

// index of 
const output = [];
const output2 = [];

for (const product of products) {
    if (product.toLowerCase().indexOf(searching.toLowerCase()) != -1) {
        output.push(product);
    }

}
for (const item of products) {
    if (item.toUpperCase().indexOf(searching2.toUpperCase()) != -1) {
        output2.push(item);
    }
}
console.log(output);
console.log(output2);
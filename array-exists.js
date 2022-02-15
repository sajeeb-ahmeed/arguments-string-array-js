const friends = ['jhon', 'david', 'doe', 'mark', 'jonathan', 'hakim'];
let mega = friends[0]

function megaFriend(friends) {
    if (Array.isArray(friends) == false) {
        return ' please provide an Array'
    }


    for (const friend of friends) {
        if (friend.length > mega.length) {
            mega = friend;
        }
    }
    return mega;
}
const sub = megaFriend(friends);
// console.log(sub);


if (friends.indexOf('done') != -1) {
    console.log('doe exits');
} else {
    // console.log('done does not  exits');
}

if (friends.includes('doe')) {
    // console.log('doe  exits');
}


// const shorted = friends.sort();
// const reverse = friends.reverse();
// const slice = friends.slice(1, 3);
// const splice = friends.splice(1, 3);

// console.log(reverse);




//number sort fun 

const numbers = [12, 54, 32, 67, 87, 11, 1, 4, 99, 55, 34, 2, 8, 3, 45, 89, 111];
const sortedNumber = numbers.sort(function (a, b) {
    return a - b
})
// console.log(sortedNumber);


// array 

const products = ['A Smarter Way to Learn JavaScript', 'JavaScript: The Definitive Guide', 'Head First JavaScript Programming: A Brain-Friendly Guide', 'Eloquent JavaScript, 3rd Edition', 'The Principles of Object-Oriented JavaScript', 'JavaScript: The Good Parts', 'JavaScript and JQuery: Interactive Front-End Web Development', 'Secrets of the JavaScript Ninja', 'Learn JavaScript VISUALLY with Interactive Exercises', ' Professional JavaScript for Web Developers'];
// console.log(javaScriptsBookList);
let search = 'programming';
let searching = 'learn';
let output = [];
let outputs = [];
for (const product of products) {
    if (product.toLowerCase().indexOf(search.toLowerCase()) != -1) {
        output.push(product);
    }

}
console.log(output);

for (const pro of products) {
    if (pro.toLowerCase().includes(searching.toLowerCase())) {
        outputs.push(pro)
    }
}
console.log(outputs);
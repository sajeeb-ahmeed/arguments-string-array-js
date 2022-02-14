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
console.log(sub);


if (friends.indexOf('done') != -1) {
    console.log('doe exits');
} else {
    console.log('done does not  exits');
}

if (friends.includes('doe')) {
    console.log('doe  exits');
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
console.log(sortedNumber);
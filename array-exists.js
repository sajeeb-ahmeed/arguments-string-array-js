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
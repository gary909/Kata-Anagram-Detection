// write the function isAnagram
var isAnagram = function (test, original) {
    let first = test
    first = first.toLowerCase().split('').sort().join('');
    let second = original;
    second = second.toLowerCase().split('').sort().join('');
    if (first == second) {
        return true;
    } else {
        return false;
    }
};

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true

console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false
console.log(isAnagram("apple", "pale")); // false
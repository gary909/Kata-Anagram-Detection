// write the function isAnagram
var isAnagram = function (test, original) {

    if (test.length == original.length) {
        for (var i = 0; i < test.length; i++) {
            if (test.includes(original[i])) {
                return true;
            }
        }
        // return true;
    } else {
        return false;
    }
    // if (test.includes('t')) {
    //     return true;
    // }
};

console.log(isAnagram("foefet", "toffee")); // true
console.log(isAnagram("Buckethead", "DeathCubeK")); // true
console.log(isAnagram("Twoo", "WooT")); // true

console.log(isAnagram("dumble", "bumble")); // false
console.log(isAnagram("ound", "round")); // false
console.log(isAnagram("apple", "pale")); // false
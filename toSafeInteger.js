function baseClamp (number, lower, upper) {
    return (number <= lower) ? lower : (number >= upper) ? upper : number;
}

function toSafeInteger (data) {
        var MAX_INT =  Number.MAX_SAFE_INTEGER; // 9007199254740991
        var safeNum = baseClamp(Number(data), -MAX_INT, MAX_INT);
        var remainder = safeNum % 1;
        var convertedInt = (remainder ? safeNum - remainder : safeNum);
        return convertedInt || 0
    }

console.log(toSafeInteger(3.2));
console.log(toSafeInteger(Number.MIN_VALUE));
console.log(toSafeInteger(Number.MAX_VALUE));
console.log(toSafeInteger(Infinity));
console.log(toSafeInteger('3.2'));
console.log(toSafeInteger('321'));
console.log(toSafeInteger('sdadw'));
console.log(toSafeInteger(NaN));
console.log(toSafeInteger(0.001));
console.log(toSafeInteger(0.00111111111111111));
console.log(toSafeInteger(1.99999999999999));
console.log(toSafeInteger(0.000000000000000000000000000009));

console.log(baseClamp(8, 2, 4));

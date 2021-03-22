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

toSafeInteger(3.2); //3
toSafeInteger(Number.MIN_VALUE);
toSafeInteger(Number.MAX_VALUE);
toSafeInteger(Infinity);
toSafeInteger('3.2');
toSafeInteger('321');
toSafeInteger('sdadw');
toSafeInteger(NaN);
toSafeInteger(0.001);
toSafeInteger(0.00111111111111111);
toSafeInteger(1.99999999999999);
toSafeInteger(0.000000000000000000000000000009);

baseClamp(-4, 0 ,100);
// => 0
baseClamp(8, 2, 4);
// => 4

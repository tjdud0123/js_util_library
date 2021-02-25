function camelCase(str) {
    let simplexWords = toSimplexWords(str);
    let joinedWord = joinWithCapital(simplexWords);
    return firstToLower(joinedWord);
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
}

function toSimplexWords(str) { // 단일어 단위로 쪼개진 어레이로 변환
    let onlyAlnum = toAlnum(str);
    let spacedWords = numberWithBlank(capitalWithBlank(onlyAlnum));
    return spacedWords.split(' ').filter(word => word !== '');
}

function toAlnum (str){
    return  str.replace(/[^A-Za-z0-9]/g, ' ');
}

function capitalWithBlank (str){ // 단어 안 capital 문자 추출용
    return  str.replace(/([A-Z][a-z]+)/g, " $1 ");
}

function numberWithBlank (str){ // 단어 안 숫자 추출용
    return  str.replace(/([0-9]+)/g, " $1 ");
}

function joinWithCapital(strArr) { // capital로 join
    return strArr.reduce((acc, word) => acc + capitalize(word), '');
}

function firstToLower(str) {
    return str.charAt(0).toLowerCase() + str.slice(1);
}


console.log(camelCase('__FOO_0BAR__')) // foo0Bar
console.log(camelCase('--foo-bar0--')) // fooBar0
console.log(camelCase('-foo-bar-')) // fooBar
console.log(camelCase('Foo Bar')) // fooBar
console.log(camelCase("EquipmentClass name")); // equipmentClassName
console.log(camelCase("Equipment className")); // equipmentClassName
console.log(camelCase("equipment class name")); // equipmentClassName
console.log(camelCase("Equipment Class Name")); // equipmentClassName

//------------------------------------------------------------------------------------

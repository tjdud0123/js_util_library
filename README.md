# js_util_library

순수 자바스크립트로 util 함수 라이브러리 구현
### camelCase

```js
console.log(camelCase('__FOO_0BAR__')) // foo0Bar
console.log(camelCase('--foo-bar0--')) // fooBar0
console.log(camelCase('-foo-bar-')) // fooBar
console.log(camelCase('Foo Bar')) // fooBar
console.log(camelCase("EquipmentClass name")); // equipmentClassName
console.log(camelCase("Equipment className")); // equipmentClassName
console.log(camelCase("equipment class name")); // equipmentClassName
console.log(camelCase("Equipment Class Name")); // equipmentClassName
```

### kebabCase

```js
camelCase("equipment class name")
// => 'equipment-class-name'
camelCase('-foo-bar-')
// => 'foo-bar'
camelCase('__FOO_0BAR__');
// => 'foo-0-bar'
camelCase('EquipmentClass name')
// => 'equipment-class-name'
```

### toSafeInteger
```js
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
```

### cloneDeep
deep 복사

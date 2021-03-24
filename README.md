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
console.log(camelCase("equipment class name"));
// => 'equipment-class-name'
console.log(camelCase('-foo-bar-'));
// => 'foo-bar'
console.log(camelCase('__FOO_0BAR__'));
// => 'foo-0-bar'
console.log(camelCase('EquipmentClass name'));
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

```js
console.log('//------array Test--------//')
var Arr = [{ 'a': 1 }, { 'b': 2 }, [1, 2, {'c': 100, 'd': 123}]];
//var copyedArr = Arr;
var copyedArr = deepCopy(Arr)
console.log('//--------------//')
console.log(Arr[2][2])
console.log(copyedArr[2][2])

Arr[2][2].c = 150;
console.log('changed--------------')
console.log(Arr[2][2])
console.log(copyedArr[2][2])

console.log('Data', Arr);
console.log('copyedData', copyedArr);
console.log('isSame?', copyedArr === Arr);
console.log('//--------------//')

console.log('//------object Test--------//')

var object = { 'a': 1, 'b': 2, 'c': {'d': 3, 'e': [1, 2, 3] } };
//var copyedArr = Arr;
var copyedObject = deepCopy(object)
console.log('//--------------//')
console.log(object.c.e)
console.log(copyedObject.c.e)

object.c.e[0] = 150;
console.log('changed--------------')
console.log(object.c.e)
console.log(copyedObject.c.e)

console.log('Data', object);
console.log('copyedData', copyedObject);
console.log('isSame?', object === copyedObject);
console.log('//--------------//')
```

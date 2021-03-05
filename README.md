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
### toSafeInteger
### cloneDeep


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


function deepCopy(data) {
    if (!data || typeof(data) !== "object") {
      return data;
    }
    
    if (Array.isArray(data)){ // 배열일 때
        return data.map(function(el){return deepCopy(el);});
    }
    
    let copy = {}; // 객체일 때
    for(let key in data) {
      copy[key] = deepCopy(data[key]);
    }
  return copy;
}

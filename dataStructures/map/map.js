// Map

const newMap = new Map();

newMap.set(1, null);

console.log(newMap.get(1)); // null

newMap.set(1, '1');

console.log(newMap.get(1)); // "1"

console.log(newMap.has(1)); // true

newMap.delete(1);

console.log(newMap.has(1)); // false

const arr = ['a', 'b'];

newMap.set([1, 2], '1').set(arr, '2').set('key', '3').set({ a: 'hello' }, '4'); // Every map.set call returns the map itself, so we can “chain” the calls

console.log(newMap.has([1, 2])); // false
console.log(newMap.has(arr)); // true

console.log(newMap.size); // 4

for (let key of newMap.keys()) {
  console.log(key); // returns an iterable for keys
}

for (let value of newMap.values()) {
  console.log(value); // returns an iterable for values
}

for (let entrie of newMap.entries()) {
  console.log(entrie); // returns an iterable for entries [key, value]
}

newMap.clear(); // removes everything from the map

console.log(newMap.size); // 0

const obj = {
  js: '0.300000000003',
  python: '0.3',
};

// Object.entries returns the array of key/value pairs: [ ["name","John"], ["age", 30] ]. That’s what Map needs.
const mapFromObject = new Map(Object.entries(obj));

// We can use Object.fromEntries to get a plain object from Map
// BUT all keys will be converted to strings
const objectFromMap = Object.fromEntries(newMap); // or the same: Object.fromEntries(newMap.entries())

// WeekMap

// текущие активные пользователи
let activeUsers = [{ name: 'Вася' }, { name: 'Петя' }, { name: 'Маша' }];

// вспомогательная информация о них,
// которая напрямую не входит в объект юзера,
// и потому хранится отдельно
let weakMap = new WeakMap();

weakMap.set(activeUsers[0], 1);
weakMap.set(activeUsers[1], 2);
weakMap.set(activeUsers[2], 3);
// weakMap.set('Katya', 4); //Будет ошибка TypeError: "Katya" is not a non-null object

console.log(weakMap.get(activeUsers[0])); // 1

activeUsers.splice(0, 1); // Вася более не активный пользователь

// weakMap теперь содержит только 2 элемента

activeUsers.splice(0, 1); // Петя более не активный пользователь

// weakMap теперь содержит только 1 элемент

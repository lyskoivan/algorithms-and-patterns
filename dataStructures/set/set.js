// Set

let guestsSet = new Set();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

// считаем гостей, некоторые приходят несколько раз
guestsSet.add(john);
guestsSet.add(pete);
guestsSet.add(mary);
guestsSet.add(john);
guestsSet.add(mary);

// guestsSet хранит только 3 уникальных значения
console.log(guestsSet.size); // 3

for (let user of guestsSet) {
  console.log(user.name); // John (потом Pete и Mary)
}

// Перебор

for (let value of set) console.log(value);

// то же самое с forEach:
set.forEach((value, valueAgain, set) => {
  console.log(valueAgain);
  console.log(value);
});

// WeakSet

// WeakSet для учёта тех, кто посещал наш сайт

let visitedSet = new WeakSet();

let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

visitedSet.add(john); // John заходил к нам
visitedSet.add(pete); // потом Pete
visitedSet.add(john); // John снова

// visitedSet сейчас содержит двух пользователей

// проверим, заходил ли John?
console.log(visitedSet.has(john)); // true

// проверим, заходила ли Mary?
console.log(visitedSet.has(mary)); // false

john = null;

// структура данных visitedSet будет очищена автоматически

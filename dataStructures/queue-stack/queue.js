let queue = []; // []
queue.push('first'); // queue === ["first"]
queue.push(10, 20); // queue === ["first", 10, 20]
let el = queue.shift(); // queue === [10, 20] && el === "first"
queue.push(2); // queue === [10, 20, 2]
el = queue.shift(); // queue === [20, 2] && el === 10
el = queue.shift(); // queue === [2] && el === 20
el = queue.shift(); // queue === [] && el === 2
el = queue.shift(); // queue === [] && typeof el === "undefined"

// or with unshift and pop
//  точно так же, только последний элемент окажется в начале, а первый в конце

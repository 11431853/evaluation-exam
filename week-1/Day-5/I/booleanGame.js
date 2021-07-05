// Game of Booleans

// part-1 (Result: false)
console.log(true || false || false && false);
console.log(true || true || false && true);
console.log('Not Possible');

// part-2 (Result: true)
console.log(true || true && false || true);
console.log(true || true && false || false);

// part-3 (Result: false)
console.log(false || true || false || false && true);
console.log(false || true || true || true && true);
console.log('Not Possible');

// part-4 (Result: true)
console.log(false && true || true || true && false);
console.log(false && true || true || false && false);

// part-5 (Result: false)
console.log(false || false || false && true || false);



'use strict';

/*
 * Create a `add` function that takes 2 number arguments and add them
 *
 * @notions Primitive and Operators, Functions
 */

// Your code:

// faire une fonction qui s'appel add
// dans cette fonction faire une fonction qui prends 2 arguments et les ajoutes
//


/*function add(a, b) {
    return a + b;    
};*/

const add = (a,b) => a+b;


//* Begin of tests
const assert = require('assert');
const rand = Math.random();

assert.strictEqual(typeof add, 'function');
assert.strictEqual(add.length, 2);
assert.strictEqual(add(2, 2), 4);
assert.strictEqual(add(rand, rand), rand + rand);
// End of tests */

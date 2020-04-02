'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:

/* const yell = yell => yell.toUpperCase(); */

function yell (up) {
    return up.toUpperCase()
}

//* Begin of tests
const assert = require('assert');


assert.strictEqual(typeof yell, 'function', 'string'.toUpperCase());
assert.strictEqual(yell.length, 1);
assert.strictEqual(yell('yolo'), 'YOLO');
// End of tests */

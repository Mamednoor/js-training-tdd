'use strict';

/*
 * Create a `whisper` function that takes a string
 * and return the same string in lower case
 * and wrapped by `*`
 *
 */

// Your code:

function whisper (low) {
    return whisper (low.toLowerCase())
}


//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof whisper, 'function', 'string'.toLowerCase());
assert.strictEqual(whisper.length, 1);
assert.strictEqual(whisper('YOLO'), 'yolo');

assert.fail('You must write your own tests');
// End of tests */

'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:

const JadenCase = (str) => {
    const firstLetter = str.charAt(0).toUpperCase()
    return firstLetter
}
return JadenCase

//* Begin of tests
const assert = require('assert');

// assert.fail('You must write your own tests');
assert.strictEqual(JadenCase('How are you ?'), 'How Are You');
assert.strictEqual(JadenCase('str'), 'Str');
assert.strictEqual(JadenCase('qsdqsdqsd'), 'Qsdqsdqsd');
// End of tests */

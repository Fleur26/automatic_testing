import {strict as assert} from  "node:assert";
import capitalize from "../src/capitalize.js";

assert.strictEqual(capitalize(''), '');

assert.StrictEqual(capitalize('hello'),'Hello');

console.log('All tests done!');
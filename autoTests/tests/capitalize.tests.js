import capitalize from "../src/capitalize.js";

if (capitalize('') !== ''){
    throw new Error ('Text can\'t be empty');
}

if (capitalize('hello') !== 'Hello'){
    throw new Error ('Function work not right'); 
}

console.log('All tests done!');
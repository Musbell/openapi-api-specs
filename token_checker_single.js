const {encode, decode} = require('gpt-3-encoder')

const path = require('path');
const fs = require('fs');
const encoded = encode(process.argv[2]);
console.log('Tokens: ', encoded.length );
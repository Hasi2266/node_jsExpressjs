const names = require('./4_names');
// const sayHi = require('./5_utitls');
const functions = require('./5_utitls');
const data = require('./6_alternative-flavor');

functions.sayHi(names)
functions.displayName()

console.log(data) //{ items: [ 'item1', 'item2' ], singlePerson: { name: 'bob' } }

require('./7_mine_genarde') // Total is : 7 + 10

const _ = require('lodash');

const items = [1,[2, [3,[4]]]];
const newItem = _.flattenDeep(items);
console.log(newItem)
import itemFactory from "./item";

const myItem = itemFactory(
  'Learn Shortcuts',
  'James website',
  '01/06/2021',
  'Coding',
  '!!'
);
const myItem2 = itemFactory(
  'Study React',
  'Do TOP projects',
  '07/06/2021',
  'Coding',
  '!!!'
);
const myItem3 = itemFactory(
  'Do interview questions',
  'Leetcode',
  '10/06/2021',
  'Coding',
  '!'
);
const myItem4 = itemFactory(
  'Do groceries shopping',
  'at Woolies',
  '02/06/2021',
  'Life',
  '!'
);

const examples = [myItem, myItem2, myItem3, myItem4];

export default examples

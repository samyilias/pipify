# pipify

> Function calls in a readable manner

## Install

```
$ npm install pipify
```

## Usage

```js
import pipe from 'pipify';

const subString = (s) => s.substr(0, 5);
const splitStringToArray = (s) => s.split("");
const reverseArrayOfStrings = (arr) => arr.reverse();
const join =(s)=> s.join("");

const pipeline = pipe([
    subString,
    splitStringToArray,
    reverseArrayOfStrings,
    join
    ]);

pipeline('hello world')
//=> "olleh"
---


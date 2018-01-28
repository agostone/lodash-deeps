# lodash-deeps
> Lodash 'deep' mixin pairs for functions that has none.

## Compatibility
lodash-deeps is currently compatible with:
- Node.js (>=8.9.*)
- ES6 compatible browsers

Might work with lower node versions, haven't tested.

Browser wise, ONLY tested with chrome.

## Installation
### Bower?
No bower package yet, but the npm package has a browser version in dist directory.

1. `copy dist/lodash-deeps.min.js to your frontend js directory or use a bundler`
2. Reference `lodash-deeps.min.js` after `lodash.min.js`

### Node.js
1. `npm install lodash`
2. `npm install lodash-deeps`
3. 
    ``` javascript

    const _ = require("lodash");
    _.mixin(require("lodash-deeps"));
    ```

## Docs
The following mixins are included in lodash-deeps:
- [_.compactDeep](#_compactdeeparray)
- [_.filterDeep](#_filterdeepcollection-predicate)
- [_.joinDeep](#_joindeeparray-separator)
- [_.mapKeysDeep](#_mapkeysdeepobject-iteratee)
- [_.mapValuesDeep](#_mapvaluesdeepobject-iteratee)

### _.compactDeep(array)
This method is like [_.compact](https://lodash.com/docs/#compact) except that it recursively compacts nested arrays too.

### _.filterDeep(collection, predicate = this.identity)
This method is like [_.filter](https://lodash.com/docs/#filter) except that it recursively filters nested collections too.

```javascript
const collection = [
    {
        'color': 'blue',
        'sub': {
            'name': 'sub',
            'color': 'red'
        }
    },
    {
        'name': 'main',
        'color': 'red'
    }
];
_.filterDeep(collection, value => value.color === 'red');
/**
* ->
* [{
*   'name': 'main',
*   'color': 'red'
* }, {
*   'name': 'sub',
*   'color': 'red'
* }]
*/
}
```

### _.joinDeep(array, separator = ',')
This method is like [_.join](https://lodash.com/docs/#join) except that it recursively compacts nested arrays too.

```javascript
const array = ['one', ['two', 'three'], 'four'];
_.joinDeep(array, '-');
/**
* ->
* 'one-two-three-four'
*/
```

### _.mapKeysDeep(object, iteratee = this.identity)
This method is like [_.mapKeys](https://lodash.com/docs/#mapKeys) except that it recursively maps keys.

### _.mapValuesDeep(object, iteratee = this.identity)
This method is like [_.mapValues](https://lodash.com/docs/#mapValues) except that it recursively maps values.

## Requests
I plan to add more deep functions when/if they are needed.
Feel free to request or feel free to contribute. =)

## Contributing
Please use git-flow. ([git-flow cheat sheet](https://danielkummer.github.io/git-flow-cheatsheet/))

## Credits
- README.md
- gulpfile.js
- karma.config.js

files are based on [lodash-deep](https://github.com/marklagendijk/lodash-deep).

## License
MIT

## TODO
- More browsers test?
- Travis?
- Sauce labs?

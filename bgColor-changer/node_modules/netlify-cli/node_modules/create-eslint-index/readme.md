# create-eslint-index [![Build Status](https://travis-ci.org/jfmengels/create-eslint-index.svg?branch=master)](https://travis-ci.org/jfmengels/create-eslint-index) [![Coverage Status](https://coveralls.io/repos/github/jfmengels/create-eslint-index/badge.svg?branch=master)](https://coveralls.io/github/jfmengels/create-eslint-index?branch=master)

> Simplify the creation an index file for your ESLint plugin


## Install

```
$ npm install --save create-eslint-index req-all
```

With ESLint 3, a new rule format has been introduced. This new format makes it easier to attach metadata to each rule, which can then be used to generate recommended configurations and/or rule lists in the README automatically.

The new rule format looks like the following:

```js
'use strict';

const create = (context) => {
  // ...
};

module.exports = {
  create,
  meta: {
    docs: {
      recommended: 'error',
      description: 'Description'
    }
  }
};
```

## Usage

### Creating a recommended configuration automatically

```js
const createIndex = require('create-eslint-index');
const reqAll = require('req-all');

const rules = reqAll('rules', {camelize: false}); // Loads all rules from the `rules` folder and puts them in an object.

const recommendedRules = createIndex.createConfig({
  plugin: '<name>', // Your plugin name, without the `eslint-plugin-` prefix
  field: 'meta.docs.recommended'
}, rules);

module.exports = {
  rules,
  configs: {
    recommended: {
      rules: recommendedRules
    }
  }
};
```

### Creating a script that injects a summary of the rules in the README

```
$ npm install --save-dev inject-in-tag
```

`package.json`:
```json
{
  "scripts": {
    "update-md": "inject-in-tag ./rule-description.js README.md"
  }
}
```

`README.md`:
```md
### Rules

<!-- RULES:START these comments are invisible to the reader -->
<!-- RULES:END -->
```

`rule-description.js`:
```js
const reqAll = require('req-all');
const createIndex = require('create-eslint-index');
const index = require('./');

const rules = reqAll('rules', {camelize: false});

const settings = {
  descriptionField: 'meta.docs.description',
  docPath: 'docs/rules'
};

module.exports = {
  RULES: `\n${createIndex.createRulesDescription(settings, rules)}\n`
};
```

Result in the README:
```md
### Rules

<!-- RULES:START these comments are invisible to the reader -->
- [rule-1](docs/rules/rule-1.md) - This is rule 1
- [rule-2](docs/rules/rule-2.md) - This is rule 2
<!-- RULES:END -->
```

## API

### createIndex.createConfig(settings, rules)

Creates a recommended setting object

#### settings (`object`)
- settings.plugin (`string`): Name of your plugin, without the "eslint-plugin-" prefix. If your plugin name is "eslint-plugin-foo", this should then evaluate to "foo".
- settings.path (`string`): Path to get to the recommended value of a rule.


#### rules (`object`)

Object containing each rule, where the key is the name of the rule and the value is the exported content of the file rule.

#### Example

See the example above for a more practical illustration.

```js
const rules = [
  'rule-1': {
    create() {},
    meta: {
      docs: {
        recommended: 'error',
        description: 'This is rule 1'
      }
    }
  },
  'rule-2': {
    create() {},
    meta: {
      docs: {
        recommended: ['error', 'option'],
        description: 'This is rule 2'
      }
    }
  },
];

createIndex.createConfig({
  plugin: 'foo',
  path: 'meta.docs.recommended'
}, rules);
/* =>
{
  'foo/rule-1': 'error',
  'foo/rule-2': ['error', 'option']
}
*/
```

### createIndex.createRulesDescription(settings, rules)

Creates a list of rules and their description, as one big string.

#### settings (`object`)
- settings.docPath (`string`): Relative path to the documentation folder containing Markdown files matching your rules.
- settings.descriptionField (`string`): Path to get to the description value of a rule.

#### rules (`object`)

Object containing each rule, where the key is the name of the rule and the value is the exported content of the file rule.

#### Example

Let's assume `rules` is declared as in the previous example.

```js
const rules = reqAll('rules', {camelize: false});

const settings = {
  descriptionField: 'meta.docs.description',
  docPath: 'docs/rules'
};

console.log(createIndex.createRulesDescription(settings, rules));
/* =>
- [rule-1](docs/rules/rule-1.md) - This is rule 1
- [rule-2](docs/rules/rule-2.md) - This is rule 2
*/
```


## License

MIT © [Jeroen Engels](https://github.com/jfmengels)

'use strict';

const assert = require('assert');
const get = require('lodash.get');

const checkField = (settings, field) => {
  assert(settings[field], `Expected \`settings.${field}\` to exist`);
};

const createConfig = (settings, rules) => {
  checkField(settings, 'plugin');
  checkField(settings, 'field');

  return Object.keys(rules)
    .reduce((res, ruleName) => {
      const key = `${settings.plugin}/${ruleName}`;
      const value = get(rules[ruleName], settings.field);
      res[key] = value;
      return res;
    }, {});
};

const createRulesDescription = (settings, rules) => {
  checkField(settings, 'docPath');
  checkField(settings, 'descriptionField');

  return Object.keys(rules)
    .map(ruleName => {
      const description = get(rules[ruleName], settings.descriptionField);
      return `- [${ruleName}](${settings.docPath}/${ruleName}.md) - ${description}`;
    })
    .join('\n');
};

module.exports = {
  createConfig,
  createRulesDescription
};

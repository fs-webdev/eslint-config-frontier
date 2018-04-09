# eslint-config-frontier

A common ESLint configuration for frontier apps to base off of. The rules were gathered and polled from
many of the frontend teams, and a concensus was made for this base configuration. If your team would
like to overwrite the rules as you see fit you are free to, but please use your best judgement.

## Usage

1.  Run `npm install fs-webdev/eslint-config-frontier --save-dev` from your Terminal.
2.  Add `"extends": ["frontier"]` to your eslint config.

* Since you likely will not need to make a TON of changes to the eslint config, we recommend
  just putting a "eslintConfig" section in your package.json file. The minimum to start using
  this eslint config would look like the following.

```json
...
"eslintConfig": {
  "extends": ["frontier"]
},
...
```

## Additional Frontier Configs

We have provided some additional shareable configs that we believe can be useful. To use these additional configs, 
you just need to add the name of the config to your "extends" array.

```json
...
"eslintConfig": {
  "extends": ["frontier", "frontier/security"]
},
...
```

### frontier/security  

This is a thin wrapper around [ eslint-config-security ](https://github.com/nodesecurity/eslint-plugin-security).
It has checking for potentially unsafe regexes, deprecated usage of Buffer, and other common security pitfalls. We turned 2
of the rules off.

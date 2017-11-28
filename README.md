# eslint-config-frontier
A common ESLint configuration for frontier apps to base off of.

## Usage

1. Run `npm install fs-webdev/eslint-config-frontier --save-dev` from your Terminal.
2. Add `"extends": "frontier"` to your eslint config. 
- Since you likely will not need to make a TON of changes to the eslint config, we recommend
just putting a "eslintConfig" section in your package.json file. The minimum to start using
this eslint config would look like the following.
```json
...
"eslintConfig": {
  "extends": ["frontier"]
},
...
```

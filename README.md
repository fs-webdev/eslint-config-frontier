# ATTENTION
CodeClimate does not currently work with this shared eslint config. They specifically have to whitelist a config for it to
work on codeclimate. [https://docs.codeclimate.com/docs/eslint#section-supported-plugins](https://docs.codeclimate.com/docs/eslint#section-supported-plugins)
I (Joey) am currently working on a solution where codeclimate will use the prepare step to fetch the config, but that doesn't
work with private repos. [https://docs.codeclimate.com/v1.0/docs/configuring-the-prepare-step](https://docs.codeclimate.com/v1.0/docs/configuring-the-prepare-step) 
So I am ALSO currently trying to get this repo to be allowed to be public, which needs to go through the
correct channels. It is on my radar, and I am currently working on this.
# eslint-config-frontier

- A common ESLint configuration for frontier apps to base off of. The rules were gathered and polled from
many of the frontend teams, and a concensus was made for this base configuration. If your team would
like to overwrite the rules as you see fit you are free to, but please use your best judgement.
- This config basically covers only eslint rules, but we also set some parserOptions: `{ ecmaVersion: 8 }, env: { es6: true }` by default.
- You will still probably need to specify additional parserOptions in your eslintrc, like envs of node:true or browser:true, etc.


## Usage

-  Run `npm install fs-webdev/eslint-config-frontier --save-dev` from your Terminal.
-  Add `"extends": ["./node_modules/eslint-config-frontier/index.js"]` to your eslint config.
    - **IMPORTANT**: If you want codeclimate to use this config, you need to extend the full path to the index.js file. Codeclimate doesn't 
  work with plugins/configs in the native eslint way, unless they are explicitly whitelisted here [https://docs.codeclimate.com/docs/eslint#section-supported-plugins](https://docs.codeclimate.com/docs/eslint#section-supported-plugins)


* Since you likely will not need to make a TON of changes to the eslint config, we recommend
  just putting a "eslintConfig" section in your package.json file. The minimum to start using
  this eslint config would look like the following.

```json
...
"eslintConfig": {
  "extends": ["./node_modules/eslint-config-frontier/index.js"]
},
...
```

## Additional Frontier Configs

We have provided some additional shareable configs that we believe can be useful. To use these additional configs, 
you just need to add the name of the config to your "extends" array.

```json
...
"eslintConfig": {
  "extends": [
    "./node_modules/eslint-config-frontier/index.js", 
    "./node_modules/eslint-config-frontier/security.js"
  ]
},
...
```

### frontier/security  

This is a thin wrapper around [ eslint-config-security ](https://github.com/nodesecurity/eslint-plugin-security).
It has checking for potentially unsafe regexes, deprecated usage of Buffer, and other common security pitfalls. We turned 2
of the rules off.

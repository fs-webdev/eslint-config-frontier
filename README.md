# eslint-config-frontier

### If you are looking for our eslint-config for react, that is located at [eslint-config-frontier-react](https://github.com/fs-webdev/eslint-config-frontier-react)

- A common ESLint configuration for frontier apps to base off of. The rules were gathered and polled from
  many of the frontend teams, and a concensus was made for this base configuration. If your team would
  like to overwrite the rules as you see fit you are free to, but please use your best judgement.
- This config basically covers only eslint rules, but we also set some parserOptions: `{ ecmaVersion: 8 }, env: { es6: true }` by default.
- You will still probably need to specify additional parserOptions in your eslintrc, like envs of node:true or browser:true, etc.

## Local Usage

1.  Run `npm install fs-webdev/eslint-config-frontier --save-dev`
2.  Add `"extends": ["frontier"]` to your eslint config.

## Opt in Rules

We have a way for you to opt in to additional rules. Right now the only plugin we have this way is the jsdoc plugin.
We have set the rules, all you need to do if you want to opt in is add "jsdoc" to the plugins section of your eslint config

```
"plugins": ["jsdoc"]
```

## CodeClimate Usage

It is important to note that in order for CodeClimate to use this custom config, we have to work around their limitations a bit.

1.  Add a prepare section to your .codeclimate.yml that will download this eslint-config file. [Prepare Docs](https://docs.codeclimate.com/docs/configuring-the-prepare-step)
    - It should look like this
      ```yaml
      prepare:
        fetch:
          - url: 'https://raw.githubusercontent.com/fs-webdev/eslint-config-frontier/master/index.js'
            path: 'eslint-config-frontier.js'
      ```
2.  Make a new eslintrc file for codeclimate to use (that way it can point to the `eslint-config-frontier.js` file that codeclimate will prepare in Step 1.)

    1.  Copy your existing local eslintrc file and rename the copy to `.codeclimate.eslintrc.js` (or .json or .yml if you are using those filetypes)
    2.  Change the `"extends": ["frontier"]` statement to point to the prepared file from Step 1. `"extends": ["./eslint-config-frontier.js"]`
        (only do this in `.codeclimate.eslintrc.js` file, not your normal eslintrc)

3.  Tweak your .codeclimate.yml eslint section to point to the .codeclimate.eslintrc file instead of your default local eslintrc file
    - Your plugin section in your .codeclimate.yml may be larger and more complicated, but the `config:` part should point to the new eslintrc file you made in step 2.
    ```yaml
    plugins:
      eslint:
        channel: eslint-4
        config: # <- This line and the line below it are the important lines to add/tweak
          config: .codeclimate.eslintrc.js # <- this line and the line above it are the important lines to add/tweak
          extensions:
            - .js
            - .html
        enabled: true
    ```

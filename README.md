# ATTENTION
In order for codeclimate usage to work, this repo needs to be made public. I (Joey) am working with Gabe and Dan to get this repo
whitelisted to be made public. You can use the repo locally just fine.

# eslint-config-frontier

- A common ESLint configuration for frontier apps to base off of. The rules were gathered and polled from
many of the frontend teams, and a concensus was made for this base configuration. If your team would
like to overwrite the rules as you see fit you are free to, but please use your best judgement.
- This config basically covers only eslint rules, but we also set some parserOptions: `{ ecmaVersion: 8 }, env: { es6: true }` by default.
- You will still probably need to specify additional parserOptions in your eslintrc, like envs of node:true or browser:true, etc.

## Local Usage

1.  Run `npm install fs-webdev/eslint-config-frontier --save-dev`
2.  Add `"extends": ["frontier"]` to your eslint config.

## CodeClimate Usage
It is important to note that in order for CodeClimate to use this custom config, we have to work around their limitations a bit.

1. Add a prepare section to your .codeclimate.yml that will download this eslint-config file. [Prepare Docs](https://docs.codeclimate.com/docs/configuring-the-prepare-step)
    - It should look like this 
        ```yaml
        prepare:
          fetch:
            - url: "https://raw.githubusercontent.com/fs-webdev/eslint-config-frontier/master/index.js"
              path: "eslint-config-frontier.js"
        ``` 
2. Make a new eslintrc file for codeclimate to use (that way it can point to the `eslint-config-frontier.js` file that codeclimate will prepare in Step 1.)
    a. Copy your existing local eslintrc file and rename the copy to .codeclimate.eslintrc.js (or .json or .yml if you are using those filetypes)
    b. change the `"extends": ["frontier"]` statement to point to the prepared file. `"extends": ["eslint-config-frontier.js"]`

3. Tweak your .codeclimate.yml eslint section to point to the .codeclimate.eslintrc file instead of your default local eslintrc file
    - Your plugin section in your .codeclimate.yml may be larger and more complicated, but the config: part should point to the new eslintrc file you made in step 2.
```yaml
plugins:
  eslint:
    channel: eslint-4
    config: # <- This line, and the line below it are the important lines
      config: .codeclimate.eslintrc.js # <- this line is important
      extensions:
        - .js
        - .html
    enabled: true
```

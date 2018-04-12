# ATTENTION
In order for codeclimate usage to work, this repo needs to be made public. I (Joey) am working with Gabe and Dan to get this repo
whitelisted to be made public. You can use the repo locally just fine.

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

## Local Usage

1.  Run `npm install fs-webdev/eslint-config-frontier --save-dev`
2.  Add `"extends": ["frontier"]` to your eslint config.

## CodeClimate Usage
It is important to note that in order for CodeClimate to use this custom config, we have to work around their limitations a bit.

1. Add a prepare section to your codeclimate that will download this eslint-config file. [Prepare Docs](https://docs.codeclimate.com/docs/configuring-the-prepare-step)
    - It should look like this 
        ```yaml
        prepare:
          fetch:
            - url: "https://raw.githubusercontent.com/fs-webdev/eslint-config-frontier/master/index.js"
              path: "eslint-config-frontier.js"
        ``` 
2. Make a new eslintrc file for codeclimate to use (that way it can point to the `eslint-config-frontier.js` file that was prepared)
Copy your existing local eslintrc file and rename the copy to .codeclimate.eslintrc.js (or .json or .yml if you are using those filetypes)

3. Tweak your .codeclimate.yml eslint section to point to a special eslint file instead of your default local eslintrc file
    - Yours may be larger, but the config: part should point to the new eslintrc file you made in step 2.
```yaml
plugins:
  eslint:
    channel: eslint-4
    config:
      config: .codeclimate.eslintrc.js
      extensions:
        - .js
        - .html
    enabled: true
```

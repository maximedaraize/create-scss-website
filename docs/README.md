---
head:
  - - meta
    - name: viewport
      content: width=device-width, initial-scale=1.0
  - - meta
    - name: robots
      content: index, follow
  - - link
    - rel: icon
      href: /favicon.png
contributors: false
---
<style>
:root {
  scroll-behavior: smooth;
  --c-text-accent: #0466c8;
}

.back-to-top {
--back-to-top-color: #0466c8 !important;
  --back-to-top-color-hover: #0466c8 !important; 
}
</style>

# Guide

## Introduction

⚡️ A command-line interface for a quick and easy way to organize your scss.

Generate an scss folder structure anywhere you want in your application. Choose what kind of preset you want to use (default, blank, custom). Manage your file the same way in every project, and save time doing it.


## Getting started

### Prerequisites

- [Node 14](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com)

### Installation

The first thing you'll need to do is to install the cli globally. Use this command in your terminal.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh:no-line-numbers
npm i -g create-scss-cli
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```sh:no-line-numbers
yarn global add create-scss-cli
```

  </CodeGroupItem>

  <CodeGroupItem title="NPX">

```sh:no-line-numbers
npx create-scss-cli@latest
```

  </CodeGroupItem>
</CodeGroup>

After that, you'll be able to use the create-scss-cli command anywhre.

```sh:no-line-numbers
create-scss-cli
```

You will then be prompt with a series of questions to make sure the cli generate the files you want and where you want them.

<img src="https://res.cloudinary.com/mdaraize/image/upload/v1632059503/create-scss-cli/cli_phvt19.webp" alt="example of create-scss-cli in action">

## Usage

Choose between 3 options:

- **Default**: Original structure with code 💫
- **Blank**: Original structure without code 📂
- **Custom**: Remove directory you do not need 🎯

::: warning
When choosing the path to install your scss structure, do not forget to add a forward slash at the end. See the example below.
:::

```sh:no-line-numbers
root
    └── level-1
        └── level-2
            └── where-i-want-my-install
```

::: tip good
level-1/level-2/
:::

::: danger bad
level-1/level-2
:::

## Structure

This is the default scss structure.

```sh:no-line-numbers
scss
    │
    ├── abstracts
    │   ├── functions.scss
    │   ├── helpers.scss
    │   ├── mixins.scss
    │   └── variables.scss
    │
    ├── base
    │   ├── global.scss
    │   ├── reset.scss
    │   ├── shame.scss
    │   └── typography.scss
    │
    ├── components
    │   ├── alert.scss
    │   ├── banner.scss
    │   ├── buttons.scss
    │   ├── card.scss
    │   ├── forms.scss
    │   ├── icons.scss
    │   ├── menu.scss
    │   ├── modal.scss
    │   ├── progress.scss
    │   └── table.scss
    │
    ├── layout
    │   ├── footer.scss
    │   ├── grid.scss
    │   ├── header.scss
    │   ├── navigation.scss
    │   └── sidebar.scss
    │
    ├── pages
    │   └── home.scss
    │
    ├── themes
    │   └── theme.scss
    │
    ├── vendor
    │
    └── main.scss

```

## Roadmap

For more information on this project and futures features, visit [our roadmap](https://github.com/maximedaraize/create-scss-cli/projects/1). You'll see all ongoing issues, features, and discussion about the create scss cli project.

## FAQ

**Q:** Why did you publish [create-scss-cli](https://www.npmjs.com/package/create-scss-cli) when [create-scss](https://www.npmjs.com/package/create-scss) already exists ?<br>
**A:** The first iteration of this project was created to solve one problem, create a unified scss structure for the dev team. Having the same structure helped us to maintain our code with more cohesion. The **cli** version is more flexible and easier to integrate into existing projects. It gives a choice to the developers on how they want to implement their code, which is the main reason why it was created.

<hr>

**Q:** Can i still use [create-scss](https://www.npmjs.com/package/create-scss) even if it is deprecated ?<br>
**A:** YES. There is no plan to release new version in the future. The final version of the package is ![npm version](https://img.shields.io/npm/v/create-scss). If it helps you in any way, please continue to use it.👍

<hr>

**Q:** What is your plan for the cli ?<br>
**A:** You can see here the **create scss cli** [roadmap](https://github.com/maximedaraize/create-scss-cli/projects/1)

<hr>

**Q:** I do not see a **package.json**, what dependencies or commands should i use ?<br>
**A:** Giving the user an option to create or update an existing packge.json is in our plan [see here](https://github.com/maximedaraize/create-scss-cli/issues/2). Meanwhile here's a list of dependencies we recommend to compile your scss and scripts we regularly use ourselves.
#### Depedencies

- **autoprefixer**: Add vendor prefix to your css [Learn more](https://github.com/postcss/autoprefixer)
- **postcss-cli**: Transform your css [Learn more](https://postcss.org)
- **sass**: Primary implementation of Sass [Learn more](https://sass-lang.com/dart-sass)

```json:no-line-numbers
"dependencies": {
    "autoprefixer": "^9.7.4",
    "postcss-cli": "^7.1.0",
    "sass": "^1.27.0"
  }
```

#### Scripts

- watch: compile your scss on save
- build: compile your scss into css and then minified it, remove any source map and add vendor prefix

```json:no-line-numbers
"scripts": {
    "watch": "sass scss/main.scss css/style.css --watch",
    "build": "sass scss/main.scss css/style.css --style=compressed --no-source-map && postcss css/style.css -o css/style.css --use autoprefixer -b 'last 4 versions'"
  }
```
<hr>

## Contribution

If you want to contribute to this project go to the [create-scss-cli](https://github.com/maximedaraize/create-scss-cli/issues) repo and open an issue ✏️

Show your support by giving a ⭐️ on [Github](https://github.com/maximedaraize/create-scss-cli)

<br>
<hr>
<div class="footer">MIT Licensed | Copyright © 2021-present Maxime Daraize</div>

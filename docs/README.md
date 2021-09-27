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

# Getting Started

## Overview

A command-line interface for a quick and easy way to organize your scss.

Generate an scss folder structure anywhere you want in your application. Choose what kind of preset you want to use (complete, clean, custom). Manage your file the same way in every project, and save time doing it.


## Installation

### Prerequisites

- [Node 14](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com)


Install create-scss-cli globally.

<CodeGroup>
  <CodeGroupItem title="NPM" active>

```sh:no-line-numbers
npm i -g create-scss-cli
```

  </CodeGroupItem>
  
  <CodeGroupItem title="PNPM">

```sh:no-line-numbers
pnpm i -g create-scss-cli
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

Use the cli command in your project.

```sh:no-line-numbers
create-scss-cli
#OR
cs-cli
```

You will then be prompt with a series of questions to make sure the cli generate the files you want and where you want them.

<img src="https://res.cloudinary.com/mdaraize/image/upload/v1632598329/create-scss-cli/carbon-cli_dvcu4y.png" alt="create-scss-cli setup example">

## Preset

The CLI let you choose between three presets:
### Complete
The "**complete**" preset let you install everything. The default folder [structure](#structure), all the scss files and some code to get you started (mixins, functions, variables, etc).

### Clean
The "**clean**" preset let you install the same default folder [structure](#structure) minus the code inside. This is particulary useful, if you want to start fresh, and do not need any snippets.
### Custom
The "**custom**" preset let you choose the structure you want. Choose between the available folder and create the scss structure you need.

## Structure

This is the **complete** scss structure.

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

## Integration

There is a lot of different way to compile your **scss** into your project. Here's a little step-bystep guide using some of the most popular way to do it.

### Extension

If you are using [vscode](https://code.visualstudio.com) you can install the [live sass compiler extension](https://ritwickdey.github.io/vscode-live-sass-compiler/) from the Marketplace. It will compile your **scss** and generate an `.css` and `.css.map` file.

### No bundler/tools

- Install your **scss** folder with `cs-cli`
- Install **sass** as a dev-depedencie `npm i -D sass`
- Add a script inside your package.json to compile you scss on save.
- learn more about [dart sass](https://sass-lang.com/dart-sass)

```json:no-line-numbers
"scripts": {
    "watch": "sass scss/main.scss css/style.css --watch"
  }
```
### Vite.js

Vite is a great frontend tool, fast and easy to configure. If you are using Vite to scafold your project, you know that there is a multitude of [template preset](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) available. The setup is the same for all of them.

- Install your **scss** folder with `cs-cli`
- Find the **main.js** file and add `import './scss/main.scss'`
- Thats it, Vite will do the rest


Learn more about [vite](https://vitejs.dev)
## Roadmap

For more information on this project and futures features, visit [our roadmap](https://github.com/maximedaraize/create-scss-cli/projects/1). You'll see all ongoing issues, features, and discussion about the create scss cli project.

## FAQ

**Q:** Why did you publish [create-scss-cli](https://www.npmjs.com/package/create-scss-cli) when [create-scss](https://www.npmjs.com/package/create-scss) already exists ?

**A:** The first iteration of this project was created to solve one problem, create a unified scss structure for the dev team. Having the same structure helped us to maintain our code with more cohesion. The **cli** version is more flexible and easier to integrate into existing projects. It gives a choice to the developers on how they want to implement their code, which is the main reason why it was created.

<hr>

**Q:** Can i still use [create-scss](https://www.npmjs.com/package/create-scss) even if it is deprecated ?

**A:** YES. There is no plan to release new version in the future. The final version of the package is ![npm version](https://img.shields.io/npm/v/create-scss). If it helps you, please continue to use it.

<hr>

**Q:** Can i use **create-scss-cli** in an existing project or should i use it with new project only. 

**A:** You can do both. The CLI will check if there is already another **scss** folder in the path of your installation, so there wont be any overwride. Because the CLI give you different preset options, it is flexible to either start a new project from scratch with it or intergrate it in your ongoing project.

<hr>

## Contribution

If you want to contribute to this project go to the [create-scss-cli](https://github.com/maximedaraize/create-scss-cli/issues) repo and open an issue ✏️

Show your support by giving a ⭐️ on [Github](https://github.com/maximedaraize/create-scss-cli)

<br>
<hr>
<div class="footer">MIT Licensed | Copyright © 2021-present Maxime Daraize</div>

---
head:
  - - meta
    - name: viewport
      content: width=device-width, initial-scale=1.0
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

A command line interface for a quick and easy way structure your scss ⚡️

Generate a scss folder structure anywhere you want in your application, choose what kind of
template you want to use (default, blank, custom). Start coding faster without having to create the same files 
over and over.


## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Npm](https://www.npmjs.com)

### Installation

The first thing you'll need to do is to install the cli globally. Use this command in your terminal :

```sh
npm i -g create-scss-cli
```

After that, you'll be able to use the create-scss-cli command in your project loke so:

```sh
create-scss-cli
```

You will then be prompt with a series of question to make sure the cli generate the files you want and where you want it.

<img src="https://res.cloudinary.com/mdaraize/image/upload/v1632059503/create-scss-cli/cli_phvt19.png" alt="example of create-scss-cli in action">

## Usage

Choose between 3 options: [Learn more](https://createscss.com)

- **Default**: Original structure with code 💫
- **Blank**: Original structure without code 📂
- **Custom**: Remove directory you do not need 🎯

::: warning
When choosing the path to install your scss structure, do not forget to add a foward slash at the end. See example below.
:::

```sh
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

```bash
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

For more information on this project and futures features, visit [our roadmap](https://github.com/maximedaraize/create-scss-cli/projects/1). You'll see all ongoing issues, features and discussion about the create scss cli project.

## FAQ

**Q:** Why did you publishing `create-scss-cli` when [create-scss](https://github.com/maximedaraize/create-scss) already exists ?<br>
**A:** The first iteration of this project [create-scss](https://github.com/maximedaraize/create-scss) was created to solve one problem. Create a unify scss structure for our developer team. Having the same scss structure help us to maintain our style with more cohesion. The **CLI** version give use more flexibility, by giving us options of which structure we want to install, and it is also easier to integrate in existing project, because we can now choose where to install inside our projects.

<hr>

**Q:** Can i still use [create-scss](https://www.npmjs.com/package/create-scss) even if it is deprecated ?<br>
**A:** YES. I do not have any plan to release new version in the future. The final version of this package is ![npm version](https://img.shields.io/npm/v/create-scss). If it helps you in any way, please continue to use it.👍

<hr>

**Q:** What is your plan for the cli ?<br>
**A:** You can see here the **create scss cli** [roadmap](https://github.com/maximedaraize/create-scss-cli/projects/1)

<hr>

**Q:** I do not see a **packge.json**, what depedencies or command should i use ?<br>
**A:** Giving the user an option to create or update an existing packge.json is in our plan [see here](https://www.npmjs.com/package/create-scss-cli). Meanwhile here's a list of depedencies we recommand to compile your scss and scripts we regularly uses ourselves.

#### Depedencies

- **autoprefixer**: Use to add vendor prefix to your css [Learn more](https://github.com/postcss/autoprefixer)
- **postcss-cli**: Use to transform your css [Learn more](https://postcss.org)
- **sass**: Primary implementation of Sass [Learn more](https://sass-lang.com/dart-sass)

```json
"dependencies": {
    "autoprefixer": "^9.7.4",
    "postcss-cli": "^7.1.0",
    "sass": "^1.27.0"
  }
```

#### Scripts

- watch: compile your scss on save
- build: compile your scss into css and then minified it, remove any source map and add vendor prefix

```json
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

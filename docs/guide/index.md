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
      href: /favicon.ico
contributors: false
---

# Getting Started

## Overview

The `create-scss-cli` is a command-line interface that generates an scss folder structure directly into your app. It gives you a range of different templates to choose from, making it flexible to integrate into any project.

## Installation
Before using the `create-scss-cli`, you will need to install Node.js version >=14.0.0. and NPM.

::: tip Prerequisites
[Node 14](https://nodejs.org/en/) <br>
[Npm](https://www.npmjs.com)
:::


Install `create-scss-cli` globally.

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

Use the CLI command in your project.

```sh:no-line-numbers
cs-cli
```

You will then be prompt with a series of questions to make sure the CLI generates the files you want and where you want them.

<img src="https://res.cloudinary.com/mdaraize/image/upload/v1632598329/create-scss-cli/carbon-cli_dvcu4y.png" alt="create-scss-cli setup example">


## Roadmap

For more information on this project and futures features, visit [our roadmap](https://github.com/maximedaraize/create-scss-cli/projects/1). You'll see all ongoing issues, features, and discussions about the create scss cli project.

## FAQ

**Q:** Is [create-scss-cli](https://www.npmjs.com/package/create-scss-cli) the successor of [create-scss](https://www.npmjs.com/package/create-scss) ?

**A:** Yes. The first iteration of this project was published to solve one problem, create a unified scss structure for the dev team. Having the same structure helped us to maintain our code with more cohesion. The **CLI** version is more flexible and easier to integrate into existing projects. It gives a choice to the developers on how they want to implement their code, which is the main reason it was created.

<hr>

**Q:** Can i still use [create-scss](https://www.npmjs.com/package/create-scss) even if it is deprecated ?

**A:** YES. There is no plan to release a new version in the future. The final version of the package is ![npm version](https://img.shields.io/npm/v/create-scss). If it helps you, please continue to use it. We recommend users to try the [CLI](https://www.npmjs.com/package/create-scss-cli) since it gives a better developer experience.

<hr>

**Q:** Can i use [create-scss-cli](https://www.npmjs.com/package/create-scss-cli) in an existing project or should i use it with new project only.

**A:** You can do both. The CLI will know if there is already another **scss** folder in the path you choose so there won't be any conflict. Because the CLI gives you different template options, it is flexible to either start a new project from scratch or combine it into your ongoing project.


## Contribution

If you want to contribute to this project go to the [create-scss-cli](https://github.com/maximedaraize/create-scss-cli/issues) repo on github <br> and open an issue ✏️

Show your support by giving a ⭐️ on [Github](https://github.com/maximedaraize/create-scss-cli)
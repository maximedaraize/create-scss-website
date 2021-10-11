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
# Structure

The `create scss` directory structure is base on the
[7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern). This section will explain the file architecture and how we think you should use it.

## File architecture

```sh:no-line-numbers
scss
    │
    ├── abstracts
    │   ├── colors
    │   ├── fonts
    │   ├── index
    │   ├── mixins
    │   ├── spacing
    │   └── helper
    │
    ├── base
    │   ├── global.scss
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
    │   └── dark.scss
    │
    ├── vendor
    │   └── normalize.scss
    │
    └── main.scss
```

## Abscracts

The abstracts folder is where we store all *"helper's"* Sass codes. Think about *mixins*, *variables*, *functions*, etc. One unique aspect of our abstracts folder is that it contains a *_helper.scss* file, which generated utility css class, for property like `font-size` - `color` - `padding`.

## Base

The base folder is where we store the code that is shared in every part of our website/app, like typography, container size, brand elements.

## Components

The components folder is where we store the code that affects specific UI elements, like buttons, cards, table, forms, etc. All element that could be extracted and use on their own.

## Layout

The layout folder is where we store all code-related structural elements of our website/app. Header, Footer, Section, Sidebar, are the type of elements we should include here.

## Pages

The pages folder is where we store specific code about the different view/page of our website/app. The home, contact, about, login are a few examples of what you could add to this folder.

## Themes

The themes folder is where you can store specific code about different themes (dark, high contrast) in your website/app.

## Vendor

The vendor folder is where you can store external CSS you use, like CSS framework or modern reset. 
# Integration

There is a lot of different way to compile your **scss** into your project. Here's a little step-bystep guide using some of the most popular way to do it.

## Dart Sass

- Install the template of your choice using: `cs-cli`
- Add an package.json file in your app with `npm init -y`
- Install **sass** as a dev-depedencie `npm i sass --save-dev`
- Add a script inside your package.json to compile you scss on save.
- Use `npm run watch` in your terminal to run the script

```json:no-line-numbers
//package.json
"scripts": {
    "watch": "sass scss/main.scss css/style.css --watch"
  }
```

Learn more about [dart sass](https://sass-lang.com/dart-sass) <br>
Learn more about [npm scripts](https://docs.npmjs.com/cli/v7/using-npm/scripts)

## Vite.js

Vite is a great frontend tool, fast and easy to configure. If you are using Vite to scafold your project, you know that there is a multitude of [template](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) available. The setup is the same for all of them.

- Install the template of your choice using: `cs-cli`
- Install vite and scaffold your project with `npm init vite@latest`
- Import your scss inside the `main.js` file of your app
- Use `npm run dev` to run vite

```js:no-line-numbers
//main.js
import './scss/main.scss'
```

Learn more about [vite](https://vitejs.dev)

## Gulp

Gulp is another popular tool to automate and enhance your workflow. With Gulp you will need to install some depedencies and configure `gulpfile.js`.

- Install the template of your choice using: `cs-cli`
- Install gulp `npm install --global gulp-cli`
- Install sass & gulp-sass `npm i sass gulp-sass --save-dev`
- Create a `gulpfile.js` and add the follow config
- Use `gulp sass` to compile your scss

```js:no-line-numbers
// /gulpfile.js
const gulp = require('gulp');
const sass = require('gulp-sass')((require('sass));

gulp.task('sass', function(){
  return gulp.src('./scss/main.scss') //source
  .pipe(sass()) //using gulp-sass
  .pipe(gulp.dest('./css')) //destination
})
```

Learn more about [gulp](https://gulpjs.com)

## Parcel

With Parcel, you do not need a configuration file in your project, simply link your main.scss to an index.html.

- Install the template of your choice using: `cs-cli`
- Install parcel `npm install parcel-bundler --save-dev`
- Install sass `npm i sass --save-dev`
- Add an index.html file and link your main.scss to it
- Add the following scripts inside your package.json

```html:no-line-numbers
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>createscss.com</title>
    <link rel="stylesheet" href="scss/main.scss">
</head>
<body>

</body>
</html>
```

```json:no-line-numbers
//package.json
"scripts": {
    "dev": "parcel index.html"
  }
```

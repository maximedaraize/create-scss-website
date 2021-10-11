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
# Code

Inside the abstracts folder of `create-scss`, you'll find multiple files containing helper code. Those files will be available to you by installing the complete template or by specifically choosing it with the custom option.

Here's a preview of what you'll find in  those files.

## Colors

```scss:no-line-numbers
$primary: #F9618F;
$secondary: #00142D;
$accent: #e76f51;
$heading: #212121;
$text: #2c3e50;
$background: #ffffff;
$success: #00e676;
$warning: #ffea00;
$danger: #ff3d00;
$info: #00b0ff;
$darken: 25;
$lighten: 15;

$colors: (
  primary: (
    base: $primary,
    dark: darken($primary, $darken),
    light: lighten($primary, $lighten),
  ),
  secondary: (
    base: $secondary,
    dark: darken($secondary, $darken),
    light: lighten($secondary, $lighten),
  ),
  accent: (
    base: $accent,
    dark: darken($accent, $darken),
    light: lighten($accent, $lighten),
  ),
  heading: (
    base: $heading,
    dark: darken($heading, $darken),
    light: lighten($heading, $lighten),
  ),
  text: (
    base: $text,
    dark: darken($text, $darken),
    light: lighten($text, $lighten),
  ),
  background: (
    base: $background,
    dark: darken($background, $darken),
    light: lighten($background, $lighten),
  ),
  success: (
    base: $success,
    dark: darken($success, $darken),
    light: lighten($success, $lighten),
  ),
  warning: (
    base: $warning,
    dark: darken($warning, $darken),
    light: lighten($warning, $lighten),
  ),
  danger: (
    base: $danger,
    dark: darken($danger, $darken),
    light: lighten($danger, $lighten),
  ),
  info: (
    base: $info,
    dark: darken($info, $darken),
    light: lighten($info, $lighten),
  ),
);
```

## Fonts
```scss:no-line-numbers
@use "sass:math";

// family
$family--serif: Garamond, Times, serif;
$family--sans: Arial, Helvetica, sans-serif;
$family--mono: Monaco, Courier, monospace;

// Weights
$weight--300: 300;
$weight--400: 400;
$weight--500: 500;
$weight--600: 600;
$weight--700: 700;
$weight--800: 800;
$weight--900: 900;

// line-height
$leading--1: 1;
$leading--2: 1.125;
$leading--3: 1.250;
$leading--4: 1.375;
$leading--5: 1.5;
$leading--6: 1.75;
$leading--7: 2;

// Size
$size--scale: 1.250;
$size--base: 16px;
$size--1: $size--base;
$size--2: math.round($size--base * $size--scale);
$size--3: math.round($size--2 * $size--scale);
$size--4: math.round($size--3 * $size--scale);
$size--5: math.round($size--4 * $size--scale);
$size--6: math.round($size--5 * $size--scale);
$size--7: math.round($size--6 * $size--scale);


$fonts: (
  1: (
    font-size: $size--1,
    font-weight: $weight--300,
    line-height: $leading--1,
  ),
  2: (
    font-size: $size--2,
    font-weight: $weight--400,
    line-height: $leading--2,
  ),
  3: (
    font-size: $size--3,
    font-weight: $weight--500,
    line-height: $leading--3,
  ),
  4: (
    font-size: $size--4,
    font-weight: $weight--600,
    line-height: $leading--4,
  ),
  5: (
    font-size: $size--5,
    font-weight: $weight--700,
    line-height: $leading--5,
  ),
  6: (
    font-size: $size--6,
    font-weight: $weight--800,
    line-height: $leading--6,
  ),
  7: (
    font-size: $size--7,
    font-weight: $weight--900,
    line-height: $leading--7,
  ),
);
```

## Spacing
```scss:no-line-numbers
@use "sass:math";

//Size
$space--0: 0;
$absolute--scale: 2;
$absolute--base: 2px;

$absolute--1: $absolute--base;
$absolute--2: $absolute--1 * $absolute--scale;
$absolute--3: $absolute--2 * $absolute--scale;
$absolute--4: $absolute--3 * $absolute--scale;
$absolute--5: $absolute--4 * $absolute--scale;
$absolute--6: $absolute--5 * $absolute--scale;
$absolute--7: $absolute--6 * $absolute--scale;
$absolute--8: $absolute--7 * $absolute--scale;
$absolute--9: $absolute--8 * $absolute--scale;
$absolute--10: $absolute--9 * $absolute--scale;
$absolute--11: $absolute--10 * $absolute--scale;
$absolute--12: $absolute--11 * $absolute--scale;

$relative--1: math.div(1, 12) * 100%;
$relative--2: math.div(2, 12) * 100%;
$relative--3: math.div(3, 12) * 100%;
$relative--4: math.div(4, 12) * 100%;
$relative--5: math.div(5, 12) * 100%;
$relative--6: math.div(6, 12) * 100%;
$relative--7: math.div(7, 12) * 100%;
$relative--8: math.div(8, 12) * 100%;
$relative--9: math.div(9, 12) * 100%;
$relative--10: math.div(10, 12) * 100%;
$relative--11: math.div(11, 12) * 100%;
$relative--12: math.div(12, 12) * 100%;

$spacing: (
  0: (
    absolute: $space--0,
    relative: $space--0,
  ),
  1: (
    absolute: $absolute--1,
    relative: $relative--1,
  ),
  2: (
    absolute: $absolute--2,
    relative: $relative--2,
  ),
  3: (
    absolute: $absolute--3,
    relative: $relative--3,
  ),
  4: (
    absolute: $absolute--4,
    relative: $relative--4,
  ),
  5: (
    absolute: $absolute--5,
    relative: $relative--5,
  ),
  6: (
    absolute: $absolute--6,
    relative: $relative--6,
  ),
  7: (
    absolute: $absolute--7,
    relative: $relative--7,
  ),
  8: (
    absolute: $absolute--8,
    relative: $relative--8,
  ),
  9: (
    absolute: $absolute--9,
    relative: $relative--9,
  ),
  10: (
    absolute: $absolute--10,
    relative: $relative--10,
  ),
  11: (
    absolute: $absolute--11,
    relative: $relative--11,
  ),
  12: (
    absolute: $absolute--12,
    relative: $relative--12,
  ),
);
```

## Mixins
```scss:no-line-numbers
//Overlay
@mixin overlay($color, $opacity) {
  &::before {
    content: "";
    position: absolute;
    display: inline-block;
    background: $color;
    opacity: $opacity;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }
}

//Square sized elements
@mixin square($size) {
  width: $size;
  height: $size;
}

//Pseudo default
@mixin pseudo {
  content: "";
  position: absolute;
  display: block;
}

//Truncate Text
@mixin truncate($max-width) {
  max-width: $max-width;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

//Breakpoints
$small: 600px;
$medium: 1024px;
$large: 1440px;
$xlarge: 1920px;

@mixin breakpoint($breakpoint) {
  @if $breakpoint == small {
    @media (min-width: $small + 1) {
      @content;
    }
  } @else if $breakpoint == medium {
    @media (min-width: $medium + 1) {
      @content;
    }
  } @else if $breakpoint == large {
    @media (min-width: $large + 1) {
      @content;
    }
  }
  @else if $breakpoint == xlarge {
    @media (min-width: $xlarge + 1) {
      @content;
    }
  }
}

//Helper
@mixin helper {
  &:before {
    position: fixed;
    right: 0;
    bottom: 0;
    content: 'Small';
    font-family: sans-serif;
    letter-spacing: 0.05rem;
    color: #fff;
    font-weight: 700;
    background: #000;
    padding: 1rem 2rem;
  }

  @include breakpoint(medium) {
    &:before {
      content: 'medium';
    }
  }

  @include breakpoint(large) {
    &:before {
      content: 'large';
    }
  }

  @include breakpoint(xlarge) {
    &:before {
      content: 'xlarge';
    }
  }
}

//Vendor prefix
@mixin vendor($property, $value, $prefixes:  (webkit, ms, moz)) {
  @each $prefix in $prefixes {
    #{'-' + $prefix + '-' + $property}: $value;
  }
  #{$property}: $value;
}

//Flexbox
@mixin flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}

@mixin flex-center-x {
  display: flex;
  align-items: center;
}

@mixin flex-center-y {
  display: flex;
  justify-content: center;
}

@mixin flex-column {
  display: flex;
  flex-direction: column;
}
 
@mixin flex-center-column {
  @include flex-center;
  flex-direction: column;
}
 
//Z-index 
$modal: 100;
$toast: 90;
$drawer: 80;

@mixin z-index($z-index) {
  @if $z-index == modal {
    z-index: $modal
  } @else if $z-index == toast {
    z-index: $toast
  } @else if $z-index == drawer {
    z-index: $drawer
  }
}

// Fade-in-out
@mixin fade($type, $duration, $easing) {
  @if $type== "out" {
    visibility: hidden;
    opacity: 0;
    transition: visibility opacity $duration $easing;
  } @else if $type== "in" {
    visibility: visible;
    opacity: 1;
    transition: visibility opacity $duration $easing;
  }
}

//Background
@mixin background-cover {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
```

## Index
```scss:no-line-numbers
@forward './colors';
@forward './fonts';
@forward './spacing';
@forward './mixins';
```

## Helper
```scss:no-line-numbers
@use "./index" as helper;
@use "sass:math";

// Colors
:root {
  /*colors*/
  @each $label, $value in helper.$colors {
    --color--#{$label}: #{map-get($value, base)};
    --color--#{$label}--dark: #{map-get($value, dark)};
    --color--#{$label}--light: #{map-get($value, light)};
  }

  /*spacing*/
  @each $label, $value in helper.$spacing {
    --space--#{$label}: #{map-get($value, absolute)};
    --space--#{$label}-in-12: #{map-get($value, relative)};
  }

  /*family*/
  --family--serif: #{helper.$family--serif};
  --family--sans: #{helper.$family--sans};
  --family--mono: #{helper.$family--mono};
  
  /*fonts*/
  @each $label, $value in helper.$fonts {
    --text--#{$label}: #{map-get($value, font-size)};
    --weight--#{$label}: #{map-get($value, font-weight)};
    --leading--#{$label}: #{map-get($value, line-height)};
  }
}

@each $label, $value in helper.$colors {
  .color-#{$label} {
    color: var(--color--#{$label});
  }
  .color-#{$label}-dark {
    color: var(--color--#{$label}--dark);
  }
  .color-#{$label}-light {
    color: var(--color--#{$label}--light);
  }
}

@each $label, $value in helper.$colors {
  .bg-#{$label} {
    background-color: var(--color--#{$label});
  }
  .bg-#{$label}-dark {
    background-color: var(--color--#{$label}--dark);
  }
  .bg-#{$label}-light {
    background-color: var(--color--#{$label}--light);
  }
}

@each $label, $value in helper.$colors {
  .border-#{$label} {
    border-color: var(--color--#{$label});
  }
  .border-#{$label}-dark {
    border-color: var(--color--#{$label}--dark);
  }
  .border-#{$label}-light {
    border-color: var(--color--#{$label}--light);
  }
}

//padding
@each $label, $value in helper.$spacing {
  .pt-#{$label} {
    padding-top: var(--space--#{$label});
  }
  .pt-#{$label}\/12 {
    padding-top: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .pr-#{$label} {
    padding-right: var(--space--#{$label});
  }
  .pr-#{$label}\/12 {
    padding-right: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .pb-#{$label} {
    padding-bottom: var(--space--#{$label});
  }
  .pb-#{$label}\/12 {
    padding-bottom: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .pl-#{$label} {
    padding-left: var(--space--#{$label});
  }
  .pl-#{$label}\/12 {
    padding-left: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .px-#{$label} {
    padding-right: var(--space--#{$label});
    padding-left: var(--space--#{$label});
  }
  .px-#{$label}\/12 {
    padding-right: var(--space--#{$label}-in-12);
    padding-left: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .py-#{$label} {
    padding-top: var(--space--#{$label});
    padding-bottom: var(--space--#{$label});
  }
  .py-#{$label}\/12 {
    padding-top: var(--space--#{$label}-in-12);
    padding-bottom: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .p-#{$label} {
    padding: var(--space--#{$label});
  }
  .p-#{$label}\/12 {
    padding: var(--space--#{$label}-in-12);
  }
}

//margin
@each $label, $value in helper.$spacing {
  .mt-#{$label} {
    margin-top: var(--space--#{$label});
  }
  .mt-#{$label}\/12 {
    margin-top: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .mr-#{$label} {
    margin-right: var(--space--#{$label});
  }
  .mr-#{$label}\/12 {
    margin-right: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .mb-#{$label} {
    margin-bottom: var(--space--#{$label});
  }
  .mb-#{$label}\/12 {
    margin-bottom: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .ml-#{$label} {
    margin-left: var(--space--#{$label});
  }
  .ml-#{$label}\/12 {
    margin-left: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .mx-#{$label} {
    margin-right: var(--space--#{$label});
    margin-left: var(--space--#{$label});
  }
  .mx-#{$label}\/12 {
    margin-right: var(--space--#{$label}-in-12);
    margin-left: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .my-#{$label} {
    margin-top: var(--space--#{$label});
    margin-bottom: var(--space--#{$label});
  }
  .my-#{$label}\/12 {
    margin-top: var(--space--#{$label}-in-12);
    margin-bottom: var(--space--#{$label}-in-12);
  }
}

@each $label, $value in helper.$spacing {
  .m-#{$label} {
    margin: var(--space--#{$label});
  }
  .m-#{$label}\/12 {
    margin: var(--space--#{$label}-in-12);
  }
}

//height
@each $label, $value in helper.$spacing {
  .h-#{$label} {
    height: var(--space--#{$label});
  }
  .h-#{$label}\/12 {
    height: var(--space--#{$label}-in-12);
  }
}

//width
@each $label, $value in helper.$spacing {
  .w-#{$label} {
    width: var(--space--#{$label});
  }
  .w-#{$label}\/12 {
    width: var(--space--#{$label}-in-12);
  }
}

// font-family
.family-serif {
  font-family: var(--family--serif);
}

.family-sans {
  font-family: var(--family--sans);
}

.family-mono {
  font-family: var(--family--mono);
}
// font-size
@each $label, $value in helper.$fonts {
  .text-#{$label} {
    font-size: var(--text--#{$label});
  }
}

// font-weight
@each $label, $value in helper.$fonts {
  .weight-#{$label + 2}00 {
    font-weight: var(--weight--#{$label});
  }
}

// line-height
@each $label, $value in helper.$fonts {
  .leading-#{$label} {
    line-height: var(--leading--#{$label});
  }
}
```
# 🕶️ Prefers contrast

[![Travis CI](https://img.shields.io/travis/AnandChowdhary/prefers-contrast.svg)](https://travis-ci.org/AnandChowdhary/prefers-contrast)
[![Coverage Status](https://coveralls.io/repos/github/AnandChowdhary/prefers-contrast/badge.svg?branch=master)](https://coveralls.io/github/AnandChowdhary/prefers-contrast?branch=master)
[![GitHub](https://img.shields.io/github/license/anandchowdhary/prefers-contrast.svg)](https://github.com/AnandChowdhary/prefers-contrast/blob/master/LICENSE)
![Vulnerabilities](https://img.shields.io/snyk/vulnerabilities/github/AnandChowdhary/prefers-contrast.svg)
![NPM type definitions](https://img.shields.io/npm/types/prefers-contrast.svg)
[![NPM](https://img.shields.io/npm/v/prefers-contrast.svg)](https://www.npmjs.com/package/prefers-contrast)
[![Minzipped size](https://img.shields.io/bundlephobia/minzip/prefers-contrast.svg)](https://www.npmjs.com/package/prefers-contrast)

[![NPM](https://nodei.co/npm/prefers-contrast.png)](https://www.npmjs.com/package/prefers-contrast)

Prefers contrast is a package that tells you whether a user prefers increased contrast. It's based on the CSS `@media (prefers-contrast)`, which is part of [Media Queries Level 5](https://drafts.csswg.org/mediaqueries-5/). It's around 700 bytes minified, 300 bytes gzipped.

## ⭐ Usage

Add the dependency from NPM:

```bash
npm install prefers-contrast
```

Import the package:

```js
import prefersContrast from "prefers-contrast";
```

Then call the function:

```js
const contrastPreference = prefersContrast();
// Returns "high", "low" or "no-preference"
```

## 💡 Browser support

This package only works in browsers that natively support `@media (prefers-contrast)`, so it just returns `"no-preference"` in unsupported browsers. [Current browser support](https://caniuse.com/#feat=prefers-contrast)

By passing `false` as the argument, you can get `"unsupported"` as the value for unsupported browsers:

```js
const contrastPreference = prefersContrast(false);
// Returns "high", "low", "no-preference", or "unsupported"
```

## 🛠️ Development

Install dependencies:

```bash
yarn
```

Compile Typescript to ES6 before publishing to NPM:

```bash
yarn build
```

## 📀 Media Queries Level 5

- 🙅 `prefers-reduced-motion` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-motion) · [NPM](https://www.npmjs.com/package/prefers-reduced-motion)
- 🎨 `prefers-color-scheme` · [GitHub](https://github.com/AnandChowdhary/prefers-color-scheme) · [NPM](https://www.npmjs.com/package/prefers-color-scheme)
- 🕶️ `prefers-contrast` · [GitHub](https://github.com/AnandChowdhary/prefers-contrast) · [NPM](https://www.npmjs.com/package/prefers-contrast)
- 🎞️ `prefers-reduced-transparency` · [GitHub](https://github.com/AnandChowdhary/prefers-reduced-transparency) · [NPM](https://www.npmjs.com/package/prefers-reduced-transparency)
- 🌑 `inverted-colors` · [GitHub](https://github.com/AnandChowdhary/inverted-colors) · [NPM](https://www.npmjs.com/package/inverted-colors)
- 🧖 `environment-blending` · [GitHub](https://github.com/AnandChowdhary/environment-blending) · [NPM](https://www.npmjs.com/package/environment-blending)
- 💡 `light-level` · [GitHub](https://github.com/AnandChowdhary/light-level) · [NPM](https://www.npmjs.com/package/light-level-css)

## 📝 License

MIT

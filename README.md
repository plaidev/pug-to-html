# pug-to-html

Convert Vue files from pug templates to html

This repository is forked from [vue-pug-to-html](https://github.com/dperrymorrow/vue-pug-to-html), and has various adjustments.


## :cd: Installation

```sh
npm i -g @plaidev/pug-to-html
```


## :lollipop: Usage

```sh
pugToHtml your-vue-file.vue
```


## :question: What's difference with `vue-pug-to-html` ?
- Support `.jade` file
- Support `<template lang="jade">`
- Add `doctype: "html"` option (because https://github.com/yyx990803/pug-plain-loader/blob/d2bc7c4ee84096fe94dd0c8778f3f6d860c2d6c3/index.js#L7)


## :muscle: Contribution

- Fork the repository from [plaidev/pug-to-html](https://github.com/plaidev/pug-to-html) !
- Create your topic branch from `master`: `git branch my-new-topic master`
- Add codes and pass tests !
- Commit your changes: `git commit -am 'Add some topic'`
- Push to the branch: `git push origin my-new-topic`
- Submit a pull request to `master` branch of `plaidev/pug-to-html` repository !


## :copyright: License

[MIT](http://opensource.org/licenses/MIT)

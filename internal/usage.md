## Design Scope vuepress site

This site uses [vuepress](https://vuepress.vuejs.org/) for publishing.

You need to install it either with `yarn global add vuepress` or `npm install -g vuepress` (use `sudo` if needed).

Then [clone repository](https://github.com/designscope/designscope.github.io), go to folder and run `vuepress dev`. Your site will be at [http://localhost:8080/](http://localhost:8080/).

## Publishing

from the site folder

```
vuepress build
cd .vuepress/dist
git init
git add -A
git commit -m 'deploy'
git push -f https://github.com/designscope/designscope.github.io.git master
cd -
```
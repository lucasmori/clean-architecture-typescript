### Main Dependencies

(Node.js v14+)[]



### Git Config Alias

Personally I'd like to use alias in my workflow with git.

Set default editor that you want to use. ex ( code ) or `git config --global core.editor webstorm.exe`.

Use this command to enter on git config file: `git config --global --edit`.


```git
[alias]
    s = !git status -s
    l = !git log --pretty=format:'%C(blue)%h%C(red)%d %C(white)%s - %C(cyan)%cn, %C(green)%cr'
```


### Commit Style

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) for readable meaning to commit messages.

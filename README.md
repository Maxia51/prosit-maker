# Prosit maker

This is my prosit maker.

## What is a Prosit

Prosit is the name we give to the lesson in my school, we are free to write our courses as we wish and I have decided to use the markdown syntax to increase productivity.

## How it works

The core of the application is developed with reactJS.

It will generate prosit in `markdown` file.

if you want to have it in `docx` :

```bash
    pandoc -s prositAller.md -f markdown -t docx -o prositAller.docx
```

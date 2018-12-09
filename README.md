# react-intl-universal-pseudo-converter

This tool converts a locale source file as the ones used by [react-intl-universal](https://github.com/alibaba/react-intl-universal) and outputs a new file with pseudo-localized strings. The pseudo-localization is carried out by [1stdibs](https://github.com/1stdibs) [icu-pseudo-translate utility](https://github.com/1stdibs/icu-pseudo-translate).

## Example

I have written a simple example on [Repl.it](https://repl.it/@sigurdvh/React-Intl-Universal-Pseudo-Converter-Example?language=nodejs). Simply visit the website, and modify the locale.json file. Once done, hit the `run` button. The file will be generated on the file system. Since Repl.it doesn't know there is a new file, the UI won't refresh by itself until you make a change, so go ahead and try to add a new file or folder and you will see the pseudo file appear.

The input file is the following:

```json
{
  "Company_label": "Title for the company",
  "navigation": {
    "menu_open": "Open the menu",
    "account_login": "Log in to the account",
    "account_logout": "Log out of the account"
  },
  "about_page": {
    "title": "About page",
    "Subtitle": "Something about the about page"
  }
}
```

The output from the utility is the following:

```json
{
  "Company_label": "Tïƭℓè ƒôř ƭhè çô₥ƥáñ¥",
  "navigation": {
    "menu_open": "Óƥèñ ƭhè ₥èñú",
    "account_login": "£ôϱ ïñ ƭô ƭhè áççôúñƭ",
    "account_logout": "£ôϱ ôúƭ ôƒ ƭhè áççôúñƭ"
  },
  "about_page": {
    "title": "Âβôúƭ ƥáϱè",
    "Subtitle": "§ô₥èƭhïñϱ áβôúƭ ƭhè áβôúƭ ƥáϱè"
  }
}
```

## Installing

### Prerequisites

The package requires you to define an input localization file that uses [ICU message format](http://userguide.icu-project.org/formatparse/messages) strings with the [nested JSON locale format defined by react-intl-universal](https://github.com/alibaba/react-intl-universal/releases/tag/1.4.3).


To install it locally, run the following command:

### NPM

```
npm i -g react-intl-universal-pseudo-converter
```

### Yarn

```
yarn global add react-intl-universal-pseudo-converter 
```

## Using the utility

The utility follows the following syntax:

```
Usage: react-intl-universal-pseudo-converter <command> [options]

Commands:
  react-intl-universal-pseudo-converter create  Creates a pseudo-localized file

Options:
  -f, --file      Input file                                          [required]
  -e, --encoding  File encoding                                [default: "utf8"]
  -o, --output    Output file                    [default: "pseudo.locale.json"]
  -h, --help      Show help                                            [boolean]
  -v, --version   Show version number                                  [boolean]

Examples:
  index create -f en-us.json  creates a pseudo-localized file from 'en-us.json'
```

## Authors

* **Cesar Zapata** - *Initial work* - [Ceszare](https://github.com/Ceszare)

See also the list of [contributors](https://github.com/ceszare/react-intl-universal-pseudo-converter/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [Tim Whidden](https://github.com/twhid) and [1stdibs](https://github.com/1stdibs) for their [icu-pseudo-translate](https://github.com/1stdibs/icu-pseudo-translate) utility
* [Alibaba Group](https://github.com/alibaba/) for creating [react-intl-universal](https://github.com/alibaba/react-intl-universal)

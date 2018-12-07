# react-intl-universal-pseudo-converter

This tool converts a locale source file as the ones used by [react-intl-universal](https://github.com/alibaba/react-intl-universal) and outputs a new file with pseudo-localized strings. The pseudo-localization is carried out by [Tryggvigy Gylfason's](https://github.com/tryggvigy) [pseudo-lozalization library](https://github.com/tryggvigy/pseudo-localization).

### Prerequisites

The package requires you to define an input localization file with the [nested JSON locale format defined by react-intl-universal](https://github.com/alibaba/react-intl-universal/releases/tag/1.4.3).

## Installing

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
react-intl-universal-pseudo-converter <input_file> [-o <output_file>]
```

The input file is required for the utility to work.

The output file is optional. If No output file is specified, we will create a pseudo_locale.json file in the directory where the utility was executed.

## Authors

* **Cesar Zapata** - *Initial work* - [Ceszare](https://github.com/Ceszare)

See also the list of [contributors](https://github.com/ceszare/react-intl-universal-pseudo-converter/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## Acknowledgments

* [Tryggvigy Gylfason](https://github.com/tryggvigy) for borrowing his pseudo-localization utility
* [Alibaba Group](https://github.com/alibaba/) for creating [react-intl-universal](https://github.com/alibaba/react-intl-universal)

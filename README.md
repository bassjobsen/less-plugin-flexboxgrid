less-plugin-flexboxgrid
========================

Imports the Less code for the [Flexbox Grid](http://flexboxgrid.com/) System before your custom Less code.

## lessc usage

Install..

Notice require Less v3.2.1 (download from github)

```
npm install -g less-plugin-flexboxgrid
```

and then on the command line,

```
lessc file.less --flexboxgrid
```


## Programmatic usage

```
var LessPluginFlexboxgrid = require('less-plugin-flexboxgrid'),
    FlexboxgridPlugin = new LessPluginFlexboxgrid();
less.render(lessString, { plugins: [FlexboxgridPlugin] })
  .then(
```

## Browser usage

Browser usage is not supported at this time.

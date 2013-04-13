
# Czech stemmer

This is a port of stemmer for Czech language to Javascript, for both node.js and browser.

Original code is a Java program by [Jacques Savoy](http://members.unine.ch/jacques.savoy/clef/) released under BSD license.

To get stemmer for other languages, check out [Snowball](http://snowball.tartarus.org/) and its javascript port [snowball-js](https://github.com/fortnightlabs/snowball-js).

## Usage

Use it in node:

```javascript
// using default agressive stemmer
var stem = require('czech-stemmer');
stem('nejneobhospodařovávatelnějšími'); // => 'nejneobhospodařováva'

// using lighter version of stemmer
var stem_light = require('czech-stemmer/light.js');
stem_light('nejneobhospodařovávatelnějšími'); // => 'nejneobhospodařovávatelnějš'
```

Use it in browser:

```html
<script src="../stringbuffer.js"></script>
<script src="../agressive.js"></script>
<script>
    czech_stem('nejneobhospodařovávatelnějšími');
</script>
```

## Technical details

To reuse Java code as much as possible, limited version of StringBuffer was implemented as a shim and only few code replacements were performed:

- class definition -> function constructor
- 'private void' -> 'function'
- 'int ' -> 'var '
- 'StringBuffer ' -> ''

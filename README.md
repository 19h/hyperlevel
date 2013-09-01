Uberlevel
=====

This is a convenience package that bundles the current release of **[LevelUP](https://github.com/rvagg/node-levelup)** and **[lmdb](https://github.com/rvagg/lmdb)** and exposes LevelUP on its export.

Use this package to avoid having to explicitly install lmdb when you just want plain old LevelDB from LevelUP.

```js
var level = require('uberlevel')

// 1) Create our database, supply location and options.
//    This will create or open the underlying LevelDB store.
var db = level('./mydb')

// 2) put a key & value
db.put('name', 'Level', function (err) {
  if (err) return console.log('Ooops!', err) // some kind of I/O error

  // 3) fetch by key
  db.get('name', function (err, value) {
    if (err) return console.log('Ooops!', err) // likely the key was not found

    // ta da!
    console.log('name=' + value)
  })
})
```

### Contributors

Level, including LevelUP & lmdb, is only possible due to the excellent work of the following contributors:

<table><tbody>
<tr><th align="left">Rod Vagg</th><td><a href="https://github.com/rvagg">GitHub/rvagg</a></td><td><a href="http://twitter.com/rvagg">Twitter/@rvagg</a></td></tr>
<tr><th align="left">Kenan Sulayman</th><td><a href="https://github.com/kenansulayman">GitHub/kenansulayman</a></td><td><a href="http://twitter.com/rvagg">Twitter/@kenansulayman</a></td></tr>
</tbody></table>


<a name="licence"></a>
Licence &amp; copyright
-------------------

Copyright (c) 2012-2013 Level contributors (listed above).

Level is licensed under an MIT +no-false-attribs license. All rights not explicitly granted in the MIT license are reserved. See the included LICENSE file for more details.

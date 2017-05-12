# mkdtemp-async

> Typed async mkdtemp function

```js
// @flow
import mkdtempAsync from 'mkdtemp-async';

mkdtempAsync('path/to/file.txt').then(buffer => {
  console.log(buffer.toString());
});
```

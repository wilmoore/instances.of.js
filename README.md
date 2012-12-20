## instances.of.js

Light-Weight Type/Class-based inheritance for JavaScript

### Rationale

Inheritance isn't always the correct solution to our object-oriented
problems; rather, in many cases it is the wrong solution. That being
said, it is one tool in the toolbox and when you need it, you need it.

### Language Support

JavaScript doesn't directly provide language support for
Type/Class-based inheritance; however, it can be simulated with
prototypal inheritance which JavaScript supports natively via:

- Constructor Functions
- Prototype Chain Semantics

Of course, a huge part of the motivation to use inheritance is to be
able to validate that an object is derived from a specific type or type
hierarchy. In this case, you'd use the intrinsic [`instanceof`][instanceof].

### Usage

Parent Constructor Function

```
var FileStore = function (){};
FileStore.prototype.stat = function (){ return { size: 0, atime: 0, mtime: 0, ctime: 0 }; };
```

Child Constructor Function & Inheritance

```
var AmazonS3  = function (){};
instances.of(AmazonS3).inherit(FileStore);
```

Child Method Overrides

```
AmazonS3.prototype.stat = function (){
  var metadata = this.parent.stat.call(this);
  metadata['Content-SHA1'] = '...';

  return metadata;
};
```

### LICENSE

    (The MIT License)

    Copyright (c) 2012 Wil Moore III <wil.moore@wilmoore.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is furnished
    to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.

[instanceof]:   https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/instanceof

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
descend(AmazonS3).from(FileStore);
```

Child Method Overrides

```
AmazonS3.prototype.stat = function (){
  var metadata = this.parent.stat.call(this);
  metadata['Content-SHA1'] = '...';

  return metadata;
};
```


[instanceof]:   https://developer.mozilla.org/en-US/docs/JavaScript/Reference/Operators/instanceof

# RequireParts

Noticed this when requiring [Ramda](http://ramdajs.com/):

    [BABEL] Note: The code generator has deoptimised the styling of "/home/fozz/Projects/siac-ui/node_modules/ramda/dist/ramda.js" as it exceeds the max of "100KB".

Now I love Ramda, you should read about, it's awesome, but I am only actually using a few functions from it in this project and this is overkill... So instead I did:

    var R = { zipObj: require('ramda/src/zipObj.js') };

which is all well and fine but I kept adding to this this and it became a bit of a pain...

    var R = {
        assocPath: require('ramda/src/assocPath.js'),
        defaultTo: require('ramda/src/defaultTo.js'),
        partition: require('ramda/src/partition.js'),
        pipe: require('ramda/src/pipe.js'),
        reduce: require('ramda/src/reduce.js')
    };

so I created [this micro library](https://github.com/forbesmyester/require-parts). It can be used like the following:

    var requireParts = require('require-parts');
    var R = requireParts('ramda', 'src', ['zipObj.js', 'min.js']);

This works for modules installed with NPM in Node, doesn't seem to work with Babel, which is a shame...

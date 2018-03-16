# polka-middleware-order-repro

Polka and Express have differing behaviours viz the order in which middlewares run — Express runs them in the order in which they're added (with `app.use` or `app.get`), but Polka appears to run middlewares with a basepath *after* middlewares without, regardless of the order in which they're added to the app.

To run...

```
yarn
node index.js
```

...then navigate to [localhost:3000](http://localhost:3000). Expected behaviour is to see a picture of a potato; actual behaviour is a 'not found' message.

To see the potato, run it with Express:

```
node index.js express
```
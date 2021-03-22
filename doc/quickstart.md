### Step 1
Install the [reselect](https://github.com/reduxjs/reselect) library.
```
npm install reselect
```

### Step 2
Add a `selectors` folder directly in `frontend/src` (see this [selectors](https://github.com/emiliendeon/selectors-for-fmp-reactjs-starter/tree/main/selectors) folder for example).

### Step 3
Add an initial state to the reducer you want to use with selectors (see [me.slice.ts](https://github.com/emiliendeon/selectors-for-fmp-reactjs-starter/blob/main/store/slices/me.slice.ts) for example).

### Step 4
See [connected.screen.tsx](https://github.com/emiliendeon/selectors-for-fmp-reactjs-starter/blob/main/examples/connected.screen.tsx) for usage with the basic example selector implemented by this module. It's simply a new version of the [starter authenticated home screen](https://github.com/Fast-Modular-Project/starter-reactjs-nestjs-mysql/blob/master/frontend/src/pages/connected/connected.screen.tsx) that uses a selector to display the user login and email.

To go further, you can look at the [products.selectors.ts](https://github.com/emiliendeon/selectors-for-fmp-reactjs-starter/blob/main/examples/products.selectors.ts) file which is a more complex example of what can be done with selectors (in this case, a product sorting and filtering system in a shop).

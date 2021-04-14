<p align="center">
  <a href="https://fast-modular-project.com/modules" target="_blank">
    <img src="https://fast-modular-project.com/assets/icons/module-outlined-primary.svg" height="100px" alt="Module Logo"/>
  </a>
</p>

<div align="center">
    <strong>
      Pluggable module on this <a href="https://fast-modular-project.com/starters/starter-reacjs-nestjs-mysql" target="_blank">starter</a>
    </strong>  
</div>

<br />

<div align="center">
  <img src="https://fast-modular-project.com/assets/imgs/technologies/reactjs.png" height="40px" alt="React"/>&nbsp;&nbsp;
  <img src="https://fast-modular-project.com/assets/imgs/technologies/nestjs.svg" height="40px" alt="NestJS"/>&nbsp;&nbsp;
  <img src="https://fast-modular-project.com/assets/imgs/technologies/mysql.png" height="40px" alt="MySQL"/>&nbsp;&nbsp;
  <img src="https://fast-modular-project.com/assets/imgs/technologies/aws.png" height="30px" alt="AWS"/>
</div>

<br />

<div align="center"><strong>Data formmating with selector layer</strong></div>
<div align="center">Format your data coming from your Redux store to keep your component as clean as possible</div>

<br />

<!-- Badges -->
<div align="center">
  
  <a href="https://join.slack.com/t/fast-modular-project/shared_invite/zt-o4xbnp6b-QWVWS8VUBTaurVU1g~9rIw">
    <img 
    alt="FMP starter" src="https://img.shields.io/badge/join%20the%20community-on%20slack-blue?logo=slack"/>
  </a>
  <a href="https://fast-modular-project.com">
    <img alt="Supported by Fast Modular Project" src="https://img.shields.io/badge/supported%20by-Fast%20Modular%20Project-ed422e" />
  </a>
</div>

<br />

<div align="center">
  <sub>Created by <strong><a href="https://github.com/emiliendeon">EmilienDeon</a></strong></sub>
</div>

## Features included in the module

[Full documentation HERE.](https://github.com/emiliendeon/selectors-for-fmp-reactjs-starter)

This module adds a **selectors layer** to your project **between reducers and components**. This new layer is dedicated to **data formatting and presentation**. It takes data from your Redux store and sends it back formatted to your components. The main advantage of this approach is to isolate the recurrent computations of your app in a specific module in your code and therefore to **make your components, reducers and services the clearest possible**.

For example, it can be very useful to manage product filtering and sorting system in your shop, but more generally to compute any derived data from your Redux store, simple mathematical operations like sums or averages as well as more complex data enrichments or reorderings. A good pratice is to do this in a separate part of your code instead of directly in your components pre-rendering functions for example.

Moreover, the [reselect](https://github.com/reduxjs/reselect) library, on which this module is based, implements memoization of selector results so as not to call them more as necessary. This is very convenient to optimize applications, especially if it involves manipulation of complex data.

You'll find in the module: 
- use of the `reselect`package
- example of it's integration on a React frontend with Redux
- example screens
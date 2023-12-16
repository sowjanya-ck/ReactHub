/*

<div id="parent">
    <div id="child">
        <h1>hello first</h1>
        <h2>Hello second</h2>
    </div>
</div>
*/




// const heading = React.createElement('h3',{id:"heading"},"hello how do you do");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// import the react package.
import React from "react"; // "react" is coming from node modules react
import ReactDOM from "react-dom/client";

const heading = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},"Hello first"),React.createElement('h2',{},"hello second secondd")]));

// jsx -html like syntax not html in javascript.
const jsxheading= <h1 id="parent"> React using jsx.</h1>

// heading and jsxHeading are same thing. both are reactElemtn now. but different way.
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxheading);
root.render(heading); 

/// Now it will show error, as @parcel/transformer-js: Browser scripts cannot have imports or exports.
// cs we are importing inside the app.js , which is just a js file, to avoid this error add  as <script type="module" src="./App.js"> 
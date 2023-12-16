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
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(jsxheading);
//root.render(heading); 

/// Now it will show error, as @parcel/transformer-js: Browser scripts cannot have imports or exports.
// cs we are importing inside the app.js , which is just a js file, to avoid this error add  as <script type="module" src="./App.js"> 



// ep-2 chapter 3

const heading2 = (<h2 className="head" tabIndex="5"> Now onwards we'll start using jsx element. </h2>);

const root = ReactDOM.createRoot(document.getElementById("root"));


//root.render(heading2);

// functional component->  a function which returns a javascript elemet.. component name should always start with capital. 
 
const title = <h2>React element </h2>
const Firstcomponent = ()=>{
    return <h1> React component 1;</h1>

};

const Firstcomponent2 = ()=>(
     <div> 
        {100 + 200} 
        {title} 
        {/* can write any js code isnide the {} inside the functional componetn. */}
        <h1> first functional componennt without return;</h1>

        <Firstcomponent/>  {/*compoetnt composition, one compoent another a another a compoent.*/ }
        <Firstcomponent></Firstcomponent>
        {Firstcomponent()} 
        {/* all these three ways are same. */}

    </div>
    ); // same as Firstcomponent. 

// root.render(Firstcomponent); we cant render lke this bcs its not react elemt, its functionla componsent.
 
root.render(<Firstcomponent2/>);

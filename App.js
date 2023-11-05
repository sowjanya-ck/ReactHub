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

const heading = React.createElement('div',{id:"parent"},React.createElement('div',{id:"child"},[React.createElement('h1',{},"Hello first"),React.createElement('h2',{},"hello second")]));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
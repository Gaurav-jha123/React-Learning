
const parent = React.createElement(
    "div",
    {id : "Parent"},
    React.createElement("div", {id : "child"},

    [React.createElement("h1", {}, "I am an h1 child tag"),
    React.createElement("h2", {}, "I am an h2 child sibling tag of h1")] 
    ) 
);
console.log(parent);

//const heading = React.createElement("h1", { id: "heading" }, "Bhai Content");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
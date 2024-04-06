import React from "react";
import Header from './componenets/Header';
import Body from "./componenets/Body";
import  ReactDOM  from "react-dom/client";
 


const AppLayout = () => {
    return <div className="app">
        <Header/>
        <Body/>
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);

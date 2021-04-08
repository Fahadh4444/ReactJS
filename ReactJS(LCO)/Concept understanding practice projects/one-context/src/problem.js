import React, { useState } from "react";

const GrandChild = (props) => {
    return (
        <div>
            <h3>Grandchild: {props.brand}</h3>
        </div>
    ); //! If we use brandName directly in child then app craches
};

const Child = (props) => {
    return (
        <div>
            <h2>Child: </h2>
            <GrandChild brand={props.brand} />
        </div>
    );
};

const App = () => {
    const [brandName] = useState("FULLBUSTER"); //! setBrandName is not required because we are not planning to change brandName
    return (
        <div>
            <h1>Parents</h1>
            <Child brand={brandName} />
        </div>
    );
};

export default App;
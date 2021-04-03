import React from 'react'
import "./style.css"

import Button from './Button'

const App = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "250px" }}>
            <h1 style={{ textAlign: "center" }} > World !!!</h1>
            <Button title="Hello" />
            <Button title="I am Fahadh" link="https://www.mdfahadh.xyz" />
        </div>
    );
};


export default App
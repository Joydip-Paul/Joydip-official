import React, { useState } from 'react';

const Home = () => {
    const [A, setA] = useState(false);
    const st = {
        marginTop: "100px",
        padding: "100px",
    }
    return (
        <div className="" style = {st}>
            <button id="btn" onClick={() => setA(true)}>show</button>
            <button id="btn" onClick={() => setA(false)}>hide</button>
            {
                A?<h1>Joydip</h1> : null
            }
            <h1>This is Home Page</h1>
        </div>
    );
};

export default Home;
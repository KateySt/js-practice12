import React from 'react';
import './App.css';
import FieldForPromoCode from "./component/field";

function App():JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <FieldForPromoCode/>
            </header>
        </div>
    );
}

export default App;

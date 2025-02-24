import React, { useState } from 'react';
import '../styles/InputSection.css';

function InputSection(props) {
    const [inputText, setInputText] = useState("");
    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function executeOnAdd() {
        props.onAdd(inputText);
        setInputText("");
    }

    return(
        <div className="add-task">
            <input type="text" 
                value={inputText} 
                onChange={handleChange}
                onKeyDown={ (e) => {
                    (e.key === 'Enter') && executeOnAdd();
                }}   
                placeholder="Aufgabe hinzufügen"/>
            <i className="fas fa-plus-circle"
                onClick={ ()=> {
                    executeOnAdd();
                }} >
            </i>
        </div>
    )
}

export default InputSection;
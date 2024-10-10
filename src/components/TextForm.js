import React, { useState } from 'react'


export default function TextForm(props) {
    const handleUpCase =()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to UpperCase!","success");
    }

    const handleLoCase =()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to LowerCase!","success");
    }

    const handleClearCase =()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text Screen has been cleared","success")
    }

    const handleOnChange =()=>{
        console.log("On Change ");
        // eslint-disable-next-line no-restricted-globals
        setText(event.target.value);
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")

    }

    const handleExtra=()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed","success");

    }
    const [text,setText] = useState('Enter Text here');
    return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}} >
        <h4>{props.heading}</h4>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
        </div>
        <button className='btn btn-primary mx-2' onClick={handleUpCase}>Convert to Uppercase</button>
        <button className='btn btn-primary mx-2' onClick={handleLoCase}>Convert to LoweCase</button>
        <button className='btn btn-primary mx-2' onClick={handleClearCase}>Clear</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleExtra}>Remove Extra Spaces</button>
        
    </div >
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something to Preview it here'}</p>
    </div>
    </>
  )
}

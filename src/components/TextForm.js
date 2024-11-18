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

    const handleOnChange =(event)=>{
        // console.log("On Change ");
        setText(event.target.value);
    }

    const handleCopy =()=>{
        var text = document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copied","success")

    }

    const handleClick =()=>{
        setText("");
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
        <h4 className='mb-4'>{props.heading}</h4>
        <div className="mb-3">
        <textarea className="form-control" value={text} onClick={handleClick} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="3"></textarea>
        </div>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleLoCase}>Convert to LoweCase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleClearCase}>Clear</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleUpCase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className='btn btn-primary mx-2 my-1' onClick={handleExtra}>Remove Extra Spaces</button>
        
    </div >
    <div className='container my-3' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h2>Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:'Enter Something to Preview it here'}</p>
    </div>
    </>
  )
}

import React,{useState} from 'react'


export default function TextForm(props) {
    
    const handleUpClick=()=>{
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase","success");
    }
    const handleLowClick=()=>{
        let newText=text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase","success");
    }
    const handleTrim=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra Spaces Removed..!","success");
    }

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to Clipboard..!","success");
    }

    const handleClear=()=>{
        let newText="";
        setText(newText)
        props.showAlert("Clear the text from Textbox..!","success");
    }
    const handleOnChange=(event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState('');
    return (
        <>
        <div className="container" style={{color:props.mode==='dark'?'white':'#042743'}}>
            <h1 className="mb-4">{props.header}</h1>
  <div className="mb-3">  
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white',color:props.mode==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
  </div>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLowClick}>Convert to Lowercase</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTrim}>Trim Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
  <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>Clear</button>
</div>
<div className="container my-3" style={{color:props.mode==='dark'?'white':'#042743'}}>
    <h2>Your Text Summary</h2>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.008 * (text.split(" ").filter((element)=>{return element.length!==0}).length)} Minutes Read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to Preview..! "}</p>
</div>
</>
    )
}

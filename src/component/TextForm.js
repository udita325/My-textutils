import React,{useState} from 'react'


export default function TextForm(props) {
     const [text, setText] = useState("");
    const handleUpClick = ()=>{
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Uppercase is enabled", "success");
    }
    const handleLoClick = ()=>{
        console.log("Lowercase was clicked");
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Lowercase is enabled", "success");
    }
    const handleSpeakClick = ()=>{
        console.log("read aloud");
         let msg = new SpeechSynthesisUtterance(text);
    msg.lang = "en-GB"; // UK English

    // Try to pick a UK voice if available
    const voices = window.speechSynthesis.getVoices();
    const ukVoice = voices.find(voice =>
        voice.lang === "en-GB" || voice.name.includes("UK") || voice.name.includes("British")
    );
     if (ukVoice) {
        msg.voice = ukVoice;
    }

    window.speechSynthesis.speak(msg);
    props.showAlert("Read aloud is enabled", "success");
    }
    const handleOnChange = (event)=>{
        console.log("On change");
        setText(event.target.value);
    }
    const textAreaStyle = {
    color: props.textColor ,
    backgroundColor: 'white'   // keep background white so coloured text is visible
  }
  return (
    <>
<div className="container" style={props.style}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
  <textarea className="form-control" id="myBox" value={text}  onChange={handleOnChange} rows="8" style={textAreaStyle} ></textarea>
     </div>
    <button className="btn btn-light mx-2" onClick={handleUpClick}>Convert to Uppercase</button>

    <button className="btn btn-light mx-2" onClick={handleLoClick}>Convert to Lowercase</button>

    <button className="btn btn-light mx-2" onClick={handleSpeakClick}>Read aloud</button>
</div>
    <div className="container my-4" style={props.style}>
        <h1 >Your text summary</h1>
        <p >{text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length} words and  {" "} {text.length} characters</p>
        <h3 >Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}

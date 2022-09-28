import React , { useState } from 'react'

export default function TextForm(props) {
  const [text, settext] = useState("");



  const ClearSpaces = () =>{
    let spaces = text.split(/[  ]+/)
    settext(spaces.join(" "))
    props.showAlert("Extra Spaces Clear Successfully!","success")
  }

  const Copytext = () =>{
    let textarea = document.getElementById('myBox')
    textarea.select()
    navigator.clipboard.writeText(textarea.value)
    props.showAlert("Text Copy Successfully!","success")
  }

  const cleartext = () =>{
    let newText = ""
    settext(newText)
    props.showAlert("Text Clear Successfully!","success")
  }

  const handleUpCase = () => {
    let newText = text.toUpperCase()
    settext(newText)
    props.showAlert("Successfully Converted To UpperCase!","success")
  }
  const handleLoCase = () => {
    let newText = text.toLowerCase()
    settext(newText)
    props.showAlert("Successfully Converted To LowerCase!","success")
  }


  // const handlecapitalize = () => {
  //      let newtext = text.replace("")
  //      settext(newtext)
  //   }

  const handleOnChange = (event) => {
    settext(event.target.value)
  }
//   const countWords =(str) => {
//   const arr = str.split(' ');

//   return arr.filter(word => word !== '').length;
// }


  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>{props.heading} </h1>
      <div className="mb-3">
            <textarea className="form-control" onChange={handleOnChange} value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white' , color:props.mode==='dark'?'white':'black'}} rows = "8" id="myBox"></textarea>
        </div>
        <button onClick={handleUpCase} className="btn btn-primary mx-2">Convert To UpperCase</button>
        <button onClick={handleLoCase} className="btn btn-primary mx-2">Convert To LowerCase</button>
        {/* <button onClick={handlecapitalize} className="btn btn-primary mx-2">Capitalize Text</button> */}
        <button onClick={cleartext} className="btn btn-primary mx-2">Clear Text</button>
        <button onClick={Copytext} className="btn btn-primary mx-2">Copy Text</button>
        <button onClick={ClearSpaces} className="btn btn-primary mx-2">Clear Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} WORDS {text.length} CHARACTERS</p>
      <p>{0.008*text.split(" ").length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter Something To Preview Here"}</p>
    </div>
    </>
  )
}

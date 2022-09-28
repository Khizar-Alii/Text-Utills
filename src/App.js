import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';
import { useState } from 'react';
import Alert from './Components/Alert';
import {
  Routes,
  Route,
} from "react-router-dom";


function App() {

  const[alert,setalert] = useState(null)

  const showAlert = (message,value) => {
    setalert({
      message:message,
      value:value
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const [mode, setmode] = useState("light");
  const [lightmode, greenmode] = useState("light");
  const toggelMode = () =>{
    if(mode === "light"){
      setmode("dark")
      document.body.style.background='#042743';
      showAlert("Dark Mode Successfully Enabled","success")
      document.title = 'TextUtills-DarkMode'
    }else{
      setmode("light")
      document.body.style.background='white';
      showAlert("Light Mode Successfully Enabled","Success")
      document.title = 'TextUtills-LightMode'
    }
  }


  const toggelGreenMode= () =>{
    if(lightmode ==='light'){
      greenmode('green')
      document.body.style.background='#00FF00';
      showAlert("Green Mode Successfully Enabled","Success")
    }else{
      greenmode('light')
      document.body.style.background='white';
      showAlert("Light Mode Successfully Enabled","Success")
    }
  }
  return (
    <>

<Navbar mode={mode} toggelMode = {toggelMode} lightmode={lightmode}  toggelGreenMode = {toggelGreenMode}/>
<Alert alert={alert}/>



     
<div className="container my-3">

      <Routes>
        <Route path="/" element={<TextForm showAlert={showAlert} heading = "Enter The Text Below : " mode = {mode}/>} />
        <Route path="/about" element={<About />} />
      </Routes>
</div>

      

    </>
  );
}

export default App;

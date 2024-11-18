import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
   setTimeout(() => {
    setAlert(null);
   }, 1500);
  }

  const removeBodyClass=()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
  }

  const toggleMode=(cls)=>{
    removeBodyClass();
    console.log(cls);
    document.body.classList.add('bg-'+cls)
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark Mode has been enabled","success");
    }else{
      setMode('light');
      document.body.style.backgroundColor='white';      
      showAlert("Light Mode has been enabled","success");
    }
  }
  return (
    <>
      <Router>
      <Navbar title="Text-Util" AboutText="About Us" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        <Routes>
        <Route path="/Text-Util-React/" element={ <TextForm showAlert={showAlert} heading="TextUtils- Word Counter, Character Counter" mode={mode}/>} />
        <Route path="/about" element={<About mode={mode}/>} />
         
        </Routes>
        {/* <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/> */}
      </div>
      </Router>
      {/* <About/> */}
     
    </>
  );
}

export default App;

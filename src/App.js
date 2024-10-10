import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";


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

  const toggleMode=()=>{
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
      {/* <Router> */}
      <Navbar title="Elanco" AboutText="About Us" mode ={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className='container my-3'>
        {/* <Routes>
        <Route path="/" element={ <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>} />
        <Route path="/about" element={<About />} />
         
        </Routes> */}
        <TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
      </div>
      {/* </Router> */}
      {/* <About/> */}
     
    </>
  );
}

export default App;

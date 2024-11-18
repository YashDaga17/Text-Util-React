// import React, { useState } from 'react'

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" />


export default function About(props) {
    // const [myStyle, setMyStyle] = useState({
    //     color: 'white',
    //     backgroundColor:'black',
    //     border: '2px white'
    // })

    let myStyle={
      color: props.mode ==='dark'?'white':'#042743',
      backgroundColor: props.mode ==='dark'?'rgb(36 74 104)':'white'
    }

 //   const [btnText, setButtonTxt] = useState("Enable Light Mode");

  //  const toggleStyle = ()=>{
  //       if(myStyle.color==='white'){
  //           setMyStyle({
  //               color: 'black',
  //               backgroundColor:'white'
  //           })
  //           setButtonTxt("Enable Dark Mode")
  //       }else{
  //           setMyStyle({
  //               color: 'white',
  //               backgroundColor:'black',
  //               border: '2px white'
  //           })
  //           setButtonTxt("Enable Light Mode")
  //       }
  //   }
   
  return (
  <div className='container' style={{color:props.mode ==='dark'?'white':'#042743'}}>
  <div className="accordion" id="accordionExample" >
    <h1 className='my-3'>About US</h1>
    <div className="accordion-item" >
      <h2 className="accordion-header">
        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          <strong>Analyze Your Text</strong>
        </button>
      </h2>
      <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
        <div className="accordion-body"style={myStyle} >
        TextUtils gives you a way to Analyze your text be it word or count characters 
        </div>
      </div>
    </div>
    <div className="accordion-item"  >
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
         <strong>Free to Use </strong> 
        </button>
      </h2>
      <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle} >
          TextUtil helps to find the number of characters and time taken to read the texts and also gives you some function to change few design. 
        </div>
      </div>
    </div>
    <div className="accordion-item" >
      <h2 className="accordion-header">
        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
         <strong>Browser Compatibility</strong>
        </button>
      </h2>
      <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
        <div className="accordion-body" style={myStyle} >
          This works on Google Chrome, Firefox, Edge.. etc.
        </div>
      </div>
    </div>

    {/* This is Dark mode Functionality */}
    {/* <div className='container'>
    <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
    </div> */}
  </div>
  </div>
  
  )
}

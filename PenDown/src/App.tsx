import './App.css'
import './index.css'
import { useState } from 'react'

let layoutOption = [<DefaultDoc />, <PageDoc />, <CornellDoc />];

function Save() {

  alert("Deez!!!!");

}

function DefaultDoc() {

  return (

    <div contentEditable = "true" className = "col-span-6 row-span-6" id = "box">Default</div>
    
  );

}

function PageDoc() {

  return (

    <>

      <div contentEditable = "true" className = "col-span-3 row-span-6" id = "box">Page</div>
      <div contentEditable = "true" className = "col-span-3 row-span-6" id = "box2">Page</div>
      
    </>

  );

}

function CornellDoc() {

  return (
    
    <>

      <div contentEditable = "true" className = "col-span-2 row-span-5" id = "box">Cornell</div>
      <div contentEditable = "true" className = "col-span-4 row-span-5" id = "box2">Cornell</div>
      <div contentEditable = "true" className = "col-span-6 row-span-1" id = "box3">Cornell</div>
      
    </>
    
  );

}

export default function App() {

  const [choice, setCount] = useState(0);

  return (

    <>
      
      

      <div className = "flex justify-between">

        <div onClick={() => { setCount(0); }}>Default Layout</div>
        <div onClick={() => { setCount(1); }}>Page Layout</div>
        <div onClick={() => { setCount(2); }}>Cornell Layout</div>
      
      </div>

      <div className = "border-4 w-[90vw] h-[90vh] text-left grid grid-cols-6 grid-rows-6">{layoutOption[choice]}</div>
      
      <div className = "border-4" onClick={Save}>Save</div>
    
    </>

  )

}
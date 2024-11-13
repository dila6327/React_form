import React, { useRef,useState,useEffect } from 'react'
import './index.css'
import Form from './assets/components/form';
import GetInfo from './assets/components/getInfo';
function App() {

const [info,setInfo]=useState({name:'',surname:'',message:''});
const nameInput=useRef();
const surnameInput=useRef();
const message=useRef();
const handleSubmit=(event)=>{
  event.preventDefault();
  setInfo({name:nameInput.current.value,surname:surnameInput.current.value,message:message.current.value})
}
 return (
    <>
   <Form handleSubmit={handleSubmit} nameInput={nameInput} surnameInput={surnameInput} message={message}/>
   <GetInfo info={info}/>
    </>
  )
}

export default App

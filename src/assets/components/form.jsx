import React from 'react'
import '../styles/form.css'
const Form = ({handleSubmit,nameInput,surnameInput,message}) => {
  return (
    <>
        <form action='' onSubmit={handleSubmit}>
      <div>
      <label htmlFor='name'>name: </label>
      <input type='text' id='name' ref={nameInput} required='required' placeholder='Enter name...' />
      </div>
      <div>
      <label htmlFor='surname'>surname: </label>
      <input type='text' id='surname' ref={surnameInput} required='required' placeholder='Enter surname...'/>
      </div>
      <div>
      <label htmlFor='message'>message: </label>
      <textarea id='mesage' ref={message} required='required' placeholder='Enter some mesaage...'></textarea>
      </div>
      <input type='submit' value='submit' className='submit' />
   
     </form>
    </>
  )
}

export default Form

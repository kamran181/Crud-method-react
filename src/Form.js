import React from 'react'
import { useState } from 'react';

const Form = () => {
   const [data ,setData] = useState({
    email : '',
    password : ''
   })

   const handleChange = (value, name) => {
    let dataa = {
        ...data,
        [name] : value
    }
    
    // console.log(formData)
    setData(dataa);
    
   }

   const handleLogin = (e) => {
     e.preventDefault()
     console.log(data)
   }
  return (
    <div>
         <form>
           
            <label>
                Enter your email:
                <input type='email' name='email' onChange={(e) => handleChange(e.target.value, e.target.name)} />
            </label>
            <label>
                Enter your password:
                <input type='password' name='password' onChange={(e) => handleChange(e.target.value, e.target.name)} />
            </label>
            <button onClick={handleLogin}>Login</button>
        </form>
    </div>
  )
}

export default Form;
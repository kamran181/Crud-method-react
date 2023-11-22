import './index.css';
import React, { useRef } from 'react'
import { useState,useEffect } from 'react'

function Register() {
  let formRef = useRef();
    const [userData , setUserData] = useState({
        fName : '',
        lName : '',
        email : '',
        password: ''
    });
    const [refreshData, setRefreshData] = useState(false);
    const [users , setUsers] = useState([]);
    const [isEdited, setIsEdited] = useState(false);

    async function getData(){
      const userss = await fetch('https://65545c6263cafc694fe65ed6.mockapi.io/users')
      
      const data = await userss.json();
         setUsers(data);
    }

    useEffect(()=>{
      getData()
  },[refreshData])

  
    const handleChange  = (value, name)=>{
         let user = {
            ...userData,
            [name] : value
         }

         setUserData(user);
         
        
    }
   
    const handleSubmit = async (e) => {
      try {
        
        e.preventDefault();
        if(!isEdited){
          const response = await fetch('https://65545c6263cafc694fe65ed6.mockapi.io/users', {
            method : 'POST',
            headers : { 
              "Content-Type": "application/json",
            },
            
            body : JSON.stringify(userData)
           }) 
  
           const result = await response.json()  
           console.log(result); 
           setUserData({
            fName : '',
            lName : '',
            email : '',
            password: ''
        });
        
        } 
        else{
         const response = await fetch(`https://65545c6263cafc694fe65ed6.mockapi.io/users/${userData.id}`,{
          method : 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
         }
         );
         const result = await response.json() 
         console.log(result);
         setIsEdited(false);
         setUserData({
          fName : '',
          lName : '',
          email : '',
          password: ''
      });
         
          
      } 
        setRefreshData(prevState => !prevState);
       // formRef.current.reset();
        console.log(isEdited);
           
         
         
      } catch (error) {
        console.log('error',{error})
        
      }


    }

    const userDelete = async(key)=>{
         try {
           
            fetch('https://65545c6263cafc694fe65ed6.mockapi.io/users/' +key,{
              method : 'DELETE',
              headers: {
                'Content-type': 'application/json; charset=UTF-8' 
               },
            })
            .then(res => res.json()) 
            .then(res => {
              
              getData()
            }
              
              )
            
           
         } catch (error) {
          console.log(error);
         }
    }

  const userUpdate = (key) => {
       setIsEdited(true);
       let filtData = users.filter(item => item.id === key)
       setUserData(filtData[0]);
      
       



    }
  return (
    <>
    <div>
    <form onSubmit={handleSubmit} ref={formRef}>
        <label>Enter your First Name:
        <input type='text' value={userData.fName} name='fName' onChange={(e) => handleChange(e.target.value, e.target.name)} />
        </label>
        <br/>
        <br/>
        <label>Enter your Last Name:
        <input type='text' value={userData.lName} name='lName' onChange={(e) => handleChange(e.target.value, e.target.name)} />
        </label>
        <br/>
        <br/>
        <label>Enter your Email:
        <input type='email' value={userData.email}  name='email' onChange={(e) => handleChange(e.target.value, e.target.name)} />
        </label>
        <br/>
        <br/>
        <label>Enter your Password :
        <input type='password' value={userData.password} name='password' onChange={(e) => handleChange(e.target.value, e.target.name)}  />
        </label>
    
    <br/>
    <br/>
    <button type='submit'>Register</button>
    </form>
    </div>
    <div className='App'>
      <table>
      <thead>
      <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>password</th>
          <th>Query</th>
      </tr>
      </thead>
      <tbody>
      {users.map((value,key)=>{
        return(
          <tr key={key}>
            <td>{value.fName}</td>
            <td>{value.lName}</td>
            <td>{value.email}</td>
            <td>{value.password}</td>
            <td><button onClick={()=>userDelete(value.id)}>Delete</button>
            <button onClick={()=> userUpdate(value.id) }>Update</button></td>
          </tr>
          
        )
      })}
      </tbody>  
      
      </table>
    </div>
    

    </>
  )
}
hdkahdk;mkm
export default Register
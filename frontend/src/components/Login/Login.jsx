import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail ] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    let handleClick = async (e) => {
        e.preventDefault();
        try{
            if(name && email && password) {
                const response = await fetch('http://localhost:8000/users/login', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password
                    })
                }) 
                const data = await response.json()
                const { message } = data;
                
                toast(message)
                if(response.ok){
                    navigate('/')
                }
            } else {
                toast('Fill In All Fields')
            }
        } catch (error){
            toast(`An error occurred: ${error.message}`)
        } finally {
            setName('')
            setEmail('')
            setPassword('')
        }
    }

  return (
    <form onSubmit={handleClick} method='POST'>
        <div className="form-group">
            <label htmlFor="name">Name</label>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name'/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={(e) => setEmail(e.target.value)}  type="email" placeholder='Your Email' />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder='Your Password'/>
        </div>

        <input type="submit" value="Submit"/>
        <ToastContainer />
    </form>
  )
}

export default Login

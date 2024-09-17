import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRpt, setPasswordRpt] = useState('')
    const navigate = useNavigate()

    let handleClick = async (e) => {
        e.preventDefault()
        try{
            if(name && email && password && passwordRpt){
                if(password === passwordRpt){
                    const response = await fetch('http://localhost:8000/users/signup', {
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

                    const data = await response.json();
                    const { message } = data;

                    toast(message)

                    if(response.ok){
                        navigate('/')
                    }
                } else {
                    toast("Passwords don't match");
                } 
            }
        } catch(error){
            toast(`An error occured: ${error.message}`)
        } finally {
            setName('')
            setEmail('')
            setPassword('')
            setPasswordRpt('')
        }
    }

  return (
    <form onSubmit={handleClick} method='POST'>
        <h1>SignUp</h1>
        <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input onChange={(e) => setName(e.target.value)} type="text" placeholder='Your Name' required/>
        </div>
        <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder='Your Email' required/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input onChange={(e) => setPassword(e.target.value)} type="password" required/>
        </div>
        <div className="form-group">
            <label htmlFor="passwordRpt">Confirm Your Password: </label>
            <input onChange={(e) => setPasswordRpt(e.target.value)} type="password" required />
        </div>
        <input type="submit" value="Submit" />

        <ToastContainer />
    </form>
  )
}

export default SignUp

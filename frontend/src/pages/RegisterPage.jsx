import React, { useState } from 'react'
import { TextField, Button } from '@mui/material'; //are to make our form
import '../styles/AuthStyle.css'
import { Link } from 'react-router-dom';
const RegisterPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName,setFirstName]  =useState('');
    const [LastName,setLastName] =useState('');
    const[loading,setLoading]=useState('');
    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }
    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
    }
    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
    }
  return (
    <div className='auth-page d-flex justify-content-center align-items-center vh-100'>
            <div className='card p-4 m-4 shadow rounded'>
                <div className='text-center mb-4'>
                    <img src='/logo192.png' width="80" alt='logo' />
                </div>
                <h3 className='text-center mb-3 text-primary font-bold'>Paradise View</h3>
                <form>
                    <TextField label='FirstName' type='text' variant='outlined' margin='normal' value={firstName} onChange={handleFirstNameChange} fullWidth/>
                    <TextField label='LastName' type='text' variant='outlined' margin='normal' value={LastName} onChange={handleLastNameChange} fullWidth/>

                    <TextField label='Email' type='email' variant='outlined' margin='normal' value={email} onChange={handleEmailChange} fullWidth />
                    <TextField label='Password' type='password' variant='outlined' margin='normal' value={password}
                        onChange={handlePasswordChange} fullWidth />
                    <div>
                        <div className='mt-3'>
                            <Button className='px-3 py-2 rounded-3' variant='contained' color='primary' type='submit' fullWidth>
                               {loading?"Registering...":"Register"}
                            </Button>
                        </div>
                        <div className='mt-2'>
                            <Link to='/login'>
                                <Button className='px-3 py-2 rounded-3' variant='outlined' color='secondary' fullWidth>
                                    Already a Member
                                </Button>
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default RegisterPage

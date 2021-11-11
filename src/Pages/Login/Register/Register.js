import { Container, TextField, Typography, Box } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import MuiButton from '../../../StyledComponents/MuiButton';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState('');
    const { registerUser } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        console.log(newLoginData)
        newLoginData[field] = value;
        setLoginData(newLoginData);

    }

    const handleOnSubmit = e => {
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }
    return (
        <div style={{
            textAlign: 'center',
            minHeight: 500,
            height: '100vh',
            marginTop: '30px'
        }}>
            <Container>
                <Box style={{
                    border: '1px solid grey', width: '45%',
                    padding: '30px 20px',
                    margin: 'auto'
                }}>
                    <Typography variant='h6' sx={{ color: '' }}>Create an Account</Typography>
                    <form style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }} onSubmit={handleOnSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            id="standard-basic"
                            name="name"
                            label="Your Name"
                            variant="standard"
                            onBlur={handleOnBlur} />

                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            id="standard-basic"
                            type="email"
                            name="email"
                            label="Email"
                            variant="standard"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            label="Password"
                            variant="standard"
                            onBlur={handleOnBlur} />
                        <TextField
                            sx={{ width: '90%', m: 2 }}
                            id="standard-basic"
                            type="password"
                            name="password2"
                            label="Confirm Password"
                            variant="standard"
                            onBlur={handleOnBlur} />
                        <MuiButton sx={{ width: '90%', m: 2 }} type="submit">Create an Account</MuiButton>
                    </form>
                    <Typography variant='text'>Already have an account?
                        <NavLink style={{
                            textDecorationColor: '#F63E7B',
                            color: '#F63E7B'
                        }} to='/login'>
                            Login
                        </NavLink>
                    </Typography>

                </Box>
            </Container>
        </div>
    );
};

export default Register;
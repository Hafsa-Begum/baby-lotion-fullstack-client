import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import { NavLink } from 'react-router-dom';

const ErrorPage = () => {
    const useStyle = makeStyles({
        errorButton: {
            backgroundColor: '#000 !important'
        }
    })
    const { errorButton } = useStyle();
    return (
        <div style={{ backgroundColor: 'rgba(246, 62, 123)', height: '100vh', paddingTop: '30px', textAlign: 'center', color: '#fff' }}>
            <Typography variant="h1" style={{ fontWeight: 600, fontSize: '150px', marginTop: '150px' }}>404</Typography>
            <Typography variant='body1' sx={{ lineHeight: 2, mb: 4 }}>The page you search in not available</Typography>
            <NavLink style={{ textDecoration: 'none' }} to='/home'><Button className={errorButton} variant="contained">Go Back</Button></NavLink>
        </div>
    );
};

export default ErrorPage;
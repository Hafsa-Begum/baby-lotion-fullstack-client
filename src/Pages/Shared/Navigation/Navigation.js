import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import MuiButton from '../../../StyledComponents/MuiButton';
import useAuth from '../../../hooks/useAuth';

export default function Navigation() {
    const { user, logOut } = useAuth()
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Jerin's Parlour
                    </Typography>
                    <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/home'>
                        <Button color="inherit">Home</Button>
                    </NavLink>

                    {
                        user.email ? <>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/myBooking'>
                                <Button color="inherit">My Booking</Button>
                            </NavLink>
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/adminDashboard'>
                                <Button color="inherit">Admin Dashboard</Button>
                            </NavLink>
                            <MuiButton onClick={logOut}>Logout</MuiButton> <span>{user.displayName}</span>
                        </> :
                            <NavLink style={{ textDecoration: 'none', color: 'white' }} to='/login'>
                                <Button color="inherit">Login</Button>
                            </NavLink>
                    }
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

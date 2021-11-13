import { TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import MuiButton from '../../../StyledComponents/MuiButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://secret-castle-32920.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert('Admin created successfully!')
                }
            })
        e.preventDefault();
        e.target.reset();

    }

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '50px'
        }}>
            <Typography sx={{ mb: 10 }} variant="p">Enter email whom you want to make admin</Typography>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '30%', m: 2 }}
                    id="standard-basic"
                    type="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    onBlur={handleOnBlur} />
                <br />
                <MuiButton type="submit">Make Admin</MuiButton>
            </form>
        </div>
    );
};

export default MakeAdmin;
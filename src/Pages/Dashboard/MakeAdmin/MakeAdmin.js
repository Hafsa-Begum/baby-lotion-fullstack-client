import { TextField } from '@mui/material';
import React, { useState } from 'react';
import MuiButton from '../../../StyledComponents/MuiButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert('Admin created successfully!')
                }
            })
        e.preventDefault();

    }

    return (
        <div style={{
            textAlign: 'center',
            marginTop: '50px'
        }}>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '30%', m: 2 }}
                    id="standard-basic"
                    type="email"
                    name="email"
                    label="Email"
                    variant="standard"
                    onBlur={handleOnBlur} />
                <MuiButton type="submit">Make Admin</MuiButton>
            </form>
        </div>
    );
};

export default MakeAdmin;
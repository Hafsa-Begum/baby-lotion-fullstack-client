import { TextField } from '@mui/material';
import React, { useState } from 'react';
import MuiButton from '../../../StyledComponents/MuiButton';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        e.preventDefault();
        alert('ok')
    }

    return (
        <div>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%', m: 2 }}
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
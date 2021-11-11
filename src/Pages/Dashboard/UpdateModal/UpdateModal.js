import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import useAuth from '../../../hooks/useAuth';
import { TextField } from '@mui/material';
import MuiButton from '../../../StyledComponents/MuiButton';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const UpdateModal = ({ product, openUpdate, handleUpdateClose, setUpdateSuccess }) => {
    const { _id, name, quantity, price, image, description } = product;
    const [updateInfo, setUpdateInfo] = useState();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...updateInfo };
        newInfo[field] = value;
        setUpdateInfo(newInfo);
    }

    const handleUpdateProductSubmit = e => {
        //collect order info
        // const updateData = {
        //     ...updateInfo
        // }
        const data = { _id };
        //send to the server
        fetch('http://localhost:5000/updateProduct', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    setUpdateSuccess(true);
                    handleUpdateClose();
                }
            });

        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openUpdate}
            onClose={handleUpdateClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openUpdate}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ color: '#F63E7B' }}>
                        Update The Product
                    </Typography>
                    <form onSubmit={handleUpdateProductSubmit}>

                        <TextField

                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            defaultValue={name}
                            size="small"
                        />
                        <TextField

                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="quantity"
                            onBlur={handleOnBlur}
                            defaultValue={quantity}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="price"
                            onBlur={handleOnBlur}
                            defaultValue={price}
                            size="small"
                        />
                        <textarea
                            rows='6'
                            style={{ width: '100%' }}
                            id="outlined-size-small"
                            name="description"
                            onBlur={handleOnBlur}
                            defaultValue={description}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '100%', m: 1 }}
                            id="outlined-size-small"
                            name="image"
                            onBlur={handleOnBlur}
                            defaultValue={image}
                            size="small"
                        />

                        <br />

                        <MuiButton type="submit" >Submit</MuiButton>

                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default UpdateModal;
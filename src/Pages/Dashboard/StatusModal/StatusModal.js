import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
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

const StatusModal = ({ singleProduct, openOrder, handleOrderClose, setOrderSuccess }) => {
    const { _id, productName, status } = singleProduct;
    const [orderStatus, setOrderStatus] = useState('');

    const handleOnBlur = e => {
        setOrderStatus(e.target.value);
        console.log(e.target.value)
    }

    const handleOrderSubmit = e => {

        // const id = { _id };
        console.log(_id)
        //send to the server
        fetch(`http://localhost:5000/updateStatus/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ orderStatus })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // if (data.insertedId) {
                //     setOrderSuccess(true);
                //     handleOrderClose();
                // }
            })


        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openOrder}
            onClose={handleOrderClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openOrder}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{}}>
                        Shipped the order of  <span style={{ color: '#F63E7B' }}>{productName}</span>
                    </Typography>
                    <form onSubmit={handleOrderSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            size="small"
                            onBlur={handleOnBlur}
                            defaultValue={status}
                        />

                        <MuiButton type="submit" >Submit</MuiButton>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default StatusModal;
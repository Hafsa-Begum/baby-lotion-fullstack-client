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

const OrderModal = ({ singleProduct, openOrder, handleOrderClose, setOrderSuccess }) => {
    const { name, price, image } = singleProduct;
    const { user } = useAuth();
    const initialInfo = { customerName: user.displayName, email: user.email, phone: '', address: '', status: 'pending' };
    const [orderInfo, setOrderInfo] = useState(initialInfo);
    const today = new Date();
    const date = today.toLocaleDateString();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...orderInfo };
        newInfo[field] = value;
        setOrderInfo(newInfo);
    }

    const handleOrderSubmit = e => {
        //collect order info
        const orderData = {
            ...orderInfo,
            productImage: image,
            productPrice: price,
            productName: name,
            date
        };
        console.log(orderData)
        //send to the server
        fetch('https://secret-castle-32920.herokuapp.com/addOrders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    setOrderSuccess(true);
                    handleOrderClose();
                }
            });

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
                    <Typography id="transition-modal-title" variant="h6" component="h2" sx={{ color: '#F63E7B' }}>
                        {name}
                    </Typography>
                    <form onSubmit={handleOrderSubmit}>
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            placeholder={date}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            placeholder={price}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            placeholder={image}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="patientName"
                            onBlur={handleOnBlur}
                            placeholder={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder={user.email}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            placeholder="Phone Number"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '90%', m: 1 }}
                            id="outlined-size-small"
                            name="address"
                            onBlur={handleOnBlur}
                            placeholder="Your Address"
                            size="small"
                        />

                        <MuiButton type="submit" >Submit</MuiButton>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default OrderModal;
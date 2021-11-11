import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MuiButton from '../../../StyledComponents/MuiButton';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email]);

    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to cancel order?')
        if (proceed) {
            fetch(`http://localhost:5000/deleteMyOrder/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount) {
                        alert('Your order is cancelled.');
                        const remaining = myOrders.filter(order => order._id !== id);
                        setMyOrders(remaining);
                    }
                })
        }
    }
    return (
        <div style={{ textAlign: 'center', minHeight: 500, height: '100vh' }}>
            <Container>
                <Typography variant='h3' sx={{
                    my: 10,
                    fontWeight: 600
                }}>My <span style={{ color: '#F63E7B' }}>Ordered</span> Products <span style={{ color: '#F63E7B' }}>{myOrders.length}</span></Typography>
                <Grid container spacing={2} columns={{ xs: 12, md: 12 }}>
                    {
                        myOrders.map(product => <Grid key={product._id} item xs={12} md={4} lg={4}>
                            <Box sx={{ mx: 3, mb: 3 }}>
                                <img style={{ width: '50%', height: '200px' }} src=
                                    {product?.productImage} alt="" />
                                <Typography variant='h5' sx={{ my: 2, fontWeight: 600 }}>{product?.productName?.slice(0, 25)}</Typography>
                                <Typography variant='h4' style={{ color: '#F63E7B' }}>${product?.productPrice}</Typography>
                                <Typography variant='body1' sx={{ my: 2 }}>{product?.date}</Typography>
                                <MuiButton style={{ marginRight: '15px' }} >{product?.status}</MuiButton>
                                <Button onClick={() => handleCancelOrder(product?._id)} variant="contained" color="error">Cancel Order</Button>
                            </Box>
                        </Grid>
                        )
                    }
                </Grid>

            </Container>

        </div>
    );
};

export default MyOrders;
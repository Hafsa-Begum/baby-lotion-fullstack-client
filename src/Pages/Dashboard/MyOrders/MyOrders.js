import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MuiButton from '../../../StyledComponents/MuiButton';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://secret-castle-32920.herokuapp.com/myOrders/${user.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [user.email]);

    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure, you want to cancel order?')
        if (proceed) {
            fetch(`https://secret-castle-32920.herokuapp.com/deleteMyOrder/${id}`, {
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
                    mt: 5,
                    mb: 10,
                    fontWeight: 600
                }}>My <span style={{ color: '#F63E7B' }}>Ordered</span> Products <span style={{ color: '#F63E7B' }}>{myOrders.length}</span></Typography>
                <Grid container spacing={2} columns={{ xs: 12, md: 12 }}>
                    {
                        myOrders.map(product => <Grid key={product._id} item xs={12} md={6} lg={6}>
                            <Box sx={{ mx: 3, mb: 3 }}>
                                <Grid container spacing={2} columns={{ xs: 12, sm: 12, md: 12, lg: 12 }} >

                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        {
                                            product.status === 'pending' ? <Button style={{ marginRight: '15px' }} variant='outlined' >pending</Button> :
                                                <MuiButton style={{ marginRight: '15px' }} >shipped</MuiButton>
                                        }

                                        <Button onClick={() => handleCancelOrder(product?._id)} variant="contained" color="error">Cancel Order</Button>
                                        <Typography variant='h5' sx={{ my: 2, fontWeight: 600 }}>{product?.productName}</Typography>
                                        <Typography variant='h4' style={{ color: '#F63E7B' }}>Price: ${product?.productPrice}</Typography>
                                        <Typography variant='body1' sx={{ my: 2 }}>Order On: {product?.date}</Typography>

                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6} lg={6}>
                                        <img style={{ width: '100%', height: '200px' }} src=
                                            {product?.productImage} alt="" />
                                    </Grid>
                                </Grid>
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
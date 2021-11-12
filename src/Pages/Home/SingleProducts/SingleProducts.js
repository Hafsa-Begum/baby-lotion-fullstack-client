import { Alert, Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MuiButton from '../../../StyledComponents/MuiButton';
import OrderModal from '../OrderModal/OrderModal';

const SingleProducts = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();
    const style = {
        minHeight: 500,
        // height: '100vh',
        display: 'flex',
        alignItems: 'center',
        marginBottom: '40px'
    }


    useEffect(() => {
        fetch(`https://secret-castle-32920.herokuapp.com/singleProducts/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [id]);

    const handleGoBack = () => {
        history.goBack();
    }

    const [orderSuccess, setOrderSuccess] = useState(false);
    const [openOrder, setOrderOpen] = React.useState(false);
    const handleOrderOpen = () => setOrderOpen(true);
    const handleOrderClose = () => setOrderOpen(false);
    return (
        <div style={style}>
            <Container>
                {orderSuccess && <Alert severity="success">Your order is placed successfully!</Alert>}
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: '50%', hight: '500px' }} width='100%' src={singleProduct?.image} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>Quantity: {singleProduct?.quantity} <span style={{ marginLeft: 40 }}>Price: ${singleProduct?.price}</span></Typography>
                        <Typography variant='h3' sx={{ fontWeight: 600, color: '#F63E7B' }}>{singleProduct?.name}</Typography>
                        <Typography variant='body1' sx={{ lineHeight: 2, my: 3 }}>{singleProduct?.description}</Typography>
                        <MuiButton onClick={handleOrderOpen}>Place Order</MuiButton>
                        <Button onClick={handleGoBack} variant="outlined" style={{ marginLeft: '50px' }}>Go Back</Button>
                    </Grid>
                </Grid>
                <OrderModal
                    setOrderSuccess={setOrderSuccess}
                    singleProduct={singleProduct}
                    openOrder={openOrder}
                    handleOrderClose={handleOrderClose}
                ></OrderModal>
            </Container>
        </div>
    );
};

export default SingleProducts;
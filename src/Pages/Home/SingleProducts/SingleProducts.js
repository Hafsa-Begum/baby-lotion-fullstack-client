import { Button, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import MuiButton from '../../../StyledComponents/MuiButton';

const SingleProducts = () => {
    const [singleProduct, setSingleProduct] = useState({});
    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        fetch(`http://localhost:5000/singleProducts/${id}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [id]);
    const style = {
        minHeight: 500,
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }
    const handleGoBack = () => {
        history.goBack();
    }
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: '50%' }} width='100%' src={singleProduct?.image} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>Quantity: {singleProduct?.quantity} <span style={{ marginLeft: 40 }}>Price: ${singleProduct?.price}</span></Typography>
                        <Typography variant='h3' sx={{ fontWeight: 600, color: '#F63E7B' }}>{singleProduct?.name}</Typography>
                        <Typography variant='body1' sx={{ lineHeight: 2, my: 3 }}>{singleProduct?.description}</Typography>
                        <MuiButton>Place Order</MuiButton>
                        <Button onClick={handleGoBack} variant="outlined" style={{ marginLeft: '50px' }}>Go Back</Button>
                    </Grid>


                </Grid>
            </Container>
        </div>
    );
};

export default SingleProducts;
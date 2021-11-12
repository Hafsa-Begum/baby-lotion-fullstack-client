import { Container, Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react';
import salesImg from '../../../images/sales-img.jpg';
import MuiButton from '../../../StyledComponents/MuiButton';
//import bg from '../../../images/appointmentbg.png'
const SalesOffer = () => {
    const useStyle = makeStyles({
        root: {
            background: `linear-gradient(#3A4256,#3A4256)`,
            backgroundBlendMode: 'overlay',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            alignItems: 'center',
            marginBottom: 200,
            marginTop: 200
        }
    })
    const { root } = useStyle()
    return (
        <div style={{ marginTop: '80px', }}>
            <Container style={{ marginLeft: '0px !important' }}>
                <Typography variant='h3' sx={{
                    my: 10,
                    fontWeight: 600,
                    textAlign: 'center'
                }}>Sales <span style={{ color: "#F63E7B" }}>Offer</span></Typography>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} sm={12} md={6} lg={6} style={{ backgroundColor: '#F63E7B' }}>
                        <Box style={{ paddingRight: '10px' }}>
                            {/* <img src="https://i.ibb.co/6WYGWX7/jonathan-borba-Cg-W Tq-Yx-HEkg-unsplash.jpg" alt="" width="100%" style={{ borderRadius: '50%', height: '550px', }} /> */}
                            <img src={salesImg} alt="" width="100%" style={{ borderRadius: '50%', height: '550px', }} />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} sx={{ px: 10 }}>
                        <Typography variant="h3" color="#F63E7B">50% Sales Offer</Typography>
                        <Typography variant="h2" sx={{ fontWeight: 600, mt: 2 }} >We Make Shopping Easy</Typography>
                        <Typography variant="body1" sx={{ my: 3, }}> You can believe us for your little ones care. We provide quality products to make sure of soft, soothing and healtier skin of your sushine. </Typography>
                        <MuiButton>Learn more</MuiButton>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default SalesOffer;
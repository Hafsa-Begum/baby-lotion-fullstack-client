import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';
import banner from '../../../images/banner.png';
import MuiButton from '../../../StyledComponents/MuiButton';

const Banner = () => {
    const style = {
        backgroundColor: 'rgba(246, 62, 123, .1)',
        display: 'flex',
        alignItems: 'center',
        marginTop: '0px'
    }
    return (
        <div style={style}>
            <Container>
                <Grid container spacing={2} sx={{ alignItems: 'center' }}>
                    <Grid item xs={12} md={6} lg={6}>
                        <Typography variant='h6' sx={{ fontWeight: 600, mb: 2 }}>BY NATURE BABY CARE</Typography>
                        <Typography variant='h3' sx={{ fontWeight: 600 }}>Your Baby Deserves <br /> The Best Care</Typography>
                        <Typography variant='body1' sx={{ lineHeight: 2, my: 3 }}>The skin of the babies is very delicate as well as very sensitive so you should pamper the baby's skin with the baby lotion. Baby lotion are specially designed for the tender skin of babies.</Typography>
                        <NavLink style={{ textDecoration: 'none' }} to='/explore'>
                            <MuiButton>Order Now</MuiButton>
                        </NavLink>
                    </Grid>
                    <Grid item xs={12} md={6} lg={6}>
                        <img style={{ borderRadius: '50%' }} width='100%' src={banner} alt="" />
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Banner;
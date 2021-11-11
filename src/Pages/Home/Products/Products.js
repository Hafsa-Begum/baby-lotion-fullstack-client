import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../StyledComponents/MuiButton';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles({
    product: {
        marginBottom: '30px',
        '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            borderRadius: '20px'
        }
    }
})

const Products = () => {
    const [products, setProducts] = useState([]);
    const classes = useStyles();
    useEffect(() => {
        fetch('http://localhost:5000/sixProducts')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <div style={{ textAlign: 'center' }}>
            <Container>
                <Typography variant='h3' sx={{
                    my: 10,
                    fontWeight: 600
                }}>Popular <span style={{ color: '#F63E7B' }}>Products</span></Typography>
                <Grid container spacing={2} columns={{ xs: 12, md: 12 }}>
                    {
                        products.map(product => <Grid key={product._id} className={classes.product} item xs={12} md={4} lg={4}>
                            <Box sx={{ mx: 3, mb: 3 }}>
                                <img style={{ width: '50%', height: '200px' }} src=
                                    {product.image} alt="" />
                                <Typography variant='h5' sx={{ my: 2, fontWeight: 600 }}>{product.name.slice(0, 25)}</Typography>
                                <Typography variant='h4' style={{ color: '#F63E7B' }}>${product.price}</Typography>
                                <Typography variant='body1' sx={{ my: 2 }}>{product.description.slice(0, 100)}</Typography>
                                <NavLink style={{ textDecoration: 'none' }} to={`/products/${product._id}`}>
                                    <MuiButton >Order Now</MuiButton>
                                </NavLink>

                            </Box>
                        </Grid>
                        )
                    }
                </Grid>
                <NavLink style={{ textDecoration: 'none' }} to='/explore'>
                    <MuiButton sx={{ width: "30%" }} >Explore More Products</MuiButton>
                </NavLink>

            </Container>

        </div>
    );
};

export default Products;
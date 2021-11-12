import React, { useState, useEffect } from 'react';
import { Container, Grid, Box, Typography, Rating } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    ratingDesign: {
        color: '#F63E7B !important',

    },
    review: {
        '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
            borderRadius: '20px',
            backgroundColor: 'rgba(246, 62, 123, .5)',
            color: '#fff'
        }
    }
})

const Reviews = () => {
    const [reviews, setReviews] = useState();
    const classes = useStyles();

    useEffect(() => {
        fetch('https://secret-castle-32920.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div style={{ textAlign: 'center', minHeight: 500, backgroundColor: 'rgba(246, 62, 123, .1)' }}>
            <Container sx={{ pt: 8, mt: 4 }}>
                <Typography variant='h3' sx={{
                    my: 10,
                    fontWeight: 600
                }}>Reviews</Typography>

                <Grid container spacing={2} columns={{ xs: 12, md: 12, lg: 12 }}>
                    {
                        reviews?.map(review => <Grid item xs={12} md={4} lg={4}>
                            <Box className={classes.review} sx={{ mx: 3, p: 4 }}>
                                <Grid container spacing={2} columns={{ xs: 12, md: 12, lg: 12 }} sx={{ mb: 2 }}>
                                    <Grid item xs={12} md={4} lg={4}>
                                        <img style={{ borderRadius: '50%', maxHeight: '80px' }} src={review.image} width='100%' alt="" />

                                    </Grid>
                                    <Grid item xs={12} md={8} lg={8}>
                                        <Box>
                                            <Typography color='#F63E7B' variant='h6'> {review.name}</Typography>
                                            <Typography variant='body1'> {review.designation}</Typography>
                                            <Rating className={classes.ratingDesign} sx={{ mt: 1 }} name="half-rating" defaultValue={review.rating} precision={0.5} />
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Typography variant='body1'>
                                    {review.comments}
                                </Typography>

                            </Box>

                        </Grid>)
                    }
                </Grid>

            </Container>
        </div>
    );
};

export default Reviews;
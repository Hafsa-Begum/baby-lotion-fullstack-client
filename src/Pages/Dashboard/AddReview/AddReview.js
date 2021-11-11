import { Container, Typography, Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import MuiButton from '../../../StyledComponents/MuiButton';

const AddReview = () => {
    const [review, setReview] = useState({});
    const { user } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newReview = { ...review };
        console.log(newReview)
        newReview[field] = value;
        setReview(newReview);
    }

    const handleReviewSubmit = e => {
        const reviewData = {
            ...review,
            name: user.displayName

        };

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Your Review is added')
                }
            })

        e.preventDefault()
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <Container>
                <Typography variant="h4">Add Your Valuable Review</Typography>
                <Box>
                    <form onSubmit={handleReviewSubmit}>
                        <TextField
                            disabled
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            placeholder={user.email}
                            size="small"
                        />
                        <TextField
                            disabled
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            placeholder={user.displayName}
                            size="small"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="image"
                            onBlur={handleOnBlur}
                            placeholder="Your Image Url"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="designation"
                            onBlur={handleOnBlur}
                            placeholder="Your Designation"
                            size="small"
                        />
                        <textarea
                            rows='6'
                            style={{ width: '50%', margin: 'inherit' }}
                            id="outlined-size-small"
                            name="comments"
                            onBlur={handleOnBlur}
                            defaultValue="Write Your Comments"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="rating"
                            onBlur={handleOnBlur}
                            placeholder="Give Rating(0-5)"
                            size="small"
                        />

                        <br />

                        <MuiButton type="submit" >Submit</MuiButton>
                    </form>
                </Box>

            </Container>
        </div>
    );
};

export default AddReview;
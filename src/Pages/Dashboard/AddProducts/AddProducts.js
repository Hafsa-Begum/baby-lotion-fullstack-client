import { Container, Typography, Box, TextField } from '@mui/material';
import React, { useState } from 'react';
import MuiButton from '../../../StyledComponents/MuiButton';

const AddProducts = () => {
    const [addProducts, setAddProducts] = useState({});


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newProductData = { ...addProducts };
        console.log(newProductData)
        newProductData[field] = value;
        setAddProducts(newProductData);
    }

    const handleProductSubmit = e => {
        const productData = {
            ...addProducts
        };

        fetch('http://localhost:5000/addProducts', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Your Product is added')
                    setAddProducts({})
                }
            })

        e.preventDefault()
    }
    return (
        <div style={{ textAlign: 'center' }}>
            <Container>
                <Typography variant="h4">Add Products</Typography>
                <Box>
                    <form onSubmit={handleProductSubmit}>
                        <TextField

                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="name"
                            onBlur={handleOnBlur}
                            placeholder="Product Name"
                            size="small"
                        />
                        <TextField

                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="quantity"
                            onBlur={handleOnBlur}
                            placeholder="Product Quantity"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="price"
                            onBlur={handleOnBlur}
                            placeholder="Product Price"
                            size="small"
                        />
                        <textarea
                            rows='6'
                            style={{ width: '50%', margin: 'inherit' }}
                            id="outlined-size-small"
                            name="description"
                            onBlur={handleOnBlur}
                            placeholder="Product Description"
                            size="small"
                        />
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="outlined-size-small"
                            name="image"
                            onBlur={handleOnBlur}
                            placeholder="Image-URL"
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

export default AddProducts;
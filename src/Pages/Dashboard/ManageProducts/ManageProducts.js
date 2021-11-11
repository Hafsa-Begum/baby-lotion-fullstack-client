import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';


const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allProducts')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to cancel order?')
        if (proceed) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
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
                        const remaining = manageProducts.filter(order => order._id !== id);
                        setManageProducts(remaining);
                    }
                })
        }
    }

    const handleUpdateProduct = id => {
        alert('Do you want update')
    }
    return (
        <div>
            <h2>Manage All Products {manageProducts.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Image</TableCell>
                            <TableCell align="right">Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Quantity</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageProducts.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img style={{ height: '100px', width: '100px' }} src={row?.image} alt="" />
                                </TableCell>
                                <TableCell align="right">{row?.name}</TableCell>
                                <TableCell align="right">${row?.price}</TableCell>
                                <TableCell align="right">{row?.quantity}</TableCell>
                                <TableCell align="right">
                                    <IconButton onClick={() => handleUpdateProduct(row?._id)} aria-label="create" size="large" >
                                        < CreateIcon fontSize="inherit" />
                                    </IconButton>

                                    <IconButton onClick={() => handleDeleteProduct(row?._id)} aria-label="delete" size="large">
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;
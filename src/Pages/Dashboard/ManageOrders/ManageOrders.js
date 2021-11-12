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
import { Button } from '@mui/material';


const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);

    useEffect(() => {
        fetch('https://secret-castle-32920.herokuapp.com/manageAllOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [])

    const handleDeleteOrder = id => {
        const proceed = window.confirm('Are you sure, you want to cancel order?')
        if (proceed) {
            fetch(`https://secret-castle-32920.herokuapp.com/deleteOrder/${id}`, {
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
                        const remaining = manageOrders.filter(order => order._id !== id);
                        setManageOrders(remaining);
                    }
                })
        }
    }

    const handleOrderShipped = id => {
        console.log(id)
        fetch('https://secret-castle-32920.herokuapp.com/update/orderStatus', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(id)
        })
            .then(res => res.json)
            .then(data => {
                console.log(data)
            })
    }

    return (
        <div>
            <h2>Manage All Orders {manageOrders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ordered By</TableCell>
                            <TableCell align="right">Address</TableCell>
                            <TableCell align="right">Phone</TableCell>
                            <TableCell align="right">Date</TableCell>
                            <TableCell align="right">Products</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageOrders.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row?.customerName}
                                </TableCell>
                                <TableCell align="right">{row?.address}</TableCell>
                                <TableCell align="right">{row?.phone}</TableCell>
                                <TableCell align="right">{row?.date}</TableCell>
                                <TableCell align="right">{row?.productName}</TableCell>
                                <TableCell align="right">{row?.status}</TableCell>
                                <TableCell align="right">
                                    <Button onClick={() => handleOrderShipped(row?._id)}> Shipped</Button>
                                    <IconButton onClick={() => handleDeleteOrder(row?._id)} aria-label="delete" size="large">
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

export default ManageOrders;
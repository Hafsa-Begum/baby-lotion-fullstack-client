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
import { Button, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';


const ManageOrders = () => {
    const [manageOrders, setManageOrders] = useState([]);
    const [control, setControl] = useState(false)
    const [status, setStatus] = useState('');
    const useStyle = makeStyles({
        tableHead: {
            color: '#F63E7B !important'
        }
    })

    const { tableHead } = useStyle();

    useEffect(() => {
        fetch('https://secret-castle-32920.herokuapp.com/manageAllOrders')
            .then(res => res.json())
            .then(data => setManageOrders(data))
    }, [control])

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
        setStatus('pending')
        console.log(id)
        fetch(`https://secret-castle-32920.herokuapp.com/updateStatus/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ status })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    alert('Your order is Shipped')
                    setControl(!control)
                }
            })
    }

    return (
        <div>
            <h2>Manage All Orders {manageOrders.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={tableHead}>Ordered By</TableCell>
                            <TableCell className={tableHead} align="right">Address</TableCell>
                            <TableCell className={tableHead} align="right">Phone</TableCell>
                            <TableCell className={tableHead} align="right">Date</TableCell>
                            <TableCell className={tableHead} align="right">Products</TableCell>
                            <TableCell className={tableHead} align="right">Status</TableCell>
                            <TableCell className={tableHead} align="right">Action</TableCell>
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
                                <TableCell align="right">{
                                    row?.status === 'pending' ? <Typography variant='body1' color='primary'>pending</Typography> :
                                        <Typography variant='body1' color='#F63E7B'>shipped</Typography>
                                }

                                </TableCell>
                                <TableCell align="right">
                                    <Button className={tableHead} onClick={() => handleOrderShipped(row?._id)}>Update</Button>
                                    <IconButton color="error" onClick={() => handleDeleteOrder(row?._id)} aria-label="delete" size="large">
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
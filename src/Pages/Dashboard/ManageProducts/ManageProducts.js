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
import { Alert } from '@mui/material';
import { makeStyles } from '@mui/styles';


const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
    const useStyle = makeStyles({
        tableHead: {
            color: '#F63E7B !important'
        }
    })

    const { tableHead } = useStyle();

    useEffect(() => {
        fetch('https://secret-castle-32920.herokuapp.com/allProducts')
            .then(res => res.json())
            .then(data => setManageProducts(data))
    }, [])

    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete product?')
        if (proceed) {
            fetch(`https://secret-castle-32920.herokuapp.com/deleteProduct/${id}`, {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setUpdateSuccess(true)
                        const remaining = manageProducts.filter(order => order._id !== id);
                        setManageProducts(remaining);
                    }
                })
        }
    }

    const [updateSuccess, setUpdateSuccess] = useState(false);
    // const [openUpdate, setUpdateOpen] = React.useState(false);
    // const handleUpdateOpen = () => setUpdateOpen(true);
    // const handleUpdateClose = () => setUpdateOpen(false);

    return (
        <div>
            <h2>Manage All Products {manageProducts.length}</h2>
            {updateSuccess && <Alert severity="success">Your product is deleted successfully!</Alert>}
            <TableContainer component={Paper}>
                <Table sx={{}} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell className={tableHead}>Image</TableCell>
                            <TableCell className={tableHead} align="right">Name</TableCell>
                            <TableCell className={tableHead} align="right">Price</TableCell>
                            <TableCell className={tableHead} align="right">Quantity</TableCell>
                            <TableCell className={tableHead} align="right">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {manageProducts.map((product) => (
                            <TableRow
                                key={product._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img style={{ height: '100px', width: '100px' }} src={product?.image} alt="" />
                                </TableCell>
                                <TableCell align="right">{product?.name}</TableCell>
                                <TableCell align="right">${product?.price}</TableCell>
                                <TableCell align="right">{product?.quantity}</TableCell>
                                <TableCell align="right">
                                    <IconButton color="error" onClick={() => handleDeleteProduct(product?._id)} aria-label="delete" size="large">
                                        <DeleteIcon fontSize="inherit" />
                                    </IconButton>
                                </TableCell>
                                {/* <UpdateModal
                                    setUpdateSuccess={setUpdateSuccess}
                                    product={product}
                                    openUpdate={openUpdate}
                                    handleUpdateClose={handleUpdateClose}
                                >
                                </UpdateModal> */}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;
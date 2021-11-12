import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { NavLink, useRouteMatch, Switch, Route } from 'react-router-dom';
import { Button } from '@mui/material';
import ManageOrders from '../ManageOrders/ManageOrders';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddProducts from '../AddProducts/AddProducts';
import ManageProducts from '../ManageProducts/ManageProducts';
import useAuth from '../../../hooks/useAuth';
import MuiButton from '../../../StyledComponents/MuiButton';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import AddReview from '../AddReview/AddReview';
import AdminRoute from '../../Login/AdminRoute/AdminRoute'
import AddBoxRoundedIcon from '@mui/icons-material/AddBoxRounded';

const drawerWidth = 240;

function AdminDashboard(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <NavLink style={{
                textDecoration: 'none'
            }} to='/home'><MuiButton> Go Home</MuiButton></NavLink>
            <br />
            <Divider />
            <NavLink style={{
                textDecoration: 'none',

            }} to={`${url}`}><Button>My Orders</Button></NavLink> <br />
            <NavLink style={{
                textDecoration: 'none'
            }} to={`${url}/payment`}><Button>Payment</Button></NavLink> <br />
            <NavLink style={{
                textDecoration: 'none'
            }} to={`${url}/addReview`}><Button><AddBoxRoundedIcon />  Add Review</Button></NavLink> <br />
            {
                admin &&
                <Box>
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageOrders`}><Button>Manage All Orders</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/addProducts`}><Button> <AddBoxRoundedIcon /> Add Products</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageProducts`}><Button>Manage All Products</Button></NavLink>
                    <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button>Make Admin</Button></NavLink>

                </Box>
            }

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography style={{ marginRight: 'auto' }} variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                    <Box>
                        {
                            user.email &&
                            <>
                                <MuiButton onClick={logOut}>Logout</MuiButton>  <span>{user.displayName}</span>
                            </>
                        }
                    </Box>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <MyOrders />
                    </Route>
                    <Route exact path={`${path}/payment`}>
                        <Payment />
                    </Route>
                    <Route exact path={`${path}/addReview`}>
                        <AddReview />
                    </Route>
                    <AdminRoute exact path={`${path}/manageOrders`}>
                        <ManageOrders />
                    </AdminRoute>

                    <AdminRoute path={`${path}/addProducts`}>
                        <AddProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts />
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin />
                    </AdminRoute>
                </Switch>

            </Box>
        </Box>
    );
}

AdminDashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AdminDashboard;

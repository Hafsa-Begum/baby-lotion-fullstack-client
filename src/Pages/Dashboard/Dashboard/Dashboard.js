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
import { Button, List, ListItem, ListItemText } from '@mui/material';
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
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PaymentsIcon from '@mui/icons-material/Payments';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import StoreIcon from '@mui/icons-material/Store';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ReviewsIcon from '@mui/icons-material/Reviews';
import PersonIcon from '@mui/icons-material/Person';
import VerifiedUserSharpIcon from '@mui/icons-material/VerifiedUserSharp';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';

const drawerWidth = 240;

function AdminDashboard(props) {
    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            color: '#000 !important'
        },
        designIcon: {
            color: '#F63E7B !important'
        },
        dashboardNav: {
            backgroundColor: 'rgba(246, 62, 123, .6) !important'
        },
        dashboardIcon: {
            color: '#fff !important'
        },
        dashboard: {
            [theme.breakpoints.down('sm')]: {
                marginRight: 'auto !important'
            }
        }
    })

    const { navIcon: navButton, designIcon, dashboardNav, dashboardIcon, dashboard } = useStyle();

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
            <List>
                {user.email && !admin && <>
                    <ListItem><ListItemText> <span style={{ fontWeight: 500 }}>{user.displayName}</span><br /> </ListItemText></ListItem>
                    <ListItem><ListItemText><IconButton className={designIcon}><PersonIcon /></IconButton> User </ListItemText></ListItem>
                </>
                }

                {
                    user.email && admin &&
                    <>
                        <ListItem><ListItemText>  <span style={{ fontWeight: 500 }}>{user.displayName}</span></ListItemText></ListItem>
                        <ListItem><ListItemText><IconButton className={designIcon}><VerifiedUserSharpIcon /></IconButton>Admin </ListItemText></ListItem>
                    </>
                }
                <ListItem button >

                    <NavLink style={{
                        textDecoration: 'none'
                    }} to='/home'><MuiButton>
                            <HomeIcon />
                            Home</MuiButton></NavLink>
                </ListItem>


                <Divider />
                <ListItem button >
                    <IconButton className={designIcon}>
                        <ShoppingBasketIcon />
                    </IconButton>
                    <NavLink style={{
                        textDecoration: 'none',

                    }} to={`${url}`}><Button className={navButton}>My Orders</Button></NavLink>
                </ListItem>
                <ListItem button >
                    <IconButton className={designIcon}>
                        <PaymentsIcon />
                    </IconButton>
                    <NavLink style={{
                        textDecoration: 'none'
                    }} to={`${url}/payment`}><Button className={navButton}>Payment</Button></NavLink>
                </ListItem>


                <ListItem button >
                    <IconButton className={designIcon}>
                        <ReviewsIcon />
                    </IconButton>
                    <NavLink style={{
                        textDecoration: 'none'
                    }} to={`${url}/review`}><Button className={navButton}> Review</Button></NavLink>
                </ListItem>
                <Divider />
                {
                    admin &&
                    <Box>
                        <ListItem button >
                            <IconButton className={designIcon}>
                                <StoreIcon />
                            </IconButton>
                            <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageOrders`}><Button className={navButton}>Manage Orders</Button></NavLink>
                        </ListItem>

                        <ListItem button >
                            <IconButton className={designIcon}>
                                <AddBoxRoundedIcon />
                            </IconButton>
                            <NavLink style={{ textDecoration: 'none' }} to={`${url}/addProducts`}><Button className={navButton}>  Add Products</Button></NavLink>
                        </ListItem>

                        <ListItem button >
                            <IconButton className={designIcon}>
                                <SettingsApplicationsIcon />
                            </IconButton>
                            <NavLink style={{ textDecoration: 'none' }} to={`${url}/manageProducts`}><Button className={navButton}>Manage Products</Button></NavLink>
                        </ListItem>

                        <ListItem className={navButton} button >
                            <IconButton className={designIcon}>
                                <AdminPanelSettingsIcon />
                            </IconButton>
                            <NavLink style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button className={navButton}>Make Admin</Button></NavLink>
                        </ListItem>


                    </Box>
                }
                <Divider />

                {
                    user.email &&

                    <ListItem button >
                        <IconButton>

                        </IconButton>
                        <MuiButton onClick={logOut}><LogoutIcon />Logout</MuiButton>

                    </ListItem>


                }

            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar className={dashboardNav}
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
                        className={dashboard}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        <IconButton className={dashboardIcon}><DashboardIcon /></IconButton> Dashboard
                    </Typography>

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
                    <Route exact path={`${path}/review`}>
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

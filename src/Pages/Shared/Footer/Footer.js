import { Container, Grid, IconButton, List, ListItemText, Box, Typography } from '@mui/material';
import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { makeStyles } from '@mui/styles';
import MuiButton from '../../../StyledComponents/MuiButton';
import logo from '../../../images/logo (2).png'


const useStyle = makeStyles({
    socialIcon: {
        color: '#F63E7B !important',
        border: '1px solid #F63E7B !important',
        margin: '20px 10px 30px 0 !important',
        '&:hover': {
            background: '#F63E7B !important',
            color: '#fff !important'
        }
    },
    emailIcon: {
        color: '#F63E7B !important'
    }
})

const Footer = () => {
    const { socialIcon, emailIcon } = useStyle();
    return (
        <footer style={{
            backgroundColor: 'rgba(246, 62, 123, .6)',
            color: '#fff',
            paddingBottom: '40px',
            paddingTop: '30px'
        }}>
            <Container>
                <Grid container spacing={3} sx={{ my: 3 }}>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>

                            <ListItemText><Box style={{ backgroundColor: '#F63E7B', borderRadius: '50%', display: 'inline-block', }}>
                                <img src={logo} alt="" style={{ margin: '5px 10px 0px 10px', height: '50px' }} /> <br />

                            </Box><Typography color="#F63E7B" variant="h6" sx={{ mb: 2 }}>Pink <span style={{ color: '#000' }}>Babs</span> </Typography></ListItemText>
                            <ListItemText>The skin of the babies is very delicate as well as very sensitive so you should pamper the baby's skin with the baby lotion.</ListItemText>

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#F63E7B', mb: 1 }}><Typography variant="h6">Contact Us</Typography></ListItemText>
                            <IconButton className={emailIcon}><CallIcon /></IconButton>
                            <MuiButton variant="contained">+8065432145</MuiButton>
                            <ListItemText><IconButton className={emailIcon}><EmailIcon /></IconButton> info.pink@babs.com</ListItemText>
                            <ListItemText></ListItemText>
                            <ListItemText ><Typography variant="h6">Follow Us:</Typography></ListItemText>
                        </List>
                        <IconButton className={socialIcon}>
                            <FacebookIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <LinkedInIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <TwitterIcon />
                        </IconButton>
                        <IconButton className={socialIcon}>
                            <InstagramIcon />
                        </IconButton>

                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#F63E7B', mb: 1 }}><Typography variant="h6">My Account</Typography></ListItemText>
                            <ListItemText >Track my Order</ListItemText>
                            <ListItemText>Terms of use</ListItemText>
                            <ListItemText>Wishlist</ListItemText>
                            <ListItemText>Submit your feedback</ListItemText>

                        </List>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={3}>
                        <List>
                            <ListItemText sx={{ color: '#F63E7B', mb: 1 }}><Typography variant="h6">Customer Service</Typography></ListItemText>
                            <ListItemText>Help & Contact Us</ListItemText>
                            <ListItemText>Returns & Refunds</ListItemText>
                            <ListItemText>Online Stores</ListItemText>
                            <ListItemText>Terms & Condition</ListItemText>

                        </List>
                    </Grid>

                </Grid>
                <Typography sx={{ textAlign: 'center', pt: 4, mb: 4 }} variant="subtitle2">Copyright &copy; {new Date().getFullYear()} All Rights Reserved</Typography>
            </Container>
        </footer>
    );
};

export default Footer;
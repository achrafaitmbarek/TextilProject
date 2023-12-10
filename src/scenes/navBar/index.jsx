import { AppBar, Box, Drawer, Fade, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography, } from '@mui/material'
import React from 'react'
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styled from '@emotion/styled'
import CustomButton from 'components/CustomButton';
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from '@mui/icons-material/Close';

const drawerWidth = "100%";


const NavBar = () => {
    const navigate = useNavigate()
    const navLinks = [
        { label: 'Acceuil', path: 'acceuil' },
        { label: 'About us', path: 'about' },
        {
            label: 'Secteurs',
            path: 'secteurs',
        },
        { label: 'Contact us', path: 'contact' }
    ];
    const Img = styled('img')({
        marginRight: 'auto',
        display: 'block',
        maxWidth: '60%',
        maxHeight: '60%',
        cursor: 'pointer',
    });

    const [elevation, setElevation] = useState(0);
    const [navHeigh, setNavHeight] = useState("150px");
    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 0;
            setElevation(isScrolled ? 1 : 0);
            setNavHeight(isScrolled ? "100px" : "150px");

        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(perv => !perv);
    }
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ pt: { xs: 10, md: 18 }, width: '90%', mx: 'auto' }}>
            <List>
                {navLinks.map((item, idx) => (
                    <ListItem key={idx} disablePadding>
                        <ListItemButton >
                            <ListItemText onClick={() => navigate(`/${item.path}`)} primary={item.label} sx={{
                                fontWeight: 600, color: 'black',
                                '&:hover': {
                                    color: "#eb212d",
                                }
                            }} />
                        </ListItemButton>
                    </ListItem>
                ))}
                <Link to={'/contact'}><CustomButton style={{ marginTop: 30 }} label='Demander un RDV' />
                </Link>
            </List>
        </Box>
    );

    return (
        <Box sx={{ height: { xs: '60px', md: '150px' }, background: 'white', textAlign: 'center' }}>
            <AppBar component='nav' elevation={elevation} sx={{ height: { xs: "60px", md: navHeigh }, background: 'inherit', transition: "height 0.5s", zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                <Toolbar component='div' sx={{ width: "90%", margin: 'auto', background: 'inherit' }}>
                    <Img src={logo} alt='logo' onClick={() => {
                        navigate('/')
                    }} />
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{
                            ml: 'auto', display: { lg: "none" }, position: 'relative',
                        }}
                    >
                        {mobileOpen ? (
                            <CloseIcon sx={{ color: 'red' }} fontSize="large" />
                        ) : (
                            <MenuIcon sx={{ color: 'red' }}
                                fontSize="large" />
                        )}
                    </IconButton>

                    <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: '3rem', alignItems: 'center' }} >
                        {navLinks.map((link, idx) => (
                            <Box>
                                <Link key={idx} to={`/${link.path}`} ><Typography variant="button" sx={{
                                    fontWeight: 600, color: 'black',
                                    '&:hover': {
                                        color: "#eb212d",
                                    }
                                }}>{link.label}</Typography></Link>
                            </Box>

                        ))}

                        <Link to={'/contact'}><CustomButton label='Demander un RDV' />
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box component="nav">
                <Drawer
                    open={mobileOpen}
                    variant="temporary"
                    TransitionComponent={Fade}
                    transitionDuration={{
                        enter: 500,
                        exit: 300
                    }}
                    onClose={handleDrawerToggle}
                    transitionProps={{
                        direction: "right"
                    }}
                    ModalProps={{
                        keepMounted: true // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: "block", lg: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: drawerWidth,
                            backgroundColor: "white",
                        },
                        zIndex: (theme) => theme.zIndex.drawer
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

export default NavBar
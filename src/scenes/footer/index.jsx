import { Box, Divider, Grid, Stack, ThemeProvider, Typography, createTheme, responsiveFontSizes } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo.png'
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import EmailIcon from '@mui/icons-material/Email';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import { Link } from 'react-router-dom';

const CustomDivider = () => {
    return (
        <Divider sx={{
            mb: '1rem', backgroundColor: '#ffffffa9',
            width: '100%',
            height: '1.5px',
        }} variant="fullWidth" />
    )
}

const defaultTheme = createTheme();
const theme = responsiveFontSizes(defaultTheme);

const Footer = () => {
    const links = [
        { title: 'Textile Medicale', link: '/textile-medicale' },
        { title: 'vêtement de protection', link: '/vetement-de-protection' },
        { title: 'Hôtellerie/ restauration', link: '/hotellerie-restauration' },
        { title: 'Education et Uniforme', link: '/education-uniforme' },
        { title: 'EPl', link: '/epi' },
        { title: 'Matières et accessoires', link: '/matieres-accessoires' }];
    return (
        <ThemeProvider theme={theme}>
            <Grid container direction='row' spacing={4} sx={{ pt: '2rem', mt: 1, width: '100%', mx: 'auto', background: '#222222', color: '#d3d3d3' }}>
                <Grid item container spacing={0} xs={12} md={4} >
                    <Stack spacing={4}>
                        <img src={logo} alt="logo" width={"60%"} />
                        <Typography variant='h6'>
                            <strong>PROVETEX</strong>  est une entreprise la
                            fabrication de vêtements de
                            travail de haute qualité.
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Stack spacing={4}>
                        {links.map((link, index) => (
                            <Typography key={index} variant='h6'>
                                <Link to={link.link} style={{ color: '#d3d3d3' }}>
                                    {link.title}
                                </Link>
                            </Typography>
                        ))}
                    </Stack>
                </Grid>
                <Grid item xs={12} md={5}>
                    <Stack spacing={5}>
                        <Box display="flex" >
                            <Typography variant="h6" sx={{ marginRight: 1 }}>
                                <AddLocationIcon sx={{ mr: 1 }} />  Avenue Ali Yata -ex chemin Aïn Borja,1°ét. n°1 CASABLANCA
                            </Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="h6" sx={{ marginRight: 1, display: 'flex', alignItems: 'center' }}>
                                <LocalPhoneIcon sx={{ mr: 1 }} /> +212 522-350018
                            </Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="h6" sx={{ marginRight: 1, display: 'flex', alignItems: 'center' }}>
                                <EmailIcon sx={{ mr: 1 }} /> info@provetex.ma
                            </Typography>
                        </Box>
                        <Box display="flex">
                            <Typography variant="h5" sx={{ marginRight: 1, display: 'flex', alignItems: 'center' }}>
                                <QueryBuilderIcon sx={{ mr: 1 }} /> 08:30-12:30, 14:30-18:30
                            </Typography>
                        </Box>
                    </Stack>
                </Grid>

                <Grid item xs={12} justifyContent="center">
                    <CustomDivider />
                </Grid>
                <Grid item container direction={'row'} xs={12} spacing={0} sx={{ mb: 2 }} >
                    <Grid item md={8} xs={0} />
                    <Grid item xs={12} md={4} >
                        <YouTubeIcon sx={{ fontSize: 40, marginRight: '13px' }} />
                        <LinkedInIcon sx={{ fontSize: 40 }} />
                    </Grid>
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}

export default Footer

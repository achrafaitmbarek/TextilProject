import React from 'react'
import { Grid, Box, Typography, createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material'
import { Divider } from '@mui/material'
import poster1 from '../../assets/poster1.png'
import poster2 from '../../assets/poster2.png';
import poster3 from '../../assets/poster3.png';
import Collaborateur from '../../assets/Collaborateur.png';
import Collaborateur1 from '../../assets/Collaborateur1.png'
import Stepper from 'components/Stepper';
import CustomBox from 'components/CustomBox';

const CustomTypography = ({ label }) => {
    return (
        <Typography
            variant='h2'
            sx={{
                paddingLeft: '1.4rem',
                paddingBottom: '4px',
                transform: 'translateY(10px)'
            }}
        >
            {label}
            <span
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '0',
                    transform: 'translateY(-50%)',
                    width: '2px',
                    height: '65%',
                    backgroundColor: '#004485',
                    content: "''",
                }}
            />
            <span
                style={{
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    backgroundColor: '#004485',
                    content: "''",
                }}></span>
        </Typography>
    )
}
const CustomDivider = () => {
    return (
        <Grid container>
            <Grid item xs={4} />
            <Grid item xs={8} >
                <Divider sx={{
                    mt: '5rem', backgroundColor: '#004485',
                    width: { xs: '100%' },
                    height: '3px',
                    marginLeft: 'auto'
                }} variant="inset" />
            </Grid>
        </Grid>
    )
}
const theme = createTheme();
theme.typography.h1 = {
    fontSize: '48px',
    [theme.breakpoints.down('md')]: {
        fontSize: '36px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '21px',
    },
};
theme.typography.h2 = {
    fontSize: '24px',
    [theme.breakpoints.down('md')]: {
        fontSize: '18px',
    },
    [theme.breakpoints.down('sm')]: {
        fontSize: '10.5px',
    },
};
const defaultTheme = createTheme();
const themeRes = responsiveFontSizes(defaultTheme);

const AboutPage = () => {

    return (<Box container>
        <ThemeProvider theme={theme}>
            <CustomBox>
                <Grid container direction='column' spacing={2}
                    sx={{
                        marginTop: {
                            xs: '50px',
                            sm: '176px',
                        },
                        marginBottom: { xs: '50px', sm: '100px', md: '200px' },
                    }}>
                    <Grid item>
                        <Typography variant='h1' fontWeight="800">
                            PROVETEX est une entreprise de premier plan
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant='h1' fontWeight="400">
                            dans la fabrication de vêtements de travail de haute qualité.
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container spacing={6} direction='row' sx={{ alignItems: 'center', justifyContent: 'center' }}>
                    <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
                        <img src={poster1} alt="poster assets" style={{
                            width: '90%', height: '100%'
                        }} />
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h1' sx={{ color: '#eb212d', fontSize: '5rem' }} >
                            190
                        </Typography>
                        <br />
                        <Typography variant='h2'> Entreprises utilisent nos services dans toute l'Europe</Typography>

                    </Grid>
                </Grid>
                <CustomDivider />
            </CustomBox>
            <Grid container direction='row' sx={{ alignItems: 'center', padding: 5, justifyContent: 'center', marginY: '100px', color: 'white', background: '#004485' }}>
                <Grid item container direction='column' xs={3}>
                    <Typography variant='h2 '>
                        Depuis notre
                    </Typography>
                    <Typography variant='h2' mt={2}>
                        Création en <span style={{ color: '#eb212d' }}>2017</span>
                    </Typography>
                </Grid>
                <Grid item xs={1} />
                <Grid item container direction='column' xs={8}>
                    <Typography variant="body2" sx={{ fontSize: { sm: "1.5rem", lg: '2rem', xl: '2.5rem' } }}>
                        Nous avons su nous imposer comme une
                        référence dans le secteur grâce
                        à notre expertise solide et notre passion pour le
                        travail bien fait.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={10} direction='column' sx={{ marginY: '100px' }}>
                <img src={poster2} alt='poster assets' style={{ width: '100%' }} />
            </Grid>
            <Grid container xs={12} direction='row' sx={{ margin: "auto", width: '95%' }} >
                <Grid item xs={6} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h1' color='red'>00</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <CustomTypography label="collaborateurs assurent un service fiable et
                                des idées durables" />
                </Grid>
                <Grid item xs={6} sm={3} sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Typography variant='h1' color='red'>0000</Typography>
                </Grid>
                <Grid item xs={6} sm={3}>
                    <CustomTypography label="agences dans 14 pays constituent le réseau
                                international de Mewa" />
                </Grid>
            </Grid>
            <CustomBox>
                <Grid container direction='row' sx={{ alignItems: 'center', justifyContent: 'center', marginY: '140px' }}>
                    <Grid item container direction='column' xs={3}>
                        <Typography variant='h4'>
                            Depuis 1908
                        </Typography>
                    </Grid>
                    <Grid item xs={1} />
                    <Grid item container direction='column' xs={8}>
                        <Typography variant="p" sx={{ fontSize: { sm: "1.5rem", lg: '2rem', xl: '2.5rem' } }}>
                            Notre équipe est composée de professionnels
                            qualifiés et passionnés, qui mettent tout en
                            œuvre pour offrir à nos clients des produits
                            exceptionnels. Nous utilisons les dernières
                            technologies et les meilleures matières
                            premières pour garantir une qualité supérieure
                            à chaque étape de la production.
                        </Typography>
                    </Grid>
                </Grid>
                <CustomDivider />
                <Grid container direction='row' sx={{ marginY: '140px', justifyContent: 'center' }}>
                    <Grid item>
                        <Stepper />
                    </Grid>
                </Grid>
            </CustomBox>
        </ThemeProvider>
        {/* from here customize the mobile view */}
        <ThemeProvider theme={themeRes}>
            <Grid container direction='column' >
                <Grid item>
                    <Typography variant='h4' sx={{
                        padding: '4%',
                        backgroundColor: 'red',
                        color: 'white',
                        '@media (max-width: 768px)': {
                            padding: '3%',
                            fontSize: '1.2rem',
                        },
                        '@media (max-width: 480px)': {
                            padding: '2%',
                        },
                    }}>
                        NOS PRODUITS SONT UTILISÉS PAR DE NOMBREUSES INDUSTRIES, NOTAMMENT L'AGRICULTURE,LA CONSTRUCTION,
                        L'INDUSTRIE MANUFACTURIÈRE ET LES SERVICES D'URGENCE. NOUS PROPOSONS UNE LARGE GAMME DE VÊTEMENTS DE TRAVAIL,
                        Y COMPRIS DES COMBINAISONS, DES GILETS, DES PANTALONS, DES VESTES, DES CHAUSSURES DE SÉCURITÉ ET DES ACCESSOIRES.
                    </Typography>
                </Grid>
                <Grid container direction='row' sx={{ marginY: '80px' }}>
                    <img src={Collaborateur} alt='poster' style={{ width: '70%', margin: "auto" }} />
                </Grid>
                <Grid container direction='row' sx={{ marginY: '80px' }}>
                    <img src={Collaborateur1} alt='poster' style={{ width: '70%', margin: "auto" }} />
                </Grid>
                <Grid container direction='row' sx={{ justifyContent: 'center' }}>
                    <Typography variant='h4' sx={{
                        padding: '5%', '@media (max-width: 768px)': {
                            fontSize: '1.2rem',
                        },
                    }}>
                        NOUS NOUS ENGAGEONS À OFFRIR UN EXCELLENT SERVICE A LA
                        CLIENTELE, A DES PRIX COMPETITIFS. NOUS TRAVAILLONS AVEC NOS
                        CLIENTS POUR COMPRENDRE LEURS BESOINS ET LEUR PROPOSER DES
                        SOLUTIONS ADAPTÉES A LEURS BESOINS SPECIFIQUES. CHEZ PROVETEX,
                        NOUS SOMMES FIERS DE NOTRE ENGAGEMENT ENVERS LA QUALITE, LA
                        SECURITE ET LA SATISFACTION DE NOS CLIENTS.
                    </Typography>
                </Grid>
            </Grid>

            <Grid container direction='row' sx={{ marginY: '140px' }}>
                <img src={poster3} alt='poster' style={{ width: '100%' }} />
            </Grid>
            <Grid container direction='row' sx={{ marginY: '120px' }}>
                <Grid item xs={12}>
                    <CustomBox>
                        <Typography variant='h4' sx={{
                            '@media (max-width: 768px)': {
                                fontSize: '1.2rem',
                            },
                        }}>
                            Chez PROVETEX, nous accordons une grande importance la satisfaction
                            de nos clients. Nous travaillons en étroite collaboration avec eux pour
                            comprendre leurs besoins et leur proposer des solutions personnalisées
                            qui répondent à leurs exigences spécifiques. Nous sommes engagés à
                            offrir un service de qualité supérieure à des prix compétitifs.
                        </Typography>
                    </CustomBox>
                </Grid>
            </Grid>
            <Grid container direction='row' sx={{
                padding: { xs: '2%', lg: '4%' },
                background: '#004485', color: 'white'
            }}>
                <Typography variant='h4' sx={{
                    '@media (max-width: 768px)': {
                        fontSize: '1.2rem',
                    },
                }}>
                    <strong>N</strong>ous sommes convaincus que nos produits de qualité supérieure et
                    notre engagement envers la satisfaction de nos clients feront de <strong>PROVETEX</strong> le choix parfait pour vos besoins en vêtements de
                    travail. Nous vous remercions de votre intérêt pour notre entreprise
                    et sommes impatients de travailler avec vous pour fournir des
                    produits exceptionnels qui répondront à vos attentes.
                </Typography>
            </Grid>
        </ThemeProvider>
    </Box>

    )
}

export default AboutPage
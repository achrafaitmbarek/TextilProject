import { Box, Divider, Grid, Typography } from '@mui/material'
import CustomBox from 'components/CustomBox'
import CustomButton from 'components/CustomButton'
import React from 'react'

import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

import primPic from '../../assets/primPicHome.png'
import homepic1 from '../../assets/hompic1.jpg'
import homepic2 from '../../assets/hompic2.jpg'
import homepic3 from '../../assets/homePic3.jpg'

import BasicCard from 'components/BasicCard'

import picture4 from '../../../src/assets/VETEMENTS  DE PROTECTION/Haut/haut5/pic4.png';
import picture5 from '../../../src/assets/VETEMENTS  DE PROTECTION/pantalon/pantalon1/pic (4).png';
import picture6 from '../../../src/assets/VETEMENTS  DE PROTECTION/Ensemble/Ensemble1/pic (4).png';

import picture10 from '../../../src/assets/Hôtellerie- restauration/Veste cuisine 1.png';
import picture11 from '../../../src/assets/Hôtellerie- restauration/Pantalon cuisine 1.png';
import picture12 from '../../../src/assets/Hôtellerie- restauration/Tablier devant 1.png';
import { Link } from 'react-router-dom';
import { red } from '@mui/material/colors';


const HomePage = () => {
    const secteurs = [
        {
            name: 'Vêtement de protection ',
            types: ['Haut',
                'Pantalons',
                'Combinaisons'],
            pictures: [
                picture4,
                picture5,
                picture6,
            ],
            path: '/vetement-de-protection',
        },
        {
            name: 'Hôtellerie/ restauration',
            types: ['Veste cuisine',
                'Pantalon',
                'Tablier de devant',
                'Chemise, Cravate',
                'Calot',
                'Tenue Spa',
                'Tenue Restauration',],
            pictures: [
                picture10,
                picture11,
                picture12,
            ],
            path: '/hotellerie-restauration',
        }
    ]
    return (<Box container>
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
                    <Typography variant='h3' fontWeight="800">
                        Vêtements de travail et lavettes d’essuyage industriel
                    </Typography>
                </Grid>
                <Grid item >
                    <Typography variant='h3' fontWeight="400">
                        En Textilsharing Provetex - la solution durable.
                    </Typography>
                </Grid>
                <Grid item
                    sx={{
                        marginTop: {
                            xs: '20px',
                            sm: '40px',
                        },
                    }}>
                    <CustomButton label='DEMANDER UN RDV' />
                </Grid>
            </Grid>
        </CustomBox>

        <img src={primPic} alt="" width='100%' height='100%' />

        <Grid container direction='row' sx={{ alignItems: 'center', padding: 5, justifyContent: 'center', marginY: '100px' }}>
            <Grid item container direction='column' xs={3}>
                <Typography variant="body2" sx={{ fontSize: { xl: '1.2rem' } }}>
                    Utiliser les textiles professionnels sans les acheter. <br />
                    Le confort à tous les niveaux.
                </Typography>
            </Grid>
            <Grid item xs={1} />
            <Grid item container direction='column' xs={8}>
                <Typography variant="body2" sx={{ fontSize: { sm: "0.5rem", lg: '1rem', xl: '2rem' } }}>
                    Selon le principe « utiliser plutôt que posséder » vous vous concentrez sur votre
                    métier pendant que nous nous occupons de la gestion complète de vos textiles professionnels.
                </Typography>
            </Grid>
        </Grid>
        <CustomBox>
            <BasicCard secteurs={secteurs} />
            <Box sx={{ m: 8, p: 8 }}>
                <Typography variant='h4' sx={{ fontWeight: 600, textAlign: 'center' }}>
                    aucun souci et dans le respect de l'environnement. Vêtements de travail
                    et autres textiles professionnels en circuit fermé.
                </Typography>
            </Box>
            <Grid container spacing={8}>
                <Grid item xs={6}>
                    <img src={homepic2} alt="catalogue online" width='100%' />
                    <Typography variant='h6' sx={{ fontWeight: 600, my: 3 }}>
                        Catalogue en ligne pour les clients Provetex en exclusivité
                    </Typography>
                    <Typography variant='h6'>
                        <Link to='/about'>
                            Carriére
                        </Link>
                        <Divider sx={{
                            backgroundColor: '#004485',
                            width: { xs: '10%' },
                            height: '3px',
                        }} />
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <img src={homepic1} alt="etre humain" width='100%' />
                    <Typography variant='h6' sx={{ fontWeight: 600, my: 3 }}>
                        L'être humain est au premier plan.
                    </Typography>
                    <Typography variant='h6'>
                        <Link to='/about'>
                            Entreprise
                        </Link>
                        <Divider sx={{
                            backgroundColor: '#004485',
                            width: { xs: '12%' },
                            height: '3px',
                        }} />
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={8} sx={{ my: 8 }}>
                <Grid item xs={8}>
                    <img src={homepic3} width='100%' alt='' />
                </Grid>
                <Grid item xs={4} container direction={'column'}>
                    <Grid item xs={8} />
                    <Grid item xs={4} >
                        <Typography variant='h4' sx={{ fontWeight: 600, mb: 4 }}>
                            Assumer ses responsabilités, par conviction.
                        </Typography>
                        <Typography variant='h5'>
                            <Link to='/about'>
                                Entreprise
                            </Link>
                            <Divider sx={{
                                backgroundColor: '#004485',
                                width: { xs: '20%' },
                                height: '3px',
                            }} />
                        </Typography>
                    </Grid>

                </Grid>
            </Grid>
        </CustomBox>
        <Grid container spacing={2} sx={{ background: '#80808014', py: 5, my: 10, justifyContent: 'center' }}>
            <Grid item container >
                <Grid item xs={4} />
                <Grid item xs={4} >
                    <Typography variant='h5' sx={{ fontWeight: 600, my: 1, textAlign: 'center' }}>
                        Comment pouvons-nous vous conseiller ?
                    </Typography>
                    <Typography variant='body1' sx={{ my: 5, textAlign: 'center' }}>
                        Nous pratiquons des conseils personnalisés. Et veillons à ce que vous receviez les textiles appropriés,
                        qui répondent à toutes les exigences de votre secteur.
                    </Typography>
                </Grid>
                <Grid item xs={4} />
            </Grid>
            <Grid item container sx={{ textAlign: 'center' }}>
                <Grid item xs={3} />
                <Grid item xs={3} sx={{ background: 'white', m: 2, p: 8 }}>
                    <MailOutlineIcon sx={{ fontSize: 60 }} />
                    <Typography variant='h6' sx={{ fontWeight: 600 }}>
                        Demander un RDV
                    </Typography>
                    <Typography variant='body2' sx={{ my: 4 }} >
                        Nous vous contacterons dans les plus brefs délais pour convenir d'un conseil personnalisé.
                    </Typography>
                    <CustomButton label='Formulaire de contact' />
                </Grid>
                <Grid item xs={3} sx={{ background: 'white', m: 2, p: 8 }}>
                    <PhoneAndroidIcon sx={{ fontSize: 60 }} />
                    <Typography variant='h6' sx={{ fontWeight: 600 }}>
                        Demander un RDV
                    </Typography>
                    <Typography variant='body2' sx={{ my: 4 }} >
                        Nous vous contacterons dans les plus brefs délais pour convenir d'un conseil personnalisé.
                    </Typography>
                    <CustomButton label='00.00.00.00' />
                </Grid>
                <Grid item xs={3} />
            </Grid>
        </Grid>
    </Box >
    )
}

export default HomePage
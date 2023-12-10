import { ThemeProvider } from '@emotion/react';
import { Grid, Typography, createTheme } from '@mui/material';
import BasicCard from 'components/BasicCard';
import CustomBox from 'components/CustomBox';
import React from 'react';

import picture1 from '../../../src/assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA BLEU/pic4.png';
import picture2 from '../../../src/assets/UNIFORME MEDICALE/BLOUSE BLANCHE POUR MEDECIN/pic (2).png';
import picture3 from '../../../src/assets/UNIFORME MEDICALE/VESTE PLANCHE EN POLAIRE/pic (2).png';

import picture4 from '../../../src/assets/VETEMENTS  DE PROTECTION/Haut/haut5/pic4.png';
import picture5 from '../../../src/assets/VETEMENTS  DE PROTECTION/pantalon/pantalon1/pic (4).png';
import picture6 from '../../../src/assets/VETEMENTS  DE PROTECTION/Ensemble/Ensemble1/pic (4).png';

import picture7 from '../../../src/assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS PARKA/pic (3).png';
import picture8 from '../../../src/assets/UNIFORMES MILITAIRE/tenue militaire/pic (5).png';
import picture9 from '../../../src/assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise2/pic (4).png'

import picture10 from '../../../src/assets/Hôtellerie- restauration/Veste cuisine 1.png';
import picture11 from '../../../src/assets/Hôtellerie- restauration/Pantalon cuisine 1.png';
import picture12 from '../../../src/assets/Hôtellerie- restauration/Tablier devant 1.png';

import picture13 from '../../../src/assets/Education et Uniforme/Cardigon1.png';
import picture14 from '../../../src/assets/Education et Uniforme/Jupe 1.png';
import picture15 from '../../../src/assets/Education et Uniforme/Pantalon 2.png';

import picture16 from '../../../src/assets/EPI/Casque-de-sécurité.jpg';
import picture17 from '../../../src/assets/EPI/harnais.png';
import picture18 from '../../../src/assets/EPI/ChaussureBotte.png';

import picture19 from '../../../src/assets/Matières et accessoires/Cuir.jpg';
import picture20 from '../../../src/assets/Matières et accessoires/Nomex .jpg';
import picture21 from '../../../src/assets/Matières et accessoires/Nylon.jpg';

import picture22 from '../../../src/assets/Textile medicale/Linge de lit médical 1.png';
import picture23 from '../../../src/assets/Textile medicale/Linge de lit médical 2.jpg';


const SecteursPage = () => {

    const secteurs = [
        {
            name: 'UNIFORME MEDICALE',
            types: ['Pyjamas ',
                'Blouses',
                'Veste'],
            pictures: [
                picture1,
                picture2,
                picture3,
            ],
            path: '/uniforme-medicale',
        },
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
            name: 'Vêtements militaires',
            types: ['Parkas',
                'Tenue (Jacket ou veste)',
                'Combinaisons militaires',
                'Gilet Par balle',
                'Tenue de Sport',
                'Burnos',],
            pictures: [
                picture7,
                picture8,
                picture9,
            ],
            path: '/vetements-militaires',
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
        },
        {
            name: 'Education et Uniforme',
            types: ['Cardigons',
                'Jupe',
                'Pantalons',
                'Chemise',
                'Veste',
                'Tenue de sport',],
            pictures: [
                picture13,
                picture14,
                picture15,
            ],
            path: '/education-uniforme',
        }, {
            name: 'EPI',
            types: ['Casque',
                'Harnais',
                'Chaussure/Botte',
                'Gants',
                'Lunettes',
                'Antibruit',
                'Gilet fleurissant',],
            pictures: [
                picture16,
                picture17,
                picture18,
            ],
            path: '/epi'
        }, {
            name: 'Matières et accessoires',
            types: ['Cuir',
                'Nomex',
                'Nylon',
                'polyester',
                'polypropylene',
                'Matériaux réfléchissants',
                'coton',],
            pictures: [
                picture19,
                picture20,
                picture21,
            ],
            path: '/matieres-accessoires',
        }, {
            name: 'Textile Medicale',
            types: ['Linge De Lit Medical', 'Linge de lit médical'],
            pictures: [
                picture22,
                picture23,
            ],
            path: '/textile-medicale',
        },
    ]
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
    return (
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
                    <Typography variant="h1" fontWeight="800">
                        <span>
                            <span className="hoveredTit">SE</span>
                            CT
                        </span>
                        EURS
                    </Typography>
                </Grid>
                <BasicCard secteurs={secteurs} />
            </CustomBox>
        </ThemeProvider>
    )
}

export default SecteursPage
import { Grid, Typography } from '@mui/material'
import CustomBox from 'components/CustomBox'
import React from 'react'
import Room from 'components/Room'

import primaryPic from '../../assets/UNIFORMES MILITAIRE/primaryPic.jpg'
import pic1 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS CHEVRON/pic (1).png'
import pic2 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS CHEVRON/pic (2).png'
import pic3 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS CHEVRON/pic (3).png'
import pic4 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS CHEVRON/pic (4).png'

import pic5 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS PARKA/pic (1).png'
import pic6 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS PARKA/pic (2).png'
import pic7 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS PARKA/pic (3).png'
import pic8 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS PARKA/pic (4).png'
import pic9 from '../../assets/UNIFORMES MILITAIRE/Treillis Militaire/TREILLIS PARKA/pic (5).png'

import pic10 from '../../assets/UNIFORMES MILITAIRE/tenue militaire/pic (1).png'
import pic11 from '../../assets/UNIFORMES MILITAIRE/tenue militaire/pic (2).png'
import pic12 from '../../assets/UNIFORMES MILITAIRE/tenue militaire/pic (3).png'
import pic13 from '../../assets/UNIFORMES MILITAIRE/tenue militaire/pic (4).png'
import pic14 from '../../assets/UNIFORMES MILITAIRE/tenue militaire/pic (5).png'
import pic15 from '../../assets/UNIFORMES MILITAIRE/tenue militaire/pic (6).png'
import pic16 from '../../assets/UNIFORMES MILITAIRE/tenue militaire/pic (7).png'
import pic17 from '../../assets/UNIFORMES MILITAIRE/tenue militaire/pic (8).png'

import pic18 from '../../assets/UNIFORMES MILITAIRE/PULLCVER PANTALON/pic (1).png'
import pic19 from '../../assets/UNIFORMES MILITAIRE/PULLCVER PANTALON/pic (2).png'
import pic20 from '../../assets/UNIFORMES MILITAIRE/PULLCVER PANTALON/pic (3).png'

import pic21 from '../../assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise1/pic (1).png'
import pic22 from '../../assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise1/pic (2).png'
import pic23 from '../../assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise1/pic (3).png'
import pic24 from '../../assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise1/pic (4).png'

import pic25 from '../../assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise2/pic (1).png'
import pic26 from '../../assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise2/pic (2).png'
import pic27 from '../../assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise2/pic (3).png'
import pic28 from '../../assets/UNIFORMES MILITAIRE/Chemise Dulskip/chemise2/pic (4).png'

import pic29 from '../../assets/UNIFORMES MILITAIRE/veste moto/pic (1).png'
import pic30 from '../../assets/UNIFORMES MILITAIRE/veste moto/pic (2).png'
import pic31 from '../../assets/UNIFORMES MILITAIRE/veste moto/pic (3).png'
import pic32 from '../../assets/UNIFORMES MILITAIRE/veste moto/pic (4).png'




export const VetementMilitaires = () => {

    const types = [
        {
            name: 'TREILLIS Militaire',
            primPic: primaryPic,
            subTypes: [
                {
                    name: 'TREILLIS CHEVRON',
                    pic: [pic1, pic2, pic3, pic4]
                },
                {
                    name: 'TREILLIS parka',
                    pic: [pic5, pic6, pic7, pic8, pic9]
                }
            ]
        }, {
            name: 'Tenue militaire',
            primPic: primaryPic,
            pic: [pic10, pic11, pic12, pic13, pic14, pic15, pic16, pic17]
        }, {
            name: 'Pullcver pantalon',
            primPic: primaryPic,
            pic: [pic18, pic19, pic20]
        }, {
            name: 'Chemise Dulskip',
            primPic: primaryPic,
            subTypes: [
                {
                    name: 'chemise1',
                    pic: [pic21, pic22, pic23, pic24]
                },
                {
                    name: 'chemise2',
                    pic: [pic25, pic26, pic27, pic28]
                }
            ]
        }, {
            name: 'Veste Moto',
            primPic: primaryPic,
            pic: [pic29, pic30, pic31, pic32]
        }
    ]
    return (
        <CustomBox>
            <Grid container direction={'column'} spacing={8}
                sx={{
                    marginTop: {
                        xs: '50px',
                        sm: '176px',
                    },
                    marginBottom: { xs: '50px', sm: '100px', md: '200px' },
                }}
            >
                <Grid item>
                    <Typography variant='h4' fontWeight="800">
                        Uniforme Militaire
                    </Typography>
                </Grid>
                {types.map((type, index) => (
                    <>
                        <Grid item>
                            <Typography variant='h5' fontWeight="800">
                                {type.name}
                            </Typography>
                        </Grid>
                        <Grid container wrap="nowrap" sx={{ overflowX: 'scroll', overflowY: 'hidden', whiteSpace: 'nowrap', scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}>
                            <Grid item xs={4} sx={{ marginRight: 7, flexShrink: 0 }}>
                                <img src={type.primPic} width='100%' height='100%' alt="primary pic of swiper" style={{ objectFit: "cover" }} />
                            </Grid>
                            {type.subTypes ? (
                                type.subTypes.map((subtype, subIndex) => (
                                    <Grid item key={subIndex} xs={3} justifyContent='center' alignItems='center' display='flex' sx={{ marginRight: 5 }}>
                                        <Room types={subtype.pic} />
                                    </Grid>
                                ))
                            ) : (
                                <Grid item key={index} xs={3} justifyContent='center' alignItems='center' display='flex' sx={{ marginRight: 5 }}>
                                    <Room types={type.pic} />
                                </Grid>
                            )}
                        </Grid>
                    </>
                ))}
            </Grid>
        </CustomBox>
    )
}

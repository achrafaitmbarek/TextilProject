import React from 'react'
import Room from 'components/Room'
import CustomBox from 'components/CustomBox'
import { Grid, Typography } from '@mui/material'

import pic1 from '../../assets/UNIFORME MEDICALE/BLOUSE BLANCHE POUR MEDECIN/pic (1).png'
import pic2 from '../../assets/UNIFORME MEDICALE/BLOUSE BLANCHE POUR MEDECIN/pic (2).png'
import pic3 from '../../assets/UNIFORME MEDICALE/BLOUSE BLANCHE POUR MEDECIN/pic (3).png'
import pic4 from '../../assets/UNIFORME MEDICALE/BLOUSE BLANCHE POUR MEDECIN/pic (4).png'
import pic5 from '../../assets/UNIFORME MEDICALE/BLOUSE BLANCHE POUR MEDECIN/pic (5).png'
import pic6 from '../../assets/UNIFORME MEDICALE/BLOUSE BLANCHE POUR MEDECIN/pic (6).png'

import pic7 from '../../assets/UNIFORME MEDICALE/VESTE PLANCHE EN POLAIRE/pic (1).png'
import pic8 from '../../assets/UNIFORME MEDICALE/VESTE PLANCHE EN POLAIRE/pic (2).png'
import pic9 from '../../assets/UNIFORME MEDICALE/VESTE PLANCHE EN POLAIRE/pic (3).png'

import pic10 from '../../assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA BLEU/pic1.png'
import pic11 from '../../assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA BLEU/pic2.png'
import pic12 from '../../assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA BLEU/pic4.png'

import pic13 from '../../assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA POU INFERMIER INFERMIERE BLEU CIEL/pic (1).png'
import pic14 from '../../assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA POU INFERMIER INFERMIERE BLEU CIEL/pic (2).png'
import pic15 from '../../assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA POU INFERMIER INFERMIERE BLEU CIEL/pic (3).png'
import pic16 from '../../assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA POU INFERMIER INFERMIERE BLEU CIEL/pic (4).png'
import pic17 from '../../assets/UNIFORME MEDICALE/PYJAMA/PAYJAMA POU INFERMIER INFERMIERE BLEU CIEL/pic (5).png'

const UniformeMedicale = () => {

    const types = [
        {
            name: 'Blouse Pour Medecin',
            primPic: pic1,
            pic: [pic1, pic2, pic3, pic4, pic5, pic6,]


        }, {
            name: 'Veste Blanche en polaire ',
            primPic: pic9,
            pic: [pic7, pic8, pic9,]
        }, {
            name: 'Pyjama',
            primPic: pic12,
            subTypes: [
                {
                    name: 'Pyjama Bleu',
                    pic: [pic10, pic11, pic12]
                },
                {
                    name: 'Pyjama pour INFERMIER ',
                    pic: [pic13, pic14, pic15, pic16, pic17]
                },
                {
                    name: 'Pyjama Blanche Calot',
                    pic: [pic1, pic2,]
                }
            ]
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
                        Uniforme Medicale
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
                                <img src={type.primPic} width='80%' height='100%' alt="primary pic of swiper" style={{ objectFit: "cover" }} />
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

export default UniformeMedicale
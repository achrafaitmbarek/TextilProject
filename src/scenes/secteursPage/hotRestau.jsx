import React from 'react'
import pic1 from '../../assets/Hôtellerie- restauration/Veste cuisine 1.png'
import pic2 from '../../assets/Hôtellerie- restauration/Veste cuisine 2.png'
import pic3 from '../../assets/Hôtellerie- restauration/Veste cuisine 2.png'

import pic4 from '../../assets/Hôtellerie- restauration/Pantalon cuisine 1.png'
import pic5 from '../../assets/Hôtellerie- restauration/pantalon cuisine 2.png'
import pic6 from '../../assets/Hôtellerie- restauration/pantalon cuisine 3.png'

import pic7 from '../../assets/Hôtellerie- restauration/Calot 1.png'
import pic8 from '../../assets/Hôtellerie- restauration/Calot 2.png'
import pic9 from '../../assets/Hôtellerie- restauration/Calot 3.png'

import pic10 from '../../assets/Hôtellerie- restauration/Tenue Spa 1.png'
import pic11 from '../../assets/Hôtellerie- restauration/Tenue Spa 2.png'
import pic12 from '../../assets/Hôtellerie- restauration/Tenue Spa 3.png'

import pic13 from '../../assets/Hôtellerie- restauration/Tablier devant 1.png'
import pic14 from '../../assets/Hôtellerie- restauration/Tablier devant 2.png'

import { Grid, Typography } from '@mui/material'
import CustomBox from 'components/CustomBox'
import Room from 'components/Room'


const HotellerieRestauration = () => {

    const types = [
        {
            name: 'Veste cuisine',
            primPic: pic1,
            pic: [pic1, pic2, pic3,]


        }, {
            name: 'Pantalon',
            primPic: pic5,
            pic: [pic4, pic5, pic6,]
        }, {
            name: 'Calot',
            primPic: pic9,
            pic: [pic7, pic8, pic9,]
        }, {
            name: 'Tenue Spa',
            primPic: pic10,
            pic: [pic10, pic11, pic12,]
        }, {
            name: 'Tenue Restauration',
            primPic: pic14,
            pic: [pic13, pic14,]
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
                        Hôtellerie/ restauration
                    </Typography>
                </Grid>
                {types.map((type, index) => (
                    <>
                        <Grid item>
                            <Typography variant='h5' fontWeight="800">
                                {type.name}
                            </Typography>
                        </Grid>
                        <Grid item container>
                            <Grid item xs={4} sx={{ marginRight: 7 }}>
                                <img src={type.primPic} width='80%' height='100%' alt="primary pic of swiper" style={{ objectFit: "cover" }} />
                            </Grid>
                            <Grid item xs={2.5} justifyContent={'center'} alignItems={'center'} display={'flex'}>
                                <Room types={type.pic} />
                            </Grid>
                        </Grid>
                    </>
                ))}
            </Grid>
        </CustomBox>
    )
}

export default HotellerieRestauration
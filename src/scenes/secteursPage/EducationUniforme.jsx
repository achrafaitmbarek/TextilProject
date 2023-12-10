import React from 'react'
import { Grid, Typography } from '@mui/material'
import CustomBox from 'components/CustomBox'
import Room from 'components/Room'

import pic1 from '../../assets/Education et Uniforme/Cardigon1.png';
import pic2 from '../../assets/Education et Uniforme/Cardigon2.png';

import pic3 from '../../assets/Education et Uniforme/Jupe 1.png';
import pic4 from '../../assets/Education et Uniforme/Jupe 2.png';

import pic5 from '../../assets/Education et Uniforme/Pantalon 1.png';
import pic6 from '../../assets/Education et Uniforme/Pantalon 2.png';

import pic7 from '../../assets/Education et Uniforme/Chemise 1.png';
import pic8 from '../../assets/Education et Uniforme/Chemise 2.png';

import pic9 from '../../assets/Education et Uniforme/Veste 1.png';
import pic10 from '../../assets/Education et Uniforme/Veste 2.png';

import pic11 from '../../assets/Education et Uniforme/Tenue de sport 1.png';
import pic12 from '../../assets/Education et Uniforme/Tenue de sport 2.png';


const EducationUniforme = () => {
    const types = [
        {
            name: 'Cardigons',
            primPic: pic1,
            pic: [pic1, pic2,]
        }, {
            name: 'Jupe',
            primPic: pic3,
            pic: [pic3, pic4,]
        }, {
            name: 'Pantalons',
            primPic: pic5,
            pic: [pic5, pic6,]
        },
        {
            name: 'Chemise',
            primPic: pic7,
            pic: [pic7, pic8,]
        }, {
            name: 'Veste',
            primPic: pic9,
            pic: [pic9, pic10,]
        }, {
            name: 'Tenue De Sport',
            primPic: pic11,
            pic: [pic11, pic12,]
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
                        Education Et Uniforme
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
                            <Grid item xs={2.5} justifyContent={'center'} alignItems={'center'} display={'flex'} >
                                <Room types={type.pic} />
                            </Grid>
                        </Grid>
                    </>
                ))}
            </Grid>
        </CustomBox>
    )
}

export default EducationUniforme
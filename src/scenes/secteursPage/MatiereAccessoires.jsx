import { Grid, Typography } from '@mui/material'
import CustomBox from 'components/CustomBox'
import Room from 'components/Room'
import React from 'react'
import pic1 from '../../assets/Matières et accessoires/Cuir.jpg'
import pic2 from '../../assets/Matières et accessoires/Matériaux réfléchissants.jpg'
import pic3 from '../../assets/Matières et accessoires/Nomex .jpg'
import pic4 from '../../assets/Matières et accessoires/Nylon.jpg'
import pic5 from '../../assets/Matières et accessoires/coton.jpg'
import pic6 from '../../assets/Matières et accessoires/kevlar.jpg'
import pic7 from '../../assets/Matières et accessoires/polyester.jpg'
import pic8 from '../../assets/Matières et accessoires/polypropylene.jpg'
const MatiereAccessoires = () => {
    const types = [
        {
            name: 'Cuir',
            primPic: pic1,
            pic: [pic1,]
        }, {
            name: 'Matériaux réfléchissants',
            primPic: pic2,
            pic: [pic2]
        }, {
            name: 'Nomex',
            primPic: pic3,
            pic: [pic3,]
        }, {
            name: 'Nylon',
            primPic: pic4,
            pic: [pic4]
        }, {
            name: 'Coton',
            primPic: pic5,
            pic: [pic5,]
        }, {
            name: 'Kevlar',
            primPic: pic6,
            pic: [pic6]
        }, {
            name: 'Polyster',
            primPic: pic7,
            pic: [pic7]
        }, {
            name: 'Polypropylene',
            primPic: pic8,
            pic: [pic8,]
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
                        Matières et accessoires
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

export default MatiereAccessoires
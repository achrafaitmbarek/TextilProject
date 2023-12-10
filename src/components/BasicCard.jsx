import { Card, CardActionArea, CardContent, CardMedia, Divider, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { useTheme, useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';



const BasicCard = ({ secteurs }) => {
    const CircleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 2px solid black;
    &:hover {
        border: 2px solid red;
    }
`;

    const ForwardIcon = styled(MdOutlineArrowForwardIos)`
  color: #333;
  font-size: 24px;
  &:hover {
    color: red;
  }
`;
    const theme = useTheme();
    const isSmallBreakpoint = useMediaQuery(theme.breakpoints.down('md'));
    const [slice, setSlice] = useState(3);
    useEffect(() => {
        isSmallBreakpoint ? setSlice(1) : setSlice(3)
    }, [isSmallBreakpoint]);


    return (
        <>
            {secteurs.map((secteur, index) => (
                <>
                    <Typography key={index} gutterBottom variant="h4" sx={{ mr: 'auto', my: 7, fontWeight: 600 }}>
                        {secteur.name.toUpperCase()}
                    </Typography>
                    <Grid container alignItems={'center'}>
                        <Grid item container spacing={1} xs={11} sm={11.7} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                            {secteur.pictures.slice(0, slice).map((picture, pictureIndex) => (
                                <Grid item xs={isSmallBreakpoint ? 12 : 4} key={pictureIndex}>
                                    <Card sx={{
                                        display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mr: "1rem",
                                    }} >
                                        <CardActionArea>
                                            <CardMedia
                                                component="img"
                                                height="400"
                                                image={picture}
                                                alt="green iguana"
                                                style={{ objectFit: 'scale-down', maxWidth: '100%' }}
                                            />
                                        </CardActionArea>
                                    </Card>
                                    <CardContent sx={{ width: "300px" }}>
                                        <Typography variant="h5" component="div"  >
                                            <span>
                                                {secteur.types[pictureIndex]}
                                            </span>

                                        </Typography>
                                        <Divider className='divider' sx={{
                                            backgroundColor: '#004485', height: "0.1rem", width: "40%", transition: 'width 0.3s ease-in-out',
                                        }} />
                                    </CardContent>
                                </Grid>
                            ))}
                        </Grid>
                        <Grid item xs={1} sm={0.3} sx={{ cursor: "pointer" }}>
                            <Link to={secteur.path}>
                                <CircleContainer>
                                    <ForwardIcon />
                                </CircleContainer>
                            </Link>
                        </Grid>
                    </Grid>
                </>
            ))}
        </>
    )
}

export default BasicCard
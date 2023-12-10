import React from 'react'
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardActionArea, CardMedia, } from "@mui/material";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views-react-18-fix";

import styled from '@emotion/styled'
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from 'react-icons/md'



const ForwardIcon = styled(MdOutlineArrowForwardIos)`
  color: #333;
  font-size: 24px;
  &:hover {
    color: red;
  }
`;
const BackIcon = styled(MdOutlineArrowBackIos)`
  color: #333;
  font-size: 24px;
  &:hover {
    color: red;
  }
`;

const AutoPlaySwipeableViews = SwipeableViews;

const Room = ({ types }) => {

    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = types.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <Box sx={{ flexGrow: 1, mb: 4 }} >
            <AutoPlaySwipeableViews
                axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {types.map((step, index) => (
                    <div key={step.name}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Card elevation={12} sx={{
                                display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', mx: "1rem",
                            }}>
                                <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        height="400"
                                        elevation={8}
                                        sx={{
                                            display: "block",
                                            width: "60%",
                                            margin: 'auto',
                                            objectFit: 'scale-down', maxWidth: '100%'
                                        }}
                                        src={step}
                                        alt={step.label}
                                    />
                                </CardActionArea>
                            </Card>


                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <Box display={'flex'} justifyContent={'center'} direction={'row'} alignItems={'center'} sx={{ mt: 2 }}>
                <Box>
                    <Button
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                        sx={{ '&:hover': { background: 'none' } }}
                    >
                        {theme.direction === "rtl" ? (
                            <ForwardIcon />
                        ) : (
                            <BackIcon />
                        )}
                    </Button>
                </Box>
                <Box sx={{
                    display: 'flex', width: 200, justifyContent: 'center'
                }}>
                    {types.map((step, index) => (
                        <Box key={step.name}
                            sx={{
                                width: 'auto',
                                height: 60,
                                mx: 1,
                                opacity: index === activeStep ? 1 : 0.4
                            }}
                        >
                            <Box
                                component={'img'}
                                src={step}
                                alt={step.name}
                                sx={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    cursor: 'pointer',
                                }}
                                onClick={() => handleStepChange(index)}
                            />
                        </Box>
                    ))}
                </Box>
                <Box>
                    <Button
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                        sx={{ marginRight: 'auto', '&:hover': { background: 'none' } }}
                    >
                        {theme.direction === "rtl" ? (

                            <BackIcon />

                        ) : (
                            <ForwardIcon />
                        )}
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default Room
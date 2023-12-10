import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import SwipeableViews from "react-swipeable-views-react-18-fix";
import { Grid } from "@mui/material";
import stepper1 from '../assets/stepperSlide/stepper1.png'
import stepper2 from '../assets/stepperSlide/stepper2.png'
import stepper3 from '../assets/stepperSlide/stepper3.png'
import {
    MdOutlineArrowForwardIos,
    MdOutlineArrowBackIos
} from "react-icons/md";
import styled from "@emotion/styled";

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
const BackIcon = styled(MdOutlineArrowBackIos)`
  color: #333;
  font-size: 24px;
  &:hover {
    color: red;
  }
`;


const AutoPlaySwipeableViews = SwipeableViews;
const staticLabel = `Les vêtements de travail PROVETEX sont
conçus pour répondre aux normes de sécurité
les plus élevées tout en offrant un confort optimal
et une grande liberté de mouvement. Nous sommes
fiers de proposer une large gamme de produits,
comprenant des combinaisons, des gilets, des
pantalons, des vestes, des chaussures de sécurité
et des accessoires, adaptés à de nombreuses industries
telles que l'agriculture, la construction, l'industrie
manufacturière et les services d'urgence.`

const images = [
    {
        label: "",
        imgPath: stepper1
    },
    {
        label: "",
        imgPath: stepper2
    },
    {
        label: "",
        imgPath: stepper3
    }
];

function SwipeableTextMobileStepper() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

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
        <Box sx={{ maxWidth: "100%", flexGrow: 1 }}>
            <Grid container direction="row" spacing={10}>
                <Grid item xs={12} lg={6}
                >
                    <AutoPlaySwipeableViews
                        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                        index={activeStep}
                        onChangeIndex={handleStepChange}
                        enableMouseEvents
                    >
                        {images.map((step, index) => (
                            <div key={step.label}>
                                {Math.abs(activeStep - index) <= 2 ? (
                                    <Box
                                        component="img"
                                        sx={{
                                            display: "block",
                                            maxWidth: '65%',
                                            overflow: "hidden",
                                            margin: 'auto'
                                        }}
                                        src={step.imgPath}
                                        alt={step.label}
                                    />
                                ) : null}
                            </div>
                        ))}
                    </AutoPlaySwipeableViews>
                </Grid>
                <Grid item xs={12} lg={6} spacing={0}>
                    <Grid item >
                        <MobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            variant='none'
                            nextButton={
                                <Button
                                    size="small"
                                    onClick={handleNext}
                                    disabled={activeStep === maxSteps - 1}
                                    sx={{ marginRight: 'auto', '&:hover': { background: 'none' } }}
                                >
                                    {theme.direction === "rtl" ? (
                                        <CircleContainer>
                                            <BackIcon />
                                        </CircleContainer>

                                    ) : (
                                        <CircleContainer>
                                            <ForwardIcon />
                                        </CircleContainer>
                                    )}
                                </Button>
                            }
                            backButton={
                                <Button
                                    size="small"
                                    onClick={handleBack}
                                    disabled={activeStep === 0}
                                    sx={{ '&:hover': { background: 'none' } }}
                                >
                                    {theme.direction === "rtl" ? (
                                        <CircleContainer>
                                            <ForwardIcon />
                                        </CircleContainer>
                                    ) : (
                                        <CircleContainer>
                                            <BackIcon />
                                        </CircleContainer>
                                    )}
                                </Button>
                            }
                        />
                    </Grid>
                    <Grid item justifyContent="center" >
                        <Paper
                            square
                            elevation={0}
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                padding: 2,
                            }}
                        >
                            <Typography variant="h4" sx={{ marginRight: 'auto' }}><span style={{ fontSize: '3rem' }}>{String(activeStep + 1).padStart(2, '0')}</span> / {String(maxSteps).padStart(2, '0')}</Typography>
                            <Typography variant="h6" sx={{ mt: '2rem' }}>{staticLabel}</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default SwipeableTextMobileStepper;

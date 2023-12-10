import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider, responsiveFontSizes } from "@mui/material/styles";
import Maps from "components/Maps";
import CustomButton from "components/CustomButton";
import CallIcon from '@mui/icons-material/Call';
import NearMeIcon from '@mui/icons-material/NearMe';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const defaultTheme = createTheme();
const theme = responsiveFontSizes(defaultTheme);
const contactInfo = [
    { text: "0500000", icon: <CallIcon sx={{ mr: 2, color: 'red' }} /> },
    { text: "Casablanca", icon: <NearMeIcon sx={{ mr: 2, color: 'red' }} /> },
    { text: "Provetex", icon: <LinkedInIcon sx={{ mr: 2, color: 'red' }} /> },
    { text: "Provetex", icon: <FacebookIcon sx={{ mr: 2, color: 'red' }} /> }
];

export default function ContactPage() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get("email"),
            password: data.get("password")
        });
    };
    return (
        <ThemeProvider theme={""}>
            <Grid container component="main" sx={{
                minHeight: "100vh",
                marginTop: {
                    sm: '50px',
                    md: '0'
                },
            }} elevation={2} >
                <CssBaseline />
                <Grid item xs={12} md={6} component={Paper} square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Typography variant="h3">
                            Contacter Nous
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Votre Nom"
                                name="fullName"
                                autoComplete="full-name"
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Votre Email "
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="subject"
                                label="Sujet"
                                name="subject"
                                autoComplete="subject"
                                autoFocus
                            />
                            <TextField
                                fullWidth
                                required
                                id="outlined-multiline-static"
                                label="Votre Message"
                                multiline
                                rows={6}
                                sx={{ mb: 3 }}
                            />
                            <CustomButton label='Envoyer' />
                        </Box>

                        <Box sx={{ my: 2 }}>
                            {contactInfo.map((item, index) => (
                                <Typography key={index} sx={{ mt: 2, display: "flex", alignItems: "center" }}>
                                    {item.icon}
                                    {item.text}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{ minHeight: "500px" }}
                >
                    <Maps />
                </Grid>
            </Grid>
        </ThemeProvider >
    );
}

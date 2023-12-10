import React from 'react';
import styled from "@emotion/styled";
import { Button } from "@mui/material";

const PrimaryButton = styled(Button)({
    border: '2px solid #eb212d',
    borderRadius: '4px',
    fontWeight: 'bold',
    color: '#eb212d',
    padding: '0.5rem 1.5rem',
    '&:hover': {
        color: "#ffffff",
        backgroundColor: '#eb212d',
        border: '2px solid #eb212d'
    }
});

const CustomButton = ({ style, label }) => {
    return (
        <PrimaryButton style={style}>
            {label}
        </PrimaryButton>
    );
};

export default CustomButton;

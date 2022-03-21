import React from 'react';
import { Button, styled } from '@mui/material';

const ButtonUI = props => {
    const MyButton = styled(Button)({
        ...props.style
    })
    return (
        <MyButton {...props} />
    );
};

export default ButtonUI;
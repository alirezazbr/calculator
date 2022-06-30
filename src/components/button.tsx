import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { ButtonType } from '../model/components/buttonType';

const Button = ({ variant, sx, value, onClick, children }: ButtonType) => (
    <LoadingButton
        variant={variant}
        sx={sx}
        value={value}
        onClick={onClick}
    >
        {children}
    </LoadingButton>
);

export default Button;

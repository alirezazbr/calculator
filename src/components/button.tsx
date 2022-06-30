import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { ButtonType } from '../model/components/buttonType';

const Button = ({ variant, sx, value, onClick, children }: ButtonType) => (
    <LoadingButton
        variant={variant}
        sx={{ ...sx, height: '55px', width: '55px', borderRadius: '50%', minWidth: 'unset !important', fontSize: '24px', fontWeight: 100 }}
        value={value}
        onClick={onClick}
    >
        {children}
    </LoadingButton>
);

export default Button;

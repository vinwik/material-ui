import * as React from 'react';
import { ButtonProps } from '@mui/material/Button';
import { SxProps } from '@mui/material/styles';
export interface HighlightedCodeProps {
    code: string;
    copyButtonHidden?: boolean;
    copyButtonProps?: ButtonProps;
    language: string;
    parentComponent?: React.ElementType;
    plainStyle?: boolean;
    preComponent?: React.ElementType;
    sx?: SxProps;
}
export declare const HighlightedCode: React.ForwardRefExoticComponent<HighlightedCodeProps & React.RefAttributes<HTMLDivElement>>;

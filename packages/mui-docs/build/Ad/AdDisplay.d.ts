import * as React from 'react';
export interface AdParameters {
    name: string;
    link: string;
    img?: string;
    description: string;
    poweredby: string;
    label: string;
}
interface AdDisplayProps {
    ad: AdParameters;
    className?: string;
    shape?: 'auto' | 'inline' | 'image';
}
export default function AdDisplay(props: AdDisplayProps): React.JSX.Element;
export {};

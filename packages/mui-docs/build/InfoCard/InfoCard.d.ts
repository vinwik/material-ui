import * as React from 'react';
import { TypographyProps } from '@mui/material/Typography';
import { LinkProps } from '../Link';
interface GlowingIconContainerProps {
    icon: React.ReactNode;
}
export declare function GlowingIconContainer({ icon }: GlowingIconContainerProps): React.JSX.Element;
interface InfoCardProps {
    classNameDescription?: string;
    classNameTitle?: string;
    description?: string;
    icon?: React.ReactNode;
    link?: string;
    prefetch?: LinkProps['prefetch'];
    svg?: React.ReactNode;
    title: string;
    titleProps?: TypographyProps;
}
export declare function InfoCard(props: InfoCardProps): React.JSX.Element;
export {};

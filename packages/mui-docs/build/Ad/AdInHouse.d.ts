import * as React from 'react';
import { AdParameters } from './AdDisplay';
export default function AdInHouse(props: {
    ad: Omit<AdParameters, 'poweredby' | 'label'>;
}): React.JSX.Element;

import { GetPropsFromComponentDeclarationOptions } from '@mui/internal-docs-utils';
import { PropTypesComponent } from './models';
export declare function getPropTypesFromFile({ filePath, project, shouldInclude: inShouldInclude, shouldResolveObject: inShouldResolveObject, shouldUseObjectForDate, checkDeclarations, }: GetPropTypesFromFileOptions): PropTypesComponent[];
export interface GetPropTypesFromFileOptions extends Pick<GetPropsFromComponentDeclarationOptions, 'shouldInclude' | 'project' | 'checkDeclarations'> {
    filePath: string;
    /**
     * Called before the shape of an object is resolved
     * @returns true to resolve the shape of the object, false to just use a object, or undefined to
     * use the default behavior
     * @default propertyCount <= 50 && depth <= 3
     */
    shouldResolveObject?: (data: {
        name: string;
        propertyCount: number;
        depth: number;
    }) => boolean | undefined;
    /**
     * Called to know if a date should be represented as `PropTypes.object` or `PropTypes.instanceOf(Date)
     * @returns true to use `PropTypes.object`, false to use `PropTypes.instanceOf(Date)`.
     * @default false
     */
    shouldUseObjectForDate?: (data: {
        name: string;
    }) => boolean;
}
//# sourceMappingURL=getPropTypesFromFile.d.ts.map
import * as React from 'react';
/**
 * How to use: spread the handlers to the .MuiCode-root
 *
 * The html structure should be:
 * <div className="MuiCode-root">
 *  <pre>...</pre>
 *  <button className="MuiCode-copy">...</button>
 * </div>
 */
export declare function useCodeCopy(): React.HTMLAttributes<HTMLDivElement>;
interface CodeCopyProviderProps {
    children: React.ReactNode;
}
/**
 * Place <CodeCopyProvider> at the page level. It will check the keydown event and try to initiate copy click if rootNode exist.
 * Any code block inside the tree can set the rootNode when mouse enter to leverage keyboard copy.
 */
export declare function CodeCopyProvider({ children }: CodeCopyProviderProps): React.JSX.Element;
export {};

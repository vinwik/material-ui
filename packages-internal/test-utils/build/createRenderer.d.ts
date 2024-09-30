import * as React from 'react';
import { fireEvent as rtlFireEvent, queries, queryHelpers, RenderResult, Screen } from '@testing-library/react/pure';
import { userEvent } from '@testing-library/user-event';
import { useFakeTimers } from 'sinon';
declare function queryAllDescriptionsOf(baseElement: HTMLElement, element: Element): HTMLElement[];
declare const customQueries: {
    queryDescriptionOf: queryHelpers.QueryBy<[Element]>;
    queryAllDescriptionsOf: typeof queryAllDescriptionsOf;
    getDescriptionOf: queryHelpers.GetBy<[Element]>;
    getAllDescriptionsOf: queryHelpers.GetAllBy<[Element]>;
    findDescriptionOf: queryHelpers.FindBy<[Element]>;
    findAllDescriptionsOf: queryHelpers.FindAllBy<[Element]>;
    /**
     * @deprecated Use `queryAllByTestId` instead
     */
    queryAllByMuiTest: (container: HTMLElement, id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    /**
     * @deprecated Use `queryByTestId` instead
     */
    queryByMuiTest: queryHelpers.QueryBy<[dataMuiTest: import("@testing-library/react/pure").Matcher]>;
    /**
     * @deprecated Use `getAllByTestId` instead
     */
    getAllByMuiTest: queryHelpers.GetAllBy<[dataMuiTest: import("@testing-library/react/pure").Matcher]>;
    /**
     * @deprecated Use `getByTestId` instead
     */
    getByMuiTest: queryHelpers.GetBy<[dataMuiTest: import("@testing-library/react/pure").Matcher]>;
    /**
     * @deprecated Use `findAllByTestId` instead
     */
    findAllByMuiTest: queryHelpers.FindAllBy<[dataMuiTest: import("@testing-library/react/pure").Matcher]>;
    /**
     * @deprecated Use `findByTestId` instead
     */
    findByMuiTest: queryHelpers.FindBy<[dataMuiTest: import("@testing-library/react/pure").Matcher]>;
};
interface RenderConfiguration {
    /**
     * https://testing-library.com/docs/react-testing-library/api#container
     */
    container?: HTMLElement;
    /**
     * if true does not cleanup before mount
     */
    disableUnmount?: boolean;
    /**
     * wrap in React.StrictMode?
     */
    strict?: boolean;
    /**
     * Set to `true` if the test fails due to [Strict Effects](https://github.com/reactwg/react-18/discussions/19).
     */
    strictEffects?: boolean;
    wrapper: React.JSXElementConstructor<{
        children?: React.ReactNode;
    }>;
}
export type RenderOptions = Partial<RenderConfiguration>;
export interface MuiRenderResult extends RenderResult<typeof queries & typeof customQueries> {
    user: ReturnType<typeof userEvent.setup>;
    forceUpdate(): void;
    /**
     * convenience helper. Better than repeating all props.
     */
    setProps(props: object): void;
}
export interface MuiRenderToStringResult {
    container: HTMLElement;
    hydrate(): MuiRenderResult;
}
export interface Clock {
    /**
     * Runs all timers until there are no more remaining.
     * WARNING: This may cause an infinite loop if a timeout constantly schedules another timeout.
     * Prefer to to run only pending timers with `runToLast` and unmount your component directly.
     */
    runAll(): void;
    /**
     * Runs only the currently pending timers.
     */
    runToLast(): void;
    /**
     * Tick the clock ahead `timeoutMS` milliseconds.
     * @param timeoutMS
     */
    tick(timeoutMS: number): void;
    /**
     * Returns true if we're running with "real" i.e. native timers.
     */
    isReal(): boolean;
    /**
     * Runs the current test suite (i.e. `describe` block) with fake timers.
     */
    withFakeTimers(): void;
    /**
     * Restore the real timer
     */
    restore(): void;
}
export type ClockConfig = undefined | number | Date;
declare function createClock(defaultMode: 'fake' | 'real', config: ClockConfig, options?: Exclude<Parameters<typeof useFakeTimers>[0], number | Date>): Clock;
export interface Renderer {
    clock: Clock;
    render(element: React.ReactElement<any>, options?: RenderOptions): MuiRenderResult;
    renderToString(element: React.ReactElement<any>, options?: RenderOptions): MuiRenderToStringResult;
}
export interface CreateRendererOptions extends Pick<RenderOptions, 'strict' | 'strictEffects'> {
    /**
     * @default 'real'
     */
    clock?: 'fake' | 'real';
    clockConfig?: ClockConfig;
    clockOptions?: Parameters<typeof createClock>[2];
}
export declare function createRenderer(globalOptions?: CreateRendererOptions): Renderer;
declare const fireEvent: typeof rtlFireEvent;
export declare function fireTouchChangedEvent(target: Element, type: 'touchstart' | 'touchmove' | 'touchend', options: {
    changedTouches: Array<Pick<TouchInit, 'clientX' | 'clientY'>>;
}): void;
declare function act<T>(callback: () => T | Promise<T>): Promise<T>;
declare function act(callback: () => void): void;
declare const bodyBoundQueries: {
    getByLabelText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.GetByText<T>>;
    getAllByLabelText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.AllByText<T>>;
    queryByLabelText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.QueryByText<T>>;
    queryAllByLabelText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.AllByText<T>>;
    findByLabelText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindByText<T>>;
    findAllByLabelText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindAllByText<T>>;
    getByPlaceholderText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByPlaceholderText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByPlaceholderText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByPlaceholderText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByPlaceholderText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByPlaceholderText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
    getByText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.GetByText<T>>;
    getAllByText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.AllByText<T>>;
    queryByText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.QueryByText<T>>;
    queryAllByText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined): ReturnType<queries.AllByText<T>>;
    findByText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindByText<T>>;
    findAllByText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindAllByText<T>>;
    getByAltText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByAltText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByAltText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByAltText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByAltText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByAltText<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
    getByTitle<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByTitle<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByTitle<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByTitle<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByTitle<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByTitle<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
    getByDisplayValue<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByDisplayValue<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByDisplayValue<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByDisplayValue<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByDisplayValue<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByDisplayValue<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
    getByRole<T extends HTMLElement = HTMLElement>(role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined): ReturnType<queries.GetByRole<T>>;
    getAllByRole<T extends HTMLElement = HTMLElement>(role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined): ReturnType<queries.AllByRole<T>>;
    queryByRole<T extends HTMLElement = HTMLElement>(role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined): ReturnType<queries.QueryByRole<T>>;
    queryAllByRole<T extends HTMLElement = HTMLElement>(role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined): ReturnType<queries.AllByRole<T>>;
    findByRole<T extends HTMLElement = HTMLElement>(role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindByRole<T>>;
    findAllByRole<T extends HTMLElement = HTMLElement>(role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindAllByRole<T>>;
    getByTestId<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.GetByBoundAttribute<T>>;
    getAllByTestId<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    queryByTestId<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.QueryByBoundAttribute<T>>;
    queryAllByTestId<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined): ReturnType<queries.AllByBoundAttribute<T>>;
    findByTestId<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindByBoundAttribute<T>>;
    findAllByTestId<T extends HTMLElement = HTMLElement>(id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined): ReturnType<queries.FindAllByBoundAttribute<T>>;
} & {
    queryDescriptionOf: (args_0: Element) => HTMLElement | null;
    queryAllDescriptionsOf: (element: Element) => HTMLElement[];
    getDescriptionOf: (args_0: Element) => HTMLElement;
    getAllDescriptionsOf: (args_0: Element) => HTMLElement[];
    findDescriptionOf: (args_0: Element, args_1?: undefined, args_2?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllDescriptionsOf: (args_0: Element, args_1?: undefined, args_2?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    queryAllByMuiTest: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    queryByMuiTest: (dataMuiTest: import("@testing-library/react/pure").Matcher) => HTMLElement | null;
    getAllByMuiTest: (dataMuiTest: import("@testing-library/react/pure").Matcher) => HTMLElement[];
    getByMuiTest: (dataMuiTest: import("@testing-library/react/pure").Matcher) => HTMLElement;
    findAllByMuiTest: (args_0: import("@testing-library/react/pure").Matcher, args_1?: undefined, args_2?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    findByMuiTest: (args_0: import("@testing-library/react/pure").Matcher, args_1?: undefined, args_2?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    getByLabelText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined) => HTMLElement;
    getAllByLabelText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined) => HTMLElement[];
    queryByLabelText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined) => HTMLElement | null;
    queryAllByLabelText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined) => HTMLElement[];
    findByLabelText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllByLabelText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    getByPlaceholderText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement;
    getAllByPlaceholderText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    queryByPlaceholderText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement | null;
    queryAllByPlaceholderText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    findByPlaceholderText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllByPlaceholderText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    getByText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined) => HTMLElement;
    getAllByText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined) => HTMLElement[];
    queryByText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined) => HTMLElement | null;
    queryAllByText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined) => HTMLElement[];
    findByText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllByText: (id: import("@testing-library/react/pure").Matcher, options?: queryHelpers.SelectorMatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    getByAltText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement;
    getAllByAltText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    queryByAltText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement | null;
    queryAllByAltText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    findByAltText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllByAltText: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    getByTitle: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement;
    getAllByTitle: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    queryByTitle: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement | null;
    queryAllByTitle: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    findByTitle: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllByTitle: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    getByDisplayValue: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement;
    getAllByDisplayValue: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    queryByDisplayValue: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement | null;
    queryAllByDisplayValue: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    findByDisplayValue: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllByDisplayValue: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    getByRole: (role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined) => HTMLElement;
    getAllByRole: (role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined) => HTMLElement[];
    queryByRole: (role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined) => HTMLElement | null;
    queryAllByRole: (role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined) => HTMLElement[];
    findByRole: (role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllByRole: (role: import("@testing-library/react/pure").ByRoleMatcher, options?: queries.ByRoleOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
    getByTestId: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement;
    getAllByTestId: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    queryByTestId: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement | null;
    queryAllByTestId: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined) => HTMLElement[];
    findByTestId: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement>;
    findAllByTestId: (id: import("@testing-library/react/pure").Matcher, options?: import("@testing-library/react/pure").MatcherOptions | undefined, waitForElementOptions?: import("@testing-library/react/pure").waitForOptions | undefined) => Promise<HTMLElement[]>;
};
export * from '@testing-library/react/pure';
export { act, fireEvent };
export declare const screen: Screen & typeof bodyBoundQueries;
//# sourceMappingURL=createRenderer.d.ts.map
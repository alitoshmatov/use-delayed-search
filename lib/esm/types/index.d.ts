/**
 * Hook to store delayed value, when you set new value, delayed value change based delayTime
 * @param  {Number} delayTime Delay time in milliseconds
 * @return {[String, String, Function]} 1. Actual value, Delayed value, function to change value
 */
declare const useDelayedSearch: (delayTime?: number) => [string, string, React.Dispatch<React.SetStateAction<string>>];
export default useDelayedSearch;
//# sourceMappingURL=index.d.ts.map
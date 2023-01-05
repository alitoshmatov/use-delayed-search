"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
/**
 * Hook to store delayed value, when you set new value, delayed value change based delayTime
 * @param  {Number} delayTime Delay time in milliseconds
 * @return {[String, String, Function]} 1. Actual value, Delayed value, function to change value
 */
const useDelayedSearch = (delayTime = 500) => {
    const [value, setValue] = (0, react_1.useState)("");
    const [delayedSearch, setDelayedSearch] = (0, react_1.useState)("");
    (0, react_1.useEffect)(() => {
        const delayDebounceFn = setTimeout(() => {
            setDelayedSearch(value);
        }, delayTime);
        return () => clearTimeout(delayDebounceFn);
    }, [value]);
    return [value, delayedSearch, setValue];
};
exports.default = useDelayedSearch;

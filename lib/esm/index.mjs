import { useEffect, useState } from "react";
/**
 * Hook to store delayed value, when you set new value, delayed value change based delayTime
 * @param  {Number} delayTime Delay time in milliseconds
 * @return {[String, String, Function]} 1. Actual value, Delayed value, function to change value
 */
const useDelayedSearch = (delayTime = 500) => {
    const [value, setValue] = useState("");
    const [delayedSearch, setDelayedSearch] = useState("");
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            setDelayedSearch(value);
        }, delayTime);
        return () => clearTimeout(delayDebounceFn);
    }, [value]);
    return [value, delayedSearch, setValue];
};
export default useDelayedSearch;

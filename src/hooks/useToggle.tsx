import { useCallback, useState } from "react";

export default function useToggle(
    initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] {
    const [state, setState] = useState(initialValue);

    const toggle = useCallback(() => setState((prev) => !prev), []);
    const set = useCallback((value: boolean) => setState(value), []);

    return [state, toggle, set];
}

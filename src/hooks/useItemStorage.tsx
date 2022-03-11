import { useState, useEffect } from "react";

export function useItemStorage<T>(
    key: string,
    initialValue: T
): [items: T, setStoredItems: (val: T) => void] {
    const [items, setItems] = useState<T>(initialValue);

    useEffect(() => {
        const storedItems = localStorage.getItem(key);
        if (!storedItems) {
            localStorage.setItem(key, JSON.stringify(items));
        } else {
            setItems(JSON.parse(storedItems));
        }
    }, []);

    const setStoredItems = (value: T) => {
        if (typeof window !== "undefined") {
            localStorage.setItem(key, JSON.stringify(value));
            const storedItems = localStorage.getItem(key);
            if (storedItems) {
                setItems(JSON.parse(storedItems));
            }
        }
    };

    return [items, setStoredItems];
}

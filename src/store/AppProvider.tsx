import React, { createContext, useCallback, useContext, useMemo } from "react";
import { useItemStorage } from "../hooks/useItemStorage";
import { FormValues } from "../types/formvalues";
import { Item } from "../types/item";

export type appContextType = {
    name: string;
    items: Item[];
    addItem: (val: FormValues) => void;
};

const AppContext = createContext<appContextType>({} as appContextType);

export function useAppContext() {
    return useContext(AppContext);
}

type Props = {
    children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
    const [items, setStoredItems] = useItemStorage<Item[]>("items", []);

    const addItem = useCallback(
        ({ name, description, imageURL, date }: FormValues) => {
            const newItem = { name, description, imageURL, date };
            const newItems = [...items, newItem];
            setStoredItems(newItems);
        },
        [items, setStoredItems]
    );
    const value = useMemo(() => {
        return {
            name: "",
            items,
            addItem,
        };
    }, [items, addItem]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

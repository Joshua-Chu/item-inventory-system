import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { useItemStorage } from "../hooks/useItemStorage";
import { FormValues } from "../types/formvalues";
import { Item } from "../types/item";

export type appContextType = {
    isSideBarOpen: boolean;
    setIsSideBarOpen: (curr: boolean) => void;
    name: string;
    items: Item[];
    addItem: (val: FormValues) => void;
    currentView: Item | null;
    setCurrentView: (value: Item) => void;
};

const AppContext = createContext<appContextType>({} as appContextType);

export function useAppContext() {
    return useContext(AppContext);
}

type Props = {
    children: React.ReactNode;
};

export function AppProvider({ children }: Props) {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const [items, setStoredItems] = useItemStorage<Item[]>("items", []);
    const [currentView, setCurrentView] = useState<Item | null>(null);

    const transformDate = (date: Date) => {
        const arrDate = new Date(date).toLocaleDateString().split("/");
        arrDate[0] = arrDate[0].length === 1 ? `0${arrDate[0]}` : arrDate[0];
        return arrDate.join("-");
    };

    const addItem = useCallback(
        ({ name, description, imageURL, date }: FormValues) => {
            const transformedDate = transformDate(date);
            const newItem = {
                name,
                description,
                imageURL,
                date: transformedDate,
            };
            const newItems = [...items, newItem];
            setStoredItems(newItems);
        },
        [items, setStoredItems]
    );

    console.log(currentView);
    const value = useMemo(() => {
        return {
            name: "",
            items,
            addItem,
            currentView,
            setCurrentView,
            isSideBarOpen,
            setIsSideBarOpen,
        };
    }, [items, addItem]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

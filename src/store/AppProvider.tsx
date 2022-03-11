import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import { v4 as uuidv4 } from "uuid";
import { useItemStorage } from "../hooks/useItemStorage";
import { FormValues } from "../types/formvalues";
import { Item } from "../types/item";

export type appContextType = {
    isSideBarOpen: boolean;
    setIsSideBarOpen: (curr: boolean) => void;
    name: string;
    items: Item[];
    currentView: Item | null;
    setCurrentView: (value: Item | null) => void;
    addItem: (val: FormValues) => void;
    deleteItem: (id: string) => void;
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
                id: uuidv4(),
                name,
                description,
                imageURL,
                date: transformedDate,
            };
            const newItems = [...items, newItem];
            setStoredItems(newItems);
            setCurrentView(newItem);
        },
        [items, setStoredItems]
    );

    const deleteItem = useCallback(
        (id: string) => {
            const targetItem = items.find(item => item.id === id);
            if (targetItem) {
                const newItems = items.filter(item => item.id !== id);
                setStoredItems(newItems);
                setCurrentView(null);
            }
        },
        [items, setStoredItems]
    );

    const value = useMemo(() => {
        return {
            name: "",
            items,
            addItem,
            currentView,
            setCurrentView,
            isSideBarOpen,
            setIsSideBarOpen,
            deleteItem,
        };
    }, [items, addItem, deleteItem, currentView, isSideBarOpen]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

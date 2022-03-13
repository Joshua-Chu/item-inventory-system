import React, {
    createContext,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";
import toast from "react-hot-toast";
import { v4 as uuidv4 } from "uuid";
import { useItemStorage } from "../hooks/useItemStorage";
import { EditFormValues, FormValues } from "../types/formvalues";
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
    editItem: (val: EditFormValues) => void;
    searchTerm: string;
    setSearchTerm: (val: string) => void;
    filteredList: Item[];
};

export const AppContext = createContext<appContextType>({} as appContextType);

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

    const [searchTerm, setSearchTerm] = useState("");

    const addItem = useCallback(
        ({ name, description, imageURL, date }: FormValues) => {
            console.log(date, "\n ", new Date());
            const newItem = {
                id: uuidv4(),
                name,
                description,
                imageURL,
                date,
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
                toast.error("Successfully deleted item");
            }
        },
        [items, setStoredItems]
    );

    const editItem = useCallback(
        ({ name, description, imageURL, date, id }: EditFormValues) => {
            const newItem = {
                id,
                name,
                description,
                imageURL,
                date,
            };
            const newItems = items.map(item =>
                item.id === id ? newItem : item
            );
            setStoredItems(newItems);
            setCurrentView(newItem);
        },
        [items, setStoredItems]
    );

    const filteredList = useMemo(() => {
        if (searchTerm === "") {
            return items.sort(
                (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
            );
        }

        const rawFilteredItems = items.filter(
            item => item.name.includes(searchTerm.toLowerCase()) && item
        );

        return rawFilteredItems.sort(
            (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
        );
    }, [items, searchTerm]);

    const value = useMemo(() => {
        return {
            isSideBarOpen,
            setIsSideBarOpen,
            name: "",
            items,
            currentView,
            setCurrentView,
            addItem,
            deleteItem,
            editItem,
            searchTerm,
            setSearchTerm,
            filteredList,
        };
    }, [
        items,
        addItem,
        deleteItem,
        currentView,
        isSideBarOpen,
        editItem,
        searchTerm,
        filteredList,
    ]);
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

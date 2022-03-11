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

    const [searchTerm, setSearchTerm] = useState("");

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
                toast.error("Successfully deleted item");
            }
        },
        [items, setStoredItems]
    );

    const editItem = useCallback(
        ({ name, description, imageURL, date, id }: EditFormValues) => {
            const transformedDate = transformDate(date);
            const newItem = {
                id,
                name,
                description,
                imageURL,
                date: transformedDate,
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
        if (searchTerm === "") return items;

        return items.filter(
            item => item.name.includes(searchTerm.toLowerCase()) && item
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

import { useAppContext } from "../../store/AppProvider";
import { Item } from "../../types/item";

type ItemPillProps = {
    item: Item;
};
export function ItemPill({ item }: ItemPillProps) {
    const { setCurrentView, setIsSideBarOpen } = useAppContext();
    return (
        <div
            className="border-2 border-gray-300 py-2 px-4 rounded-lg break-all cursor-pointer"
            role="none"
            onClick={() => {
                setCurrentView(item);
                setIsSideBarOpen(false);
            }}
        >
            <p>Name: {item.name}</p>
            <p>Date: {item.date}</p>
        </div>
    );
}

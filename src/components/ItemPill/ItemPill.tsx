import { useAppContext } from "../../store/AppProvider";

type ItemPillProps = {
    name: string;
    description: string;
    imageURL: string;
    id: string;
    date: string;
};
export function ItemPill({
    name,
    description,
    id,
    date,
    imageURL,
}: ItemPillProps) {
    const { setCurrentView, setIsSideBarOpen, currentView } = useAppContext();
    return (
        <div
            className={`border-2 border-gray-300 py-2 px-4 rounded-lg break-all cursor-pointer ${
                currentView && currentView.id === id ? "bg-gray-200" : ""
            }`}
            role="none"
            onClick={() => {
                setCurrentView({ name, description, id, date, imageURL });
                setIsSideBarOpen(false);
            }}
        >
            <p>
                Name: <span>{name}</span>
            </p>
            <p>
                Date: <span>{date}</span>
            </p>
        </div>
    );
}

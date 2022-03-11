import { useAppContext } from "../../store/AppProvider";

type ItemPillProps = {
    name: string;
    date: string;
};
export function ItemPill({ name, date }: ItemPillProps) {
    const { setCurrentView } = useAppContext();
    return (
        <div
            className="border-2 border-gray-300 py-2 px-4 rounded-lg break-all cursor-pointer"
            role="none"
            onClick={() =>
                setCurrentView({ name, date, description: "", imageURL: "" })
            }
        >
            <p>Name: {name}</p>
            <p>Date: {date}</p>
        </div>
    );
}

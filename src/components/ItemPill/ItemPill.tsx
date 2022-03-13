import { useMemo } from "react";
import { useAppContext } from "../../store/AppProvider";

type ItemPillProps = {
    name: string;
    description: string;
    imageURL: string;
    id: string;
    date: Date;
};
export function ItemPill({
    name,
    description,
    id,
    date,
    imageURL,
}: ItemPillProps) {
    const { setCurrentView, setIsSideBarOpen, currentView } = useAppContext();

    function padTo2Digits(num: number) {
        return num.toString().padStart(2, "0");
    }

    const transformDate = useMemo(() => {
        const rawDate = new Date(date);
        return [
            padTo2Digits(rawDate.getMonth() + 1),
            padTo2Digits(rawDate.getDate()),
            rawDate.getFullYear(),
        ].join("-");
    }, [date]);
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
            <div role="listitem">
                <p>
                    Name: <span>{name}</span>
                </p>
                <p>
                    Date: <span>{transformDate}</span>
                </p>
            </div>
        </div>
    );
}

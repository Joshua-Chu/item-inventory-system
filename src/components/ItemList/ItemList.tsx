import { useAppContext } from "../../store/AppProvider";
import { ItemPill } from "../ItemPill";

export function ItemList() {
    const { items } = useAppContext();
    return (
        <div className="text-black grid gap-2   ">
            {items &&
                items.length > 0 &&
                items.map(item => (
                    <ItemPill
                        key={Math.random()}
                        name={item.name}
                        date={item.date}
                    />
                ))}
        </div>
    );
}

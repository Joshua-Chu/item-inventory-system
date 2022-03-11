import { useAppContext } from "../../store/AppProvider";
import { ItemPill } from "../ItemPill";

export function ItemList() {
    const { filteredList } = useAppContext();
    return (
        <div className="text-black grid gap-2   ">
            {filteredList &&
                filteredList.length > 0 &&
                filteredList.map(item => (
                    <ItemPill key={item.id} item={item} />
                ))}
        </div>
    );
}

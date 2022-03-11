import { useAppContext } from "../../store/AppProvider";

export function Search() {
    const { setSearchTerm } = useAppContext();
    return (
        <div className="text-gray-500">
            <input
                type="text"
                placeholder="search..."
                onChange={e => setSearchTerm(e.target.value)}
            />
        </div>
    );
}

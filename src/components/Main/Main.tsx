import { useAppContext } from "../../store/AppProvider";
import { ItemForm } from "../ItemForm";

export function Main() {
    const { setIsSideBarOpen } = useAppContext();

    return (
        <div
            role="none"
            className="basis-3/4  flex-grow p-6 flex justify-center"
            onClick={() => {
                setIsSideBarOpen(false);
            }}
        >
            <ItemForm />
        </div>
    );
}

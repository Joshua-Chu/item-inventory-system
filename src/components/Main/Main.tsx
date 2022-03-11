import { useAppContext } from "../../store/AppProvider";
import { ItemForm } from "../ItemForm";
import { ItemView } from "../ItemView";

export function Main() {
    const { setIsSideBarOpen, currentView } = useAppContext();

    return (
        <div
            role="none"
            className="basis-3/4  flex-grow p-6 flex justify-center"
            onClick={() => {
                setIsSideBarOpen(false);
            }}
        >
            {currentView ? <ItemView /> : <ItemForm />}
        </div>
    );
}

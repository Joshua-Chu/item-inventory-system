import { ItemForm } from "../ItemForm";

type MainProps = {
    setIsSideBarOpen: (curr: boolean) => void;
};

export function Main({ setIsSideBarOpen }: MainProps) {
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

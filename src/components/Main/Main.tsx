type MainProps = {
    setIsSideBarOpen: (curr: boolean) => void;
};

export function Main({ setIsSideBarOpen }: MainProps) {
    return (
        <div
            role="none"
            className="basis-3/4  flex-grow"
            onClick={() => {
                setIsSideBarOpen(false);
            }}
        >
            3
        </div>
    );
}

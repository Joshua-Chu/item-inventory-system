type SideBarProps = {
    setIsSideBarOpen: (curr: boolean) => void;
    isSideBarOpen: boolean;
};

export function SideBar({ setIsSideBarOpen, isSideBarOpen }: SideBarProps) {
    return (
        <div
            className={`sidebar bg-blue-800 text-blue-100 w-64  space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform opacity-0 md:opacity-100 -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out md:basis-1/4 ${
                isSideBarOpen ? "-translate-x-0 opacity-100" : ""
            }`}
        >
            <button
                type="button"
                onClick={() => {
                    setIsSideBarOpen(false);
                }}
                className="md:invisible"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    />
                </svg>
            </button>
        </div>
    );
}

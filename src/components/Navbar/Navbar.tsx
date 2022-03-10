type NavbarProps = {
    setIsSideBarOpen: (curr: boolean) => void;
    isSideBarOpen: boolean;
};

export function Navbar({ setIsSideBarOpen, isSideBarOpen }: NavbarProps) {
    return (
        <div className="bg-gray-800 text-gray-100 flex justify-between md:hidden">
            <button
                onClick={() => {
                    setIsSideBarOpen(!isSideBarOpen);
                }}
                type="button"
                className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-700 self-end"
            >
                <svg
                    className="h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    />
                </svg>
            </button>
        </div>
    );
}

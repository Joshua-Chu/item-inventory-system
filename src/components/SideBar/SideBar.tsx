import { useAppContext } from "../../store/AppProvider";
import { ItemList } from "../ItemList";

export function SideBar() {
    const { setIsSideBarOpen, isSideBarOpen, setCurrentView } = useAppContext();

    return (
        <div
            className={` overflow-y-auto lg:max-h-[700px] min-w-[280px] w-full rounded-l-md sidebar z-50 bg-white border-r-2 border-gray-200 text-blue-100 sm:w-64  space-y-6 py-7 px-4 absolute inset-y-0 left-0 transform opacity-0 md:opacity-100 -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out md:basis-1/4 ${
                isSideBarOpen ? "-translate-x-0 opacity-100" : ""
            }`}
        >
            <div className="grid gap-4">
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
                        fill="#000"
                        viewBox="0 0 24 24"
                        stroke="#000"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>

                <button
                    type="button"
                    onClick={() => {
                        setIsSideBarOpen(false);
                        setCurrentView(null);
                    }}
                    className="border-2 border-gray-300 px-4 py-2 rounded-2xl text-black ml-0 flex justify-center items-center gap-2"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="#000"
                        strokeWidth="2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                    </svg>
                    <p>Add Item</p>
                </button>
            </div>

            <ItemList />
        </div>
    );
}

import { useEffect, useState } from "react";
import "./App.css";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
    const [isSideBarOpen, setIsSideBarOpen] = useState(false);
    const { width } = useWindowSize();

    useEffect(() => {
        if (width && width > 768) {
            setIsSideBarOpen(false);
        }
    }, [width]);

    return (
        <div className="border-2 border-red-500 min-h-screen flex flex-col justify-center  items-center">
            <div className="border-2 border-green-500 w-[90%] md:w-[80%]  lg:w-[60%] max-w-[1440px] min-h-[700px] h-full flex relative flex-col md:flex-row">
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

                <div
                    role="none"
                    className="basis-3/4  flex-grow"
                    onClick={() => {
                        setIsSideBarOpen(false);
                    }}
                >
                    3
                </div>
            </div>
        </div>
    );
}

export default App;

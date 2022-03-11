import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <div className=" min-h-screen flex flex-col justify-center  items-center bg-gray-100">
            <div className=" w-[90%] md:w-[80%]   max-w-[1200px] min-h-[700px] h-full flex relative flex-col md:flex-row border-2 border-gray-200 rounded-2xl bg-white shadow-md">
                {children}
            </div>
        </div>
    );
}

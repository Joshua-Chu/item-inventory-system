import React from "react";

type LayoutProps = {
    children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
    return (
        <div className="border-2 border-red-500 min-h-screen flex flex-col justify-center  items-center">
            <div className="border-2 border-green-500 w-[90%] md:w-[80%]  lg:w-[60%] max-w-[1440px] min-h-[700px] h-full flex relative flex-col md:flex-row">
                {children}
            </div>
        </div>
    );
}

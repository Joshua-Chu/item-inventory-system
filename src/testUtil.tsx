/* eslint-disable react/jsx-no-constructed-context-values */
/* eslint-disable @typescript-eslint/no-empty-function */
import { render } from "@testing-library/react";
import React from "react";
import { AppContext } from "./store/AppProvider";

interface RenderWrappedProps {
    children: React.ReactNode;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    additionalProps: any;
}

export const initialStateForTesting = {
    isSideBarOpen: false,
    setIsSideBarOpen: () => {},
    name: "",
    items: [],
    currentView: null,
    setCurrentView: () => {},
    addItem: () => {},
    deleteItem: () => {},
    editItem: () => {},
    searchTerm: "",
    setSearchTerm: () => {},
    filteredList: [],
};

export function RenderWrapped({
    children,
    additionalProps,
}: RenderWrappedProps) {
    const contextVal = { ...initialStateForTesting, ...additionalProps };
    return render(
        <AppContext.Provider value={contextVal}>{children}</AppContext.Provider>
    );
}

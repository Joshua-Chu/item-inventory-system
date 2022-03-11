import React from "react";
import { AppProvider } from "./store/AppProvider";

interface RenderWrappedProps {
    children: React.ReactNode;
}

export function RenderWrapped(children: RenderWrappedProps) {
    return <AppProvider>{children}</AppProvider>;
}

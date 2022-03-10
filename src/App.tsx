import { useEffect, useState } from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { SideBar } from "./components/SideBar";
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
        <Layout>
            <Navbar
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />

            <SideBar
                isSideBarOpen={isSideBarOpen}
                setIsSideBarOpen={setIsSideBarOpen}
            />

            <Main setIsSideBarOpen={setIsSideBarOpen} />
        </Layout>
    );
}

export default App;

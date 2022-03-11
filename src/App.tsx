import { useEffect } from "react";
import "./App.css";
import { Layout } from "./components/Layout";
import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { SideBar } from "./components/SideBar";
import { useWindowSize } from "./hooks/useWindowSize";
import { useAppContext } from "./store/AppProvider";

function App() {
    const { setIsSideBarOpen } = useAppContext();
    const { width } = useWindowSize();

    useEffect(() => {
        if (width && width > 768) {
            setIsSideBarOpen(false);
        }
    }, [width]);

    return (
        <Layout>
            <Navbar />
            <SideBar />
            <Main />
        </Layout>
    );
}

export default App;

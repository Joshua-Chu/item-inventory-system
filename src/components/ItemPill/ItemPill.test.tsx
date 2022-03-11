import { render } from "@testing-library/react";
import { AppProvider } from "../../store/AppProvider";
import { ItemPill } from "./ItemPill";

const mockItem = {
    name: "this is a test",
    date: "03-11-2022",
    id: "1",
    description: "",
    imageURL: "",
};

describe("GIVEN ItemPill", () => {
    describe("WHEN component is mounted", () => {
        it("THEN displays the item passed", () => {
            const view = render(
                <AppProvider>
                    <ItemPill {...mockItem} />
                </AppProvider>
            );
            expect(view.getByText(mockItem.name)).toBeInTheDocument();
            expect(view.getByText(mockItem.date)).toBeInTheDocument();
        });
    });
});

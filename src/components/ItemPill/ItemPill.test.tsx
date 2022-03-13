import userEvent from "@testing-library/user-event";
import { RenderWrapped } from "../../testUtil";
import { ItemPill } from "./ItemPill";

const mockItem = {
    name: "this is a test",
    date: new Date("2022-03-13T02:40:41.973Z"),
    id: "1",
    description: "",
    imageURL: "",
};

describe("GIVEN ItemPill", () => {
    describe("WHEN component is mounted", () => {
        const setCurrentView = jest.fn();

        it("THEN displays the item passed", () => {
            const view = RenderWrapped({
                children: <ItemPill {...mockItem} />,
                additionalProps: { setCurrentView },
            });

            expect(view.getByText(mockItem.name)).toBeInTheDocument();
            expect(view.getByText("03-13-2022")).toBeInTheDocument();
        });

        it("THEN calls the setCurrentView Once when Clicked", () => {
            const view = RenderWrapped({
                children: <ItemPill {...mockItem} />,
                additionalProps: { setCurrentView },
            });
            const pill = view.getByRole("none");
            userEvent.click(pill);
            expect(setCurrentView).toHaveBeenCalledTimes(1);
        });
    });
});

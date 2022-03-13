/* eslint-disable react/jsx-no-constructed-context-values */
import { render } from "@testing-library/react";
import { AppContext } from "../../store/AppProvider";
import { initialStateForTesting } from "../../testUtil";
import { ItemList } from "./ItemList";

const filteredList = [
    {
        name: "this is a test",
        date: new Date(),
        id: "2",
        description: "",
        imageURL: "",
    },
    {
        name: "this is a test 2",
        date: new Date(),
        id: "1",
        description: "",
        imageURL: "",
    },
    {
        name: "this is a test 3",
        date: new Date(),
        id: "3",
        description: "",
        imageURL: "",
    },
];

describe("GIVEN ItemList", () => {
    describe("WHEN component is mounted", () => {
        it("THEN displays the item passed", () => {
            const contextVal = { ...initialStateForTesting, filteredList };
            const view = render(
                <AppContext.Provider value={contextVal}>
                    <ItemList />
                </AppContext.Provider>
            );
            expect(view.getAllByRole("listitem")).toHaveLength(3);
        });
    });
});

import { mutations } from "~/store";

let store;

describe("alterColumnToToolMapping", () => {

    beforeEach(() => {

        store = {

            state: {

                columnToToolMap : {

                    "column1": "cogatlas:MOCA",
                    "column2": null,
                    "column3": "cogatlas:UPDRSIII"
                }
            }
        };
    });

    it("Maps column to tool if it's not already mapped", () => {

        mutations.alterColumnToToolMapping(store.state, {columnName: "column2", toolIdentifier: "cogatlas:MOCA"});
        expect(store.state.columnToToolMap.column2).to.equal("cogatlas:MOCA");
    });

    it("Maps column to new tool overwriting previous mapping", () => {

        mutations.alterColumnToToolMapping(store.state, {columnName: "column3", toolIdentifier: "cogatlas:MOCA"});
        expect(store.state.columnToToolMap.column3).to.equal("cogatlas:MOCA");
    });

    it("Sets mapping to null if it's already mapped", () => {

        mutations.alterColumnToToolMapping(store.state, {columnName: "column1", toolIdentifier: "cogatlas:MOCA"});
        expect(store.state.columnToToolMap.column1).to.equal(null);
    });
});

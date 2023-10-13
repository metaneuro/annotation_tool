import categoryToolGroup from "~/components/category-toolgroup.vue";
import { getters } from "~/store";

let store;
let state;

describe("Tool Group component", () => {

    beforeEach(() => {
        state = {

            columnToCategoryMap: {
                column1: "Assessment Tool",
                column2: "Age",
                column3: "Assessment Tool"
            },

            dataDictionary: {

                annotated: {

                    column1: { missingValues: [] },
                    column2: { missingValues: [] },
                    column3: { missingValues: ["column3_value1", "column3_value2"] }
                }
            },

            dataTable: [

                { column1: 1, column2: "column2_value1", column3: "column3_value1" },
                { column1: 2, column2: "column2_value2", column3: "column3_value2" },
                { column1: 1, column2: "column2_value3", column3: "column3_value3" },
                { column1: 3, column2: "column2_value2", column3: "column3_value4" }
            ]
        };
        store = {

            state: state,
            getters: {
                getColumnsForCategory: getters.getColumnsForCategory(state)
            }
        };
    });

    it("mounts", () => {
        cy.mount(categoryToolGroup, {
            mocks: {

                $store: store
            }
        });

    });

    it("has a table of columns about assessment tools on the right", () => {

        cy.mount(categoryToolGroup, {
            mocks: {

                $store: store
            }
        });

        cy.get("[data-cy='assessment-column-table']").should("be.visible");

    });

    it("gets columns about assessment tools from the store and shows them to me", () => {

        cy.mount(categoryToolGroup, {
            mocks: {

                $store: store
            }

        });

        cy.get("[data-cy='assessment-column-table']").contains("column1");
        cy.get("[data-cy='assessment-column-table']").contains("column3");
    });

    it("has a dropdown with different assessment tools", () => {
        cy.mount(categoryToolGroup, {
            mocks: {

                $store: store
            }
        });

        cy.get("[data-cy='toolgroup-select']").should("be.visible");
        cy.get("[data-cy='toolgroup-select']").click();
        // For now the tool groups come from inside the component and we know they will include MOCA
        cy.get("[data-cy='toolgroup-select']").type("MOCA{enter}");
        cy.get("[data-cy='toolgroup-select']").should("contain", "MOCA");
    });

    it("lets me create new tools and shows them in a table", () => {
        cy.mount(categoryToolGroup, {
            mocks: {
                $store: store
            }
        });
        cy.get("[data-cy='assessment-tool-table']").should("not.exist");
        cy.get("[data-cy='toolgroup-select']").click();
        cy.get("[data-cy='toolgroup-select']").type("MOCA{enter}");
        cy.get("[data-cy='toolgroup-select']").should("contain", "MOCA");
        cy.get("[data-cy='assessment-tool-table']").should("be.visible");
        cy.get("[data-cy='assessment-tool-table']").contains("MOCA");

    });

    it("if I have already made a tool, I cannot make another one    ", () => {
        cy.mount(categoryToolGroup, {
            mocks: {
                $store: store
            }
        });
        // Do it the first time
        cy.get("[data-cy='toolgroup-select']").click();
        cy.get("[data-cy='toolgroup-select']").type("MOCA{enter}");
        cy.get("[data-cy='toolgroup-select']").click();
        cy.get("[data-cy='toolgroup-select']").type("SomeOtherThing{enter}");
        // I hope nobody asks me to explain this
        cy.get("[data-cy='assessment-tool-table']")
            .find("tr:contains('MOCA')")
            .filter((index, element) => Cypress.$(element).text() === "MOCA")
            .should("have.length", 1);

        // Do it again
        cy.get("[data-cy='toolgroup-select']").click();
        // The reason this is expected to fail is because the dropdown will not permit the
        // user to type and enter again. Maybe we should make the assert more explicit
        cy.get("[data-cy='toolgroup-select']").type("MOCA{enter}");
        cy.get("[data-cy='assessment-tool-table']")
            .find("tr:contains('MOCA')")
            .filter((index, element) => Cypress.$(element).text() === "MOCA")
            .should("have.length", 1);
    });

    it("when I click on a tool the tool gets highlighted", () => {
        cy.mount(categoryToolGroup, {
            mocks: {
                $store: store
            }
        });
        cy.get("[data-cy='toolgroup-select']").click();
        cy.get("[data-cy='toolgroup-select']").type("MOCA{enter}");
        // assert that the element has white background
        cy.get("[data-cy='assessment-tool-table']").contains("MOCA").should("have.css", "background-color", "rgb(255, 255, 255)");
        cy.get("[data-cy='assessment-tool-table']").contains("MOCA").click();
        cy.get("[data-cy='assessment-tool-table']").contains("MOCA").should("have.css", "background-color", "rgb(255, 0, 0)");
    });

    it("when I selet a tool and then click on a column, the column gets highlighted", () => {
        cy.mount(categoryToolGroup, {
            mocks: {
                $store: store
            }
        });
    });
});

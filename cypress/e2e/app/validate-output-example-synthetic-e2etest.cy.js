describe("to annotate an assessment ", () => {
    it("sets up some stuff", () => {
        // Load some data
        cy.visit('/');
        cy.get('[data-cy="data-table-selector"]').get('input').selectFile('cypress/fixtures/examples/good/example_synthetic.tsv', { force: true });

        /* ==== Generated with Cypress Studio ==== */
        cy.get('[data-cy="data-dictionary-selector"] > .row > form > .file-selector-button').click();
        cy.get('[data-cy="data-dictionary-selector"] > .row > form > .file-selector-button > input').selectFile('cypress/fixtures/examples/good/example_synthetic.json', { force: true });
        /* ==== End Cypress Studio ==== */
        cy.get("[data-cy='button-nextpage']").click();

        // Categorize some columns
        const desiredColumnMappings = [
            {
                "column": "participant_id",
                "category": "Subject ID"
            },
            {
                "column": "pheno_age",
                "category": "Age"

            },
            {
                "column": "pheno_sex",
                "category": "Sex"
            },
            {
                "column": "pheno_group",
                "category": "Diagnosis"
            },
            {
                "column": "tool1_item1",
                "category": "Assessment Tool"
            },
            {
                "column": "tool1_item2",
                "category": "Assessment Tool"
            },
            {
                "column": "tool2_item1",
                "category": "Assessment Tool"
            }
        ];
        desiredColumnMappings.forEach(desiredColumnMapping => {
            cy.get("[data-cy='categorization-table']").contains(desiredColumnMapping.category).click();
            cy.get("[data-cy='column-linking-table']").contains(desiredColumnMapping.column).click();
        });
        // Create two tools
        cy.get("[data-cy='toolgroup-select']").type("Montreal Cognitive Assessment{enter}");
        cy.get("[data-cy='toolgroup-select']").type("Unified Parkinson's Disease Rating Scale{enter}");
        // Map columns to tools
        const desiredColumnToolMappings = [
            {
                "column": "tool1_item1",
                "tool": "Montreal Cognitive Assessment"
            },
            {
                "column": "tool1_item2",
                "tool": "Montreal Cognitive Assessment"
            },
            {
                "column": "tool2_item1",
                "tool": "Unified Parkinson's Disease Rating Scale"
            }
        ];
        desiredColumnToolMappings.forEach(desiredColumnToolMapping => {
            cy.get("[data-cy='assessment-tool-table']").contains(desiredColumnToolMapping.tool).click();
            cy.get("[data-cy='assessment-column-table']").contains(desiredColumnToolMapping.column).click();
        });

        cy.get("[data-cy='button-nextpage']").click();

        /* ==== Generated with Cypress Studio ==== */
        cy.get('#vs2__combobox > .vs__selected-options > .vs__search').click();
        cy.get('#vs2__option-1').click();
        cy.get('[data-cy="dataTable-pheno_age"] > tbody > :nth-child(3) > [aria-colindex="3"] > [data-cy="missingValueButton_2"]').click();
        cy.get("[data-cy='annotation-category-tabs'] ul").contains("li", "Sex").click();
        cy.get('#vs3__combobox > .vs__selected-options > .vs__search').click();
        cy.get('#vs3__option-1').click();
        cy.get('#vs4__combobox > .vs__selected-options > .vs__search').click();
        cy.get('#vs4__option-0').click();
        cy.get('[data-cy="annot-categorical-Sex"] > .card > .card-body > [data-cy="categoricalTable"] > tbody > :nth-child(3) > [aria-colindex="5"] > [data-cy="missingValueButton_2"]').click();
        cy.get("[data-cy='annotation-category-tabs'] ul").contains("li", "Diagnosis").click();
        cy.get('#vs6__combobox > .vs__selected-options > .vs__search').click();
        cy.get('thead > tr > [aria-colindex="6"]').click();
        cy.get('[data-cy="isControlButton_0"]').click();
        cy.get('#vs7__combobox > .vs__selected-options > .vs__search').click();
        cy.get('#vs7__combobox > .vs__selected-options > .vs__search').clear('a');
        cy.get('#vs7__combobox > .vs__selected-options > .vs__search').type('attention');
        cy.get('#vs7__combobox').click();
        cy.get('#vs7__combobox > .vs__selected-options > .vs__search').clear();
        cy.get('#vs7__combobox > .vs__selected-options > .vs__search').type('Attention deficit hyperactivity disorder');
        cy.get('#vs7__option-2').click();
        cy.get('[aria-colindex="5"] > [data-cy="missingValueButton_2"]').click();
        cy.get("[data-cy='annotation-category-tabs'] ul").contains("li", "Assessment Tool").click();
        cy.get('[data-cy="tool-annotation-for-cogatlas:tsk_4a57abb949ece"] > tbody > :nth-child(4) > [aria-colindex="3"] > [data-cy="missingValueButton_3"]').click();
        cy.get('[data-cy="Assessment Tool"]').contains("Montreal Cognitive Assessment").click();
        cy.get('[data-cy="tool-annotation-for-cogatlas:trm_57964b8a66aed"] > tbody > :nth-child(7) > [aria-colindex="3"] > [data-cy="missingValueButton_6"]').click();
        cy.get('[data-cy="tool-annotation-for-cogatlas:trm_57964b8a66aed"] > tbody > :nth-child(4) > [aria-colindex="3"] > [data-cy="missingValueButton_3"]').click();
        cy.get('[data-cy="button-nextpage"]').click();
        cy.get('[data-cy="download-button"]').click();
        /* ==== End Cypress Studio ==== */

        cy.task("downloads", "cypress/downloads").then(folderStateAfter => {
            cy.readFile('cypress/downloads/' + folderStateAfter[folderStateAfter.length - 1]).then((outputContent) => {

                const expectedOutput = require('../../fixtures/examples/good/example_synthetic_expected_output.json');
                expect(outputContent).to.deep.equal(expectedOutput);
              });
        });
    });

});
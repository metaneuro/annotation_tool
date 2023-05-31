describe("tests on download page ui via programmatic state loading and store interaction", () => {

    // List of datasets to use for these tests
    const datasets = [

        // Good data
        require("../../fixtures/tests/good-test-config.json")

        // NOTE: Add more dataset json files here via 'require'
    ];

    beforeEach(() => {

        // Standard app setup
        cy.appSetup();
    });

    datasets.forEach((p_dataset) => {

        context("download page tests with " + p_dataset.description + " data", () => {

            beforeEach(() => {

                // 1. Open index page
                cy.visit("/");

                // 2. Load test data
                cy.loadTestDataIntoStore(p_dataset);

                // 3. Move to the download page
                cy.window().its("$nuxt.$router").then(router => {

                    // A. Route to download page
                    router.push({ path: "/download" });

                    // B. Once routing is complete, set the current page in the nuxt store
                    // (normally would happen via navigation clicks)
                    cy.commitToVuexStore("setCurrentPage", "download");
                });

                // 4. Categories required for this test and the number of required columns for each category
                const testCriteria = {

                    categories: [

                        ["Subject ID", 1],
                        ["Age", 1],
                        ["Sex", 1]
                    ]
                };

                // 5. Load the app with test criteria using the dataset
                cy.loadAppState("download", p_dataset, testCriteria);
            });

            it("Clicking download button downloads annotated data dictionary JSON", () => {

                // 0. Checking downloads folder state before click
                // NOTE: This runs the NodeJS command 'fs.readdirSync' to poll the 'annotation_tool/cypress/downloads folder'
                // as to its current contents
                cy.task("downloads", "cypress/downloads").then(folderStateBefore => {

                    // 1. Download the annotated data dictionary in Neurobagel JSON format
                    cy.get("[data-cy='download-button']")
                        .click();

                    // 2. Check contents of downloads folder
                    cy.task("downloads", "cypress/downloads").then(folderStateAfter => {

                        // A. Check number of files in downloads folder has increased by one
                        expect(folderStateAfter.length).to.be.eq(folderStateBefore.length + 1);

                        // B. Check that the last file retrieved by fs.readdirSync contains the data dictionary input file prefix
                        // as stored in dataDictionary.filename
                        cy.getVuexStoreValue("dataDictionary").then(dataDictionary => {

                            const dataDictionaryFilenameNoExt = dataDictionary.filename.split(".").slice(0, -1).join(".");

                            expect(folderStateAfter[folderStateAfter.length - 1]).to.contain(dataDictionaryFilenameNoExt);
                        });
                    });
                });
            });
        });
    });
});
// Facilitate Vue reactivity via 'Vue.set' and 'Vue.delete'
import Vue from "vue";

export const state = () => ({

    categories: {},

    columnToCategoryMapping: {},

    currentPage: "home",

    dataDictionary: {

        // stores the data dictionary loaded by the user (if available) in userProvided
        // and stores the extended version created during annotation in annotated.
        // We use this both as a state object and as the template for the downloadable data dictionary
        userProvided: {},
        annotated: {}
    },

    dataTable: []
});

export const getters = {

    getCategoryNames (p_state) {
        return Object.keys(p_state.categories);
    },

    getColumnDescription (p_state, p_columnName) {
        if ( Object.hasOwn(p_state.dataDictionary.annotated[p_columnName], "description") ) {
            return p_state.dataDictionary.annotated[p_columnName].description;
        }
        else {
            return "";
        }
    },

    getNextPage(p_state) {

        let nextPage = "";

        switch ( p_state.currentPage ) {

            case "home":
                nextPage = "categorization";
                break;
            case "categorization":
                nextPage = "annotation";
                break;
            case "annotation":
                nextPage = "download";
                break;
        }

        return nextPage;
    },

    getValueDescription (p_state, p_columnName, p_value) {
        // Returns the description of a value in a column, if that description exists
        // Otherwise it returns an empty string
        const description = p_state.dataDictionary.annotated[p_columnName].levels?.[p_value]?.description;
        if ( typeof description  === "undefined" ) {
            return "";
        }
        return description;
    },

    getColumnNames(p_state) {
        return (0 === p_state.dataTable.length) ? [] : Object.keys(p_state.dataTable[0]);
    }

};


export const mutations = {

    /**
     * Change the mapping between a column and a category
     * If the two are already mapped, the column should be unlinked
     * Otherwise the column is mapped to a different category
     *
     * @param {string} targetCategory Category the column should be mapped to
     * @param {string} columnName Column that will be mapped to the category
     */
    alterColumnCategoryMapping(p_state, targetCategory, columnName) {
        if (p_state.columnToCategoryMapping[columnName] === targetCategory) {
            p_state.columnToCategoryMapping[columnName] = null;
        }
        else {
            p_state.columnToCategoryMapping[columnName] = targetCategory;
        }

    },

    initializeColumnToCategoryMap(p_state, p_columns) {

        // Column to category map lists all columns as keys with default value of null
        p_state.columnToCategoryMapping =
            Object.fromEntries(p_columns.map((column) => [column, null]));
    },

    initializeDataDictionary(p_state) {

        let dataDictionary = {};
        for ( const columnName of Object.keys(p_state.dataTable[0]) ) {
            dataDictionary[columnName] = {"description": ""};
        }
        p_state.dataDictionary.annotated = Object.assign({}, dataDictionary);
    },

    setCurrentPage(p_state, p_pageName) {

        p_state.currentPage = p_pageName;
    },

    setDataTable(p_state, p_dataTable) {

        const columnNames = p_dataTable[0];
        let dataTable = [];
        
        for ( const [rowIndex, row] of p_dataTable.slice(1).entries() ) {
            // If the row is empty, we don't want it in our dataTable
            if ( "" === row.join("").trim() ) {
                continue;
            } else if ( row.length < columnNames.length ) {
                console.warn("WARNING: tsv row " + parseInt(rowIndex) + " has fewer columns than the tsv header!");
            }

            let rowArray = [];
            for ( const [colIndex, value] of row.entries() ) {
                // Rows that are longer than the header should be truncated
                if ( colIndex >= columnNames.length ) {
                    console.warn("WARNING: tsv row " + parseInt(rowIndex) + " has more columns than the tsv header!");
                    continue;
                        }

                rowArray.push([columnNames[colIndex], value]);
                    }
            dataTable.push(Object.fromEntries(rowArray));
        }

        p_state.dataTable = dataTable;
    }
};

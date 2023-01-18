import { mutations } from "~/store/index";

describe('alterColumnCategoryMapping', () => {
    it('Removes the mapping of column to category if they\'re already mapped', () => {
        const { alterColumnCategoryMapping } = mutations;
        const state = {
          columnToCategoryMap : {
              "column1": "Age",
              "column2": null,
              "column3": "Sex",
              "column4": null,
              "column5": null
          }
      };
      alterColumnCategoryMapping(state, "Sex", "column3");
      expect(state.columnToCategoryMap.column3).to.equal(null);
    });
    it('Changes the mapping of column to category if they\'re not already mapped', () => {
      const { alterColumnCategoryMapping } = mutations;
      const state = {
        columnToCategoryMap : {
            "column1": "Age",
            "column2": null,
            "column3": "Sex",
            "column4": null,
            "column5": null
        }
    };
    alterColumnCategoryMapping(state, "someCategory", "column1");
    expect(state.columnToCategoryMap.column1).to.equal("someCategory");
    alterColumnCategoryMapping(state, "someCategory", "column2");
    expect(state.columnToCategoryMap.column2).to.equal("someCategory");
    });
});

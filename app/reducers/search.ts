import { createSlice } from "@reduxjs/toolkit";

/**
 * Intial state for the search slice.
 */
const initialState = {
  searchTerm: "",
  highlightedArticles: [],
};

/**
 * Slice responsible for managing search state.
 */
const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {

    /**
     * Sets the current search term in the state.
     * @param state - Current state.
     * @param action - Action containing new search term.
     */
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },

    /**
     * Sets the list of highlighted articles based on the search term.
     * @param state - Current state.
     * @param action - Action containing the list of highlighted articles.
     */
    setHighlightedArticles(state, action) {
      state.highlightedArticles = action.payload;
    },
  },
});


/**
 * Search slice actions.
 */
export const { setSearchTerm, setHighlightedArticles } = searchSlice.actions;

/**
 * Search slice reducer function.
 */
export default searchSlice.reducer;

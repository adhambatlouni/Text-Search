"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchTerm, setHighlightedArticles } from "../reducers/search";
import articles from "../data/articles";
import ExitIcon from "../icons/exitIcon";

/**
 * SearchInput Component.
 * Displays and input field for entering search terms.
 * When a term is entered, it filters articles based on the term, and highlights matching parts.
 * Porvides an exit icon to clear the search term.
 * @returns SearchInput component.
 */
const SearchInput = () => {
  // Redux state.
  const dispatch = useDispatch();
  const searchTerm = useSelector((state: any) => state.search.searchTerm);

  // State for search term.
  const[term, setTerm] = useState("");

  /**
   * Filters articles based on the search term.
   * Highlights matching parts of the articles.
   * @param term - Search term.
   * @returns Filtered articles array with highlighted matching parts.
   */
  const filterArticles = (term: string) => {
    const searchTerm = term.toLowerCase();

    // Map over the articles array and apply filtering.
    const filteredArticles = articles.map((article) => {
      // Extract article properties.
      const title = article.title;
      const lowerTitle = article.title.toLowerCase();
      const date = article.date;
      const lowerDate = article.date.toLowerCase();
      const content = article.content;
      const lowerContent = article.content.toLowerCase();

      // CheckS if the search term exists in the title, and highlightS matching parts.
      const highlightedTitle = lowerTitle.includes(searchTerm)
        ? title.replace(
            new RegExp(escapeRegExp(searchTerm), "gi"),
            (match) => `<mark>${match}</mark>`
          )
        : title;

      // Checks if the search term exists in the date, and highlightS matching parts.
      const highlightedDate = lowerDate.includes(searchTerm)
        ? date.replace(
            new RegExp(escapeRegExp(searchTerm), "gi"),
            (match) => `<mark>${match}</mark>`
          )
        : date;

      // Checks if the search term exists in the content, and highlights matching parts.
      const highlightedContent = lowerContent.includes(searchTerm)
        ? content.replace(
            new RegExp(escapeRegExp(searchTerm), "gi"),
            (match) => `<mark>${match}</mark>`
          )
        : content;

      // Returns the article object with highlighted parts.
      return {
        ...article,
        highlightedTitle,
        highlightedDate,
        highlightedContent,
      };
    });

    // Returns the array of filtered articles with highlighted parts.
    return filteredArticles;
  };

  /**
   * Escapes special characters in a string for use in regular expressions.
   * @param str - Input string.
   * @returns - Escaped string.
   */
  const escapeRegExp = (str: string) => {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  };

  /**
   * Hook to dispatch an action to set the highlighted articles based on the filtered search term.
   */
  useEffect(() => {
    // Dispatches an action to set the highlighted articles based on the  filtered search term.
    dispatch(setHighlightedArticles(filterArticles(term)));
  }, [dispatch, term]);

  /**
   * Handles input change event.
   * Updates the search term state and filters articles accordingly.
   * @param e - Input change event.
   */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    setTerm(searchTerm);
    dispatch(setSearchTerm(searchTerm));
    const filteredArticles = filterArticles(searchTerm);
    dispatch(setHighlightedArticles(filteredArticles));
  };

  /**
   * Clears the search term and resets filtered articles when the exit icon is clicked.
   */
  const clearSearch = () => {
    if(term.length !== 0) {
      setTerm("");
      dispatch(setSearchTerm(""));
      dispatch(setHighlightedArticles([]));
    }
  };

  return (
    <div className="relative">
      {/* Input field for search term */}
      <input
        type="text"
        value={searchTerm}
        onChange={handleInputChange}
        placeholder="Search text..."
        className="w-full py-2 px-4 rounded-full border border-gray-300 text-lg focus:outline-none focus:border-black"
      />

      {/* Displays exit icon if search term is not empty */}
      {searchTerm.trim() !== "" && (
        <button
          className="absolute right-0 top-0 bottom-0 px-3 flex items-center hover:text-gray-600"
          onClick={clearSearch}
        >
          { /* Exit icon component */}
          <ExitIcon/>
        </button>
      )}
    </div>
  );
};

export default SearchInput;

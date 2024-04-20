"use client";
import { useSelector } from "react-redux";
import SearchInput from "./components/SearchInput";

/**
 * Home Component.
 * Represents the main page of the application.
 * Displays a search input field  and a list of highlighted articles.
 * @returns Home component.
 */
export default function Home() {
  // Selects highlighted articles from the redux store.
  const highlightedArticles = useSelector(
    (state: any) => state.search.highlightedArticles
  );

  return (
    <main className="flex flex-col min-h-screen items-center p-24">
      <div className="z-10 w-full max-w-5xl items-center font-mono">
        { /* Search input component */}
        <SearchInput />
        <div className="mt-4">
          {highlightedArticles.map((article: any, index: number) => (
            <div key={article.id} className="mb-4">
              {/* Article title */}
              <h2
                className="font-bold text-2xl mb-2"
                dangerouslySetInnerHTML={{ __html: article.highlightedTitle }}
              />

              {/* Article date */}
              <h4
                className="italic text-xl mb-2"
                dangerouslySetInnerHTML={{ __html: article.highlightedDate }}
              />

              {/* Article content */}
              <p
                className="mb-4"
                dangerouslySetInnerHTML={{ __html: article.highlightedContent }}
              />

              {/* Displays a horizontal line after each article, except the last one */}
              {index !== highlightedArticles.length - 1 && (
                <hr className="my-4 border-t-2 border-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

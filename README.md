# Text Search Next.js Project

This Next.js project implements a text search feauture using Redux for the state management.
It allows users to search for specific terms within a collection of articles, and highlights matching parts.

## Getting Started

To run this project locally, follow the below steps:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using `npm install`.
4. Run the development server using `npm run dev`.
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## About the Project

The project consists of several components and Redux slices:

- Home Component: Displays the main page of the application, including a search input field and a list of highlighted articles.
- Search Input Component: Provides an input field for entering search terms. It filters articles based on the search term and
  highlights matching parts.
- Exit Icon Component: Displays an SVG icon for exiting or clearing content.
- Redux Store: Manages the application state using Redux, including the search term and highlighted articles.
- Search Reducer: Defines Redux actions and reducers for updating the search term and highlighted articles.
- Articles Data: Contains a collection of articles used for searching and displaying. The articles data is stored in a JSON
  object.

## Technologies Used

- Next.js
- React
- Redux
- Tailwind CSS

## Usage

1. Enter a search term in the input field to search for matching articles.
2. The search results will display highlighted titles, dates, and content matching the search term.
3. Click the exit icon within the input field to clear the search term and reset the results.

"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "./store/store";

const inter = Inter({ subsets: ["latin"] });

/**
 * RootLayout Component.
 * Servers as the top-level layout for the entire application.
 * Wraps the provided children components with the Redux store provider.
 * @param - Child components.
 * @returns - HTML structure of the layout.
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>
      </body>
    </html>
  );
}

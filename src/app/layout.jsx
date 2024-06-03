"use client";
import "./globals.css";
import Header from "@/Components/Portfolio/Header";
import Footer from "@/Components/Portfolio/Footer";
import { useState } from "react";
import { Provider } from "@/Context/Context";

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState(false);
  return (
    <html lang="fa-IR">
      <body className={theme ? "dark-theme" : ""}>
        <Provider>
          <main className="Container">
            <Header />
            {children}
          </main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}

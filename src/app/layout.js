import "./globals.css";

export const metadata = {
  title: "Reza Kamali",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa-IR">
      <body>{children}</body>
    </html>
  );
}

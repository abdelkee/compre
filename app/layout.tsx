import ContextProvider from "../context/ContextProvider";
import "../styles/globals.css";
import Navigation from "./shared/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="min-h-screen bg-purple-50">
        <ContextProvider>
          {children}
          <Navigation />
        </ContextProvider>
      </body>
    </html>
  );
}

import "../styles/globals.css";
import Navigation from "./components/Navigation";
import ContextProvider from "./utils/contextProvider";

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

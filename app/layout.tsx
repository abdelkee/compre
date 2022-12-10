import "../styles/globals.css";
import ContextProvider from "../context/ContextProvider";
import Navigation from "./shared/Navigation";
import AuthContextProvider from "../context/AuthContextProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="min-h-screen bg-purple-50">
        <AuthContextProvider>
          <ContextProvider>
            {children}
            <Navigation />
          </ContextProvider>
        </AuthContextProvider>
      </body>
    </html>
  );
}

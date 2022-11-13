import "../styles/globals.css";
import Navigation from "./components/Navigation";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="min-h-screen bg-purple-50">
        {children}
        <Navigation />
      </body>
    </html>
  );
}

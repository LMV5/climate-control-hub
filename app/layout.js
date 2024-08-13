import NavBar from "@/components/NavBar";
import "./globals.css";

export const metadata = {
  title: "Climate Control Hub",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <NavBar />
      </body>
    </html>
  );
}

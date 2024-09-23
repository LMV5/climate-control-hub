import NavBar from "@/components/NavBar";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Climate Control Hub",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <ToastContainer />
      </body>
    </html>
  );
}

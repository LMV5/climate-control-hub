import NavBar from "@/components/NavBar";
import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
  title: "Climate Control Hub",
  description:
    "Climate Control Hub is your reliable assistant for managing indoor climate. Easily monitor temperature and humidity, access change history, and customize settings for each room.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main>{children}</main>
        <ToastContainer />
      </body>
    </html>
  );
}

import NavBar from "@/components/NavBar";
import "@/assets/styles/globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Analytics } from "@vercel/analytics/react";
import { metadata } from "./metadata";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <ToastContainer />
        <Analytics />
      </body>
    </html>
  );
}

import "./globals.css";

export const metadata = {
  title: "Climate Control Hub",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

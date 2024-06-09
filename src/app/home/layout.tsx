import type { Metadata } from "next";
import Navbar from "../../components/Navbar";

export const metadata: Metadata = {
  title: "Bookly Home page",
  description: "An application for Book review and stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="px-8">{children}</main>
    </>
  );
}

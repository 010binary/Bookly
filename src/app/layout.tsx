import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bookly",
  description: "An application for Book review and stuff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScreenTooLarge, setIsScreenTooLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenTooLarge(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    // Check the screen size on initial load
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <html lang="en">
      <body className={`${inter.className} max-w-screen-md mx-auto`}>
        {isScreenTooLarge && (
          <div className="fixed top-0 left-0 w-full bg-red-500 text-white text-center p-2 z-50">
            Only tablet and mobile view is available now
          </div>
        )}
        {children}
      </body>
    </html>
  );
}

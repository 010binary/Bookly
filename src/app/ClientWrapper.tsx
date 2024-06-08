"use client";
import { useEffect, useState } from "react";

export default function ClientWrapper({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isScreenTooLarge, setIsScreenTooLarge] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenTooLarge(window.innerWidth > 500);
    };

    window.addEventListener("resize", handleResize);

    // Check the screen size on initial load
    handleResize();

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-screen-md mx-auto relative">
      {!isScreenTooLarge ? (
        children
      ) : (
        <div className="fixed top-0 left-0 w-full h-full bg-red-500 text-white text-5xl grid place-content-center text-center p-2 z-50">
          Only tablet and mobile view is available now
        </div>
      )}
    </div>
  );
}

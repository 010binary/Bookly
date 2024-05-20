import LandingPage from "@/components/LandingPage";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between bg-grey-97 overflow-hidden">
      <div className="lg:hidden md:block sm:block">
        <LandingPage />
      </div>
      <div className="hidden lg:block">
        <p>Go to low screen size</p>
      </div>
    </main>
  );
}

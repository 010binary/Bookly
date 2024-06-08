import Image from "next/image";
import Link from "next/link";
import { AppPreview } from "../../public";
import { backgroundImage } from "../../public";
import ButtonComponent from "@/components/ButtonComponent";

const Home: React.FC = () => {
  return (
    <main className="relative flex min-h-screen flex-col items-center justify-between bg-cover bg-center">
      <Image
        src={backgroundImage}
        alt="bg-image"
        className="w-full h-full absolute top-0 -z-10"
      />
      {/* overlay */}
      <div className="absolute inset-0 bg-black opacity-10 z-0"></div>

      {/* image */}
      <div className="relative z-10 flex flex-col w-4/5 items-center mt-20">
        <Image
          src={AppPreview}
          alt="App Preview"
          className="mb-4 mt-8 w-full"
        />
      </div>
      <div className="absolute flex flex-col justify-between bottom-0 text-center w-full bg-white text-black mt-4 px-7 h-1/3 py-10 z-50 rounded-tl-[50px] rounded-tr-[50px]">
        <p className="capitalize">welcome</p>
        <h1 className="text-2xl font-bold">
          Challenge yourself to read more this year!
        </h1>
        <Link href="/home" className="mt-4">
          <ButtonComponent>Let’s Get Started</ButtonComponent>
        </Link>
      </div>
    </main>
  );
}

export default Home;
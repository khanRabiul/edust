import Image from "next/image";

export default function Page(): JSX.Element {
  return (
    <main className="flex flex-col items-center gap-8 min-h-screen p-24">
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to edust docs!
      </h1>
      <Image
        src={
          "https://res.cloudinary.com/dbaa3pxau/image/upload/v1728625005/edust-cover_l3xkow.svg"
        }
        width={700}
        height={200}
        alt="Edust Logo"
      />
    </main>
  );
}

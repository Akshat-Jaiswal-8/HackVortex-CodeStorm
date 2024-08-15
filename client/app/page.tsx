import { Navbar } from "@/components/navbar";

export default async function Home() {
  return (
    <main>
      <Navbar />
      <div className={"h-full flex items-center justify-center"}>
        Mind Sparks
      </div>
    </main>
  );
}

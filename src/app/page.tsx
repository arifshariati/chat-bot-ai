import Image from "next/image";
import NavBar from "@/components/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <NavBar />
      <section>
        <div className="flex items-center justify-center flex-col mt-[80px] gap-4 ">
          <span className="text-secondary bg-primary px-4 py-2 rounded-full text-lg">An AI powered assistant chatbot</span>
          <h1 className="font-bold text-6xl">🤖 CHAT BOT AI</h1>
          <p className="text-center max-w-[500px]">Your AI powered assistant! Embed Chat Bot AI into any website with just a snippet of code!</p>
          <Button className="bg-primary font-bold text-white px-4">Start For Free</Button>
          <Image
            src="/images/iphoneproductimage.png"
            width={400}
            height={100}
            alt="Chat Bot AI Iphone App Screen Image"
            className="max-w-lg object-contain"
          />
        </div>
      </section>
    </main>
  );
}

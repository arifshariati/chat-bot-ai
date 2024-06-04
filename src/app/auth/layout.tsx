import Image from "next/image";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

type Props = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
  const user = await currentUser();
  if (user) redirect("/");
  return (
    <div className="h-screen flex w-full justify-center">
      <div className="w-[600px] ld:w-full flex flex-col items-start p-6">
        <h1>🤖 AI</h1>
        {children}
      </div>
      <div className="hidden lg:flex flex-1 w-full max-h-full max-w-4000px overflow-hidden relative bg-cream flex-col pt-10 pl-24 gap-3">
        <h2 className="text-gravel md:text-4xl font-bold"> Bonjour! Je suis votre assistante. </h2>
        <p className="text-iridium md:text-sm mb-10">
          Je peux vous aider sans vous demander de remplir des formulaires fastidieux.
          <br />
          Sautons au pays des merveilles 🚀 🚀
        </p>
        <Image
          src="/images/app-ui.png"
          alt="app image"
          loading="lazy"
          sizes="30"
          className="absolute shrink-0 !w-[1600px] top-48"
          width={0}
          height={0}
        />
      </div>
    </div>
  );
};

export default AuthLayout;

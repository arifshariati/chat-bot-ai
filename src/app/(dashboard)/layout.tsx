import { onLoginUser } from "@/actions/auth";
import SideBar from "@/components/sidebar";
import { ChatProvider } from "@/context/use-chat-context";

type DashboardLayoutProps = { children: React.ReactNode };

const DashboardLayout = async ({ children }: DashboardLayoutProps) => {
  const authenticated = await onLoginUser();
  if (!authenticated) return null;

  return (
    <ChatProvider>
      <div className="flex h-screen w-full">
        <SideBar domains={authenticated.domain} />
        <div className="w-full h-screen flex flex-col pl-20 md:pl-4">{children}</div>
      </div>
    </ChatProvider>
  );
};

export default DashboardLayout;

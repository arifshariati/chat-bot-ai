"use client";
import useSideBar from "@/hooks/useSideBar";
import { cn } from "@/lib/utils";
import MaximizedMenu from "./maximized-menu";
import { MinimizedMenu } from "./minimized-menu";

type Props = {
  domains:
    | {
        id: string;
        name: string;
        icon: string;
      }[]
    | null
    | undefined;
};

const SideBar = ({ domains }: Props) => {
  const { expand, onExpand, page, onSignOut } = useSideBar();

  return (
    <div
      className={cn(
        "bg-cream dark:bg-neutral-950 h-full w-[60px] fill-mode-forwards fixed md:relative",
        expand == undefined && "",
        expand == true ? "animate-open-sidebar" : expand == false && "animate-close-sidebar"
      )}
    >
      {expand ? (
        <MaximizedMenu domains={domains} current={page!} onExpand={onExpand} onSignOut={onSignOut} />
      ) : (
        <MinimizedMenu domains={domains} onShrink={onExpand} current={page!} onSignOut={onSignOut} />
      )}
    </div>
  );
};

export default SideBar;

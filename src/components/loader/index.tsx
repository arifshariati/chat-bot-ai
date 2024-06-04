import { cn } from "@/lib/utils";
import React from "react";
import { Spinner } from "../spinner";

type LoaderProps = {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

const Loader = ({ loading, children, className, noPadding }: LoaderProps) => {
  if (loading) {
    return (
      <div className={cn(className || "w-full py-5 flex justify-center")}>
        <Spinner noPadding={noPadding} />
      </div>
    );
  }
  return children;
};

export default Loader;

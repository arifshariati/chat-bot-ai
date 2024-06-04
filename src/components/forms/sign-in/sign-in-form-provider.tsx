"use client";

import Loader from "@/components/loader";
import { AuthContextProvider } from "@/context/use-auth-context";
import { useSignInForm } from "@/hooks/useSignInForm";
import React from "react";
import { FormProvider } from "react-hook-form";

type SignInFormProviderProps = {
  children: React.ReactNode;
};

const SignInFormProvider = ({ children }: SignInFormProviderProps) => {
  const { methods, onHandleSubmit, loading } = useSignInForm();

  return (
    <AuthContextProvider>
      <FormProvider {...methods}>
        <form onSubmit={onHandleSubmit} className="h-full">
          <div className="flex flex-col justify-between gap-3 h-full">
            <Loader loading={loading}>{children}</Loader>
          </div>
        </form>
      </FormProvider>
    </AuthContextProvider>
  );
};

export default SignInFormProvider;

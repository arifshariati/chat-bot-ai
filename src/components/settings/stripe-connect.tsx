"use client";
import { useStripe } from "@/hooks/useBilling";
import { Button } from "../ui/button";
import Loader from "../loader";

type StripeConnectProps = {
  connected: boolean;
};

export const StripeConnect = ({ connected }: StripeConnectProps) => {
  const { onStripeConnect, onStripeAccountPending } = useStripe();
  return (
    <Button disabled={connected} onClick={onStripeConnect}>
      <Loader loading={onStripeAccountPending}>{connected ? "Connected" : "Connect to stripe"}</Loader>
    </Button>
  );
};

import { currentUser } from "@clerk/nextjs/server";
import { onGetAllCampaigns, onGetAllCustomers } from "@/actions/mail";
import EmailMarketing from "@/components/email-marketing";
import InfoBar from "@/components/infobar";

const EmailMarketingPage = async () => {
  const user = await currentUser();

  if (!user) return null;
  const customers = await onGetAllCustomers(user.id);
  const campaigns = await onGetAllCampaigns(user.id);

  return (
    <>
      <InfoBar></InfoBar>
      <EmailMarketing campaign={campaigns?.campaign!} subscription={customers?.subscription!} domains={customers?.domains!} />
    </>
  );
};

export default EmailMarketingPage;

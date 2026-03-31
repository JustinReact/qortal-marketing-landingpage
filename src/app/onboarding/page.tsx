import { notFound } from "next/navigation";
import Onboarding from "../../components/Onboarding/Onboarding";

export const metadata = {
  title: "Qortal Hub Onboarding",
  description: "Download the Qortal Ebook for free"
};

const OnboardingPage = () => {
  // Hide onboarding page in production temporarily
  if (process.env.NODE_ENV === "production") {
    return notFound();
  }
  return <Onboarding />;
};

export default OnboardingPage;

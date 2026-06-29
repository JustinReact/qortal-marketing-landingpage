import Faq from "@/components/Faq/Faq";
import { faqSections } from "@/components/Faq/faqData";
import { faqAnswerToPlainText } from "@/components/Faq/faqAnswerUtils";

export const metadata = {
  title: "FAQ - Qortal",
  description:
    "Frequently asked questions about installing, using, and securing Qortal."
};

function buildFaqJsonLd() {
  const mainEntity = faqSections.flatMap((section) =>
    section.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faqAnswerToPlainText(item.answer)
      }
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity
  };
}

const FaqPage = () => (
  <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFaqJsonLd()) }}
    />
    <Faq />
  </>
);

export default FaqPage;

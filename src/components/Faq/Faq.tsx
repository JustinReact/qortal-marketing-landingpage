"use client";

import { useCallback, useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import { Tooltip } from "@mui/material";
import { renderFaqAnswer } from "./renderFaqAnswer";
import {
  allFaqItemIds,
  allFaqSectionIds,
  faqSections
} from "./faqData";
import {
  FaqAccordion,
  FaqAccordionDetails,
  FaqAccordionList,
  FaqAccordionSummary,
  FaqAccordionWrapper,
  FaqAnswerText,
  FaqContainer,
  FaqCopyButton,
  FaqHeader,
  FaqInner,
  FaqQuestionText,
  FaqSectionBlock,
  FaqSectionHeading,
  FaqExpandButton,
  FaqSubtitle,
  FaqSummaryActions
} from "./Faq-styles";

const Faq = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const applyHash = useCallback((hash: string) => {
    const id = hash.replace(/^#/, "");
    if (!id) return;

    if (allFaqItemIds.includes(id)) {
      setExpanded((prev) => ({ ...prev, [id]: true }));
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
      return;
    }

    if (allFaqSectionIds.includes(id)) {
      requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      });
    }
  }, []);

  useEffect(() => {
    applyHash(window.location.hash);

    const onHashChange = () => applyHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [applyHash]);

  const handleAccordionChange =
    (itemId: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prev) => ({ ...prev, [itemId]: isExpanded }));
      if (isExpanded) {
        window.history.replaceState(null, "", `#${itemId}`);
      }
    };

  const handleCopyLink = async (
    e: React.MouseEvent,
    itemId: string
  ) => {
    e.stopPropagation();
    const url = `${window.location.origin}/faq#${itemId}`;
    try {
      await navigator.clipboard.writeText(url);
      setCopiedId(itemId);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // clipboard unavailable
    }
  };

  return (
    <FaqContainer>
      <FaqInner>
        <FaqHeader>Frequently Asked Questions</FaqHeader>
        <FaqSubtitle>
          Common questions about installing, using, and securing Qortal.
        </FaqSubtitle>

        {faqSections.map((section) => (
          <FaqSectionBlock key={section.id}>
            <FaqSectionHeading id={section.id}>
              {section.title}
            </FaqSectionHeading>
            <FaqAccordionList>
              {section.items.map((item) => (
                <FaqAccordionWrapper key={item.id} id={item.id}>
                  <FaqAccordion
                    disableGutters
                    elevation={0}
                    square={false}
                    expanded={expanded[item.id] ?? false}
                    onChange={handleAccordionChange(item.id)}
                  >
                    <FaqAccordionSummary expandIcon={false}>
                      <FaqQuestionText>{item.question}</FaqQuestionText>
                    </FaqAccordionSummary>
                    <FaqAccordionDetails>
                      <FaqAnswerText>{renderFaqAnswer(item.answer)}</FaqAnswerText>
                    </FaqAccordionDetails>
                  </FaqAccordion>
                  <FaqSummaryActions>
                    <Tooltip
                      title={copiedId === item.id ? "Copied!" : "Copy link"}
                      placement="top"
                    >
                      <FaqCopyButton
                        size="small"
                        aria-label={`Copy link to ${item.question}`}
                        onClick={(e) => handleCopyLink(e, item.id)}
                      >
                        <LinkIcon fontSize="small" />
                      </FaqCopyButton>
                    </Tooltip>
                    <FaqExpandButton
                      size="small"
                      expanded={expanded[item.id] ?? false}
                      aria-label={
                        expanded[item.id]
                          ? `Collapse ${item.question}`
                          : `Expand ${item.question}`
                      }
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAccordionChange(item.id)(
                          e,
                          !(expanded[item.id] ?? false)
                        );
                      }}
                    >
                      <ExpandMoreIcon fontSize="small" />
                    </FaqExpandButton>
                  </FaqSummaryActions>
                </FaqAccordionWrapper>
              ))}
            </FaqAccordionList>
          </FaqSectionBlock>
        ))}
      </FaqInner>
    </FaqContainer>
  );
};

export default Faq;

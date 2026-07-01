"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import LinkIcon from "@mui/icons-material/Link";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { Tooltip, useTheme } from "@mui/material";
import { toast } from "react-toastify";
import { renderFaqAnswer } from "./renderFaqAnswer";
import { filterFaqSections } from "./faqSearch";
import { highlightFaqText } from "./faqHighlight";
import { FaqToastStyles, getFaqToastOptions } from "./faqToast";
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
  FaqExpandButton,
  FaqHeader,
  FaqInner,
  FaqQuestionText,
  FaqSearchClear,
  FaqSearchContainer,
  FaqSearchEmpty,
  FaqSearchIcon,
  FaqSearchInput,
  FaqSectionBlock,
  FaqSectionHeading,
  FaqSubtitle,
  FaqSummaryActions
} from "./Faq-styles";

const Faq = () => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [searchQuery, setSearchQuery] = useState("");

  const filteredSections = useMemo(
    () => filterFaqSections(faqSections, searchQuery),
    [searchQuery]
  );

  const isSearching = searchQuery.trim().length > 0;
  const hasResults = filteredSections.length > 0;

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

  useEffect(() => {
    if (!isSearching) return;

    const matchingIds = filteredSections.flatMap((section) =>
      section.items.map((item) => item.id)
    );

    setExpanded((prev) => {
      const next = { ...prev };
      matchingIds.forEach((id) => {
        next[id] = true;
      });
      return next;
    });
  }, [searchQuery, filteredSections, isSearching]);

  const handleAccordionChange =
    (itemId: string) => (_: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded((prev) => ({ ...prev, [itemId]: isExpanded }));
      if (isExpanded) {
        window.history.replaceState(null, "", `#${itemId}`);
      }
    };

  const handleCopyLink = async (e: React.MouseEvent, itemId: string) => {
    e.stopPropagation();
    const url = `${window.location.origin}/faq#${itemId}`;
    try {
      await navigator.clipboard.writeText(url);
      toast.success(
        "Link copied! You can share this question with someone else.",
        getFaqToastOptions(theme)
      );
    } catch {
      toast.error(
        "Could not copy link. Please try again.",
        getFaqToastOptions(theme)
      );
    }
  };

  return (
    <FaqContainer>
      <FaqToastStyles />
      <FaqInner>
        <FaqHeader>Frequently Asked Questions</FaqHeader>
        <FaqSubtitle>
          Common questions about installing, using, and securing Qortal.
        </FaqSubtitle>

        <FaqSearchContainer>
          <FaqSearchIcon>
            <SearchIcon
              fontSize="small"
              sx={{ color: theme.palette.text.secondary }}
            />
          </FaqSearchIcon>
          <FaqSearchInput
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search questions and answers..."
            aria-label="Search FAQ"
          />
          {isSearching && (
            <FaqSearchClear
              size="small"
              aria-label="Clear search"
              onClick={() => setSearchQuery("")}
            >
              <ClearIcon fontSize="small" />
            </FaqSearchClear>
          )}
        </FaqSearchContainer>

        {isSearching && !hasResults && (
          <FaqSearchEmpty>
            No questions match your search. Try different keywords like
            &quot;SmartScreen&quot;, &quot;QORT&quot;, or &quot;seed phrase&quot;.
          </FaqSearchEmpty>
        )}

        {filteredSections.map((section) => (
          <FaqSectionBlock key={section.id}>
            <FaqSectionHeading id={section.id}>
              {isSearching
                ? highlightFaqText(section.title, searchQuery, section.id)
                : section.title}
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
                      <FaqQuestionText>
                        {isSearching
                          ? highlightFaqText(
                              item.question,
                              searchQuery,
                              item.id
                            )
                          : item.question}
                      </FaqQuestionText>
                    </FaqAccordionSummary>
                    <FaqAccordionDetails>
                      <FaqAnswerText>
                        {renderFaqAnswer(
                          item.answer,
                          isSearching ? searchQuery : undefined
                        )}
                      </FaqAnswerText>
                    </FaqAccordionDetails>
                  </FaqAccordion>
                  <FaqSummaryActions>
                    <Tooltip title="Copy link" placement="top">
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

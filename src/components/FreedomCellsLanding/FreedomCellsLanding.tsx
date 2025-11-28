"use client";
import React from "react";
import {
  CTAButton,
  CTAHeading,
  CTASection,
  CTAText,
  HeroBadge,
  HeroButtons,
  HeroCopy,
  HeroOverlay,
  HeroOverlayContent,
  HeroSection,
  HeroStats,
  HeroSubtitle,
  HeroTitle,
  HeroVisual,
  HighlightCard,
  HighlightText,
  HighlightTitle,
  HighlightsGrid,
  HighlightsSection,
  OverlayText,
  OverlayTitle,
  PageContainer,
  SecondaryLink,
  SectionDescription,
  SectionTitle,
  StatCard,
  StatLabel,
  StatValue,
  StepCard,
  StepIndex,
  StepText,
  StepTitle,
  StepsGrid,
  StepsSection
} from "./FreedomCellsLanding-styles";
import { HeroImage } from "./FreedomCellsLanding-styles";

const highlightCards = [
  {
    title: "Guided onboarding",
    text: "A purpose-built walkthrough that installs Qortal Hub, sets up Qortal Core, and handles the essentials without centralized accounts."
  },
  {
    title: "Group coordination",
    text: "The onboarding flow automatically includes the “Freedom Cell Network” group step, helping people discover other Freedom Cells users."
  }
];

const steps = [
  {
    title: "Install the Qortal stack",
    text: "Download Qortal Hub for Windows, macOS, or Linux. ",
    index: "Step 01"
  },
  {
    title: "Create & secure your account",
    text: "The walkthrough helps new members generate their Qortal account, and register a Qortal name.",
    index: "Step 02"
  },
  {
    title: "Join the Freedom Cell group",
    text: "A dedicated step that guides people into the official group.",
    index: "Step 03"
  }
];

const stats = [
  { value: "100%", label: "Peer-to-peer infrastructure" },
  { value: "0", label: "Centralized servers required" }
];

const FreedomCellsLanding = () => {
  return (
    <PageContainer>
      <HeroSection>
        <HeroCopy>
          <HeroBadge>Freedom Cells on Qortal</HeroBadge>
          <HeroTitle>
            Launch your Freedom Cell with sovereign digital infrastructure
          </HeroTitle>
          <HeroSubtitle>
            Start with our onboarding journey built just for the Freedom Cell
            Network. They&apos;ll setup Qortal Hub, redeem QORT, and join the
            group in a single flow.
          </HeroSubtitle>
          <HeroButtons>
            <CTAButton href="/onboarding?ref=freedomcells">Onboard</CTAButton>
            <SecondaryLink href="#steps">
              See the onboarding flow →
            </SecondaryLink>
          </HeroButtons>
          <HeroStats>
            {stats.map((stat) => (
              <StatCard key={stat.label}>
                <StatValue>{stat.value}</StatValue>
                <StatLabel>{stat.label}</StatLabel>
              </StatCard>
            ))}
          </HeroStats>
        </HeroCopy>
      </HeroSection>

      <HighlightsSection>
        <SectionTitle>
          Everything Freedom Cells need to scale online
        </SectionTitle>
        <SectionDescription>
          The Qortal stack gives communities resilient communications, public
          and encrypted chat, decentralized apps, and a decentralized trade
          portal.
        </SectionDescription>
        <HighlightsGrid>
          {highlightCards.map((card) => (
            <HighlightCard key={card.title}>
              <HighlightTitle>{card.title}</HighlightTitle>
              <HighlightText>{card.text}</HighlightText>
            </HighlightCard>
          ))}
        </HighlightsGrid>
      </HighlightsSection>

      <StepsSection id="steps">
        <SectionTitle>Smooth onboarding, zero friction</SectionTitle>
        <SectionDescription>
          The steps mirror our default onboarding, but with the additional “Join
          the Freedom Cell Network” checkpoint so newcomers immediately connect
          with organizers.
        </SectionDescription>
        <StepsGrid>
          {steps.map((step) => (
            <StepCard key={step.title}>
              <StepIndex>{step.index}</StepIndex>
              <StepTitle>{step.title}</StepTitle>
              <StepText>{step.text}</StepText>
            </StepCard>
          ))}
        </StepsGrid>
      </StepsSection>

      <CTASection>
        <CTAHeading>Ready to onboard your Freedom Cell?</CTAHeading>
        <CTAText>
          Share qortal.dev/freedomcells and tell members to click {`"Onboard"`}.
        </CTAText>
        <CTAButton href="/onboarding?ref=freedomcells">Onboard</CTAButton>
      </CTASection>
    </PageContainer>
  );
};

export default FreedomCellsLanding;

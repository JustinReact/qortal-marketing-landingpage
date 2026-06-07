export type OnboardingScreenshotModal = {
  images: string[];
  initialIndex: number;
} | null;

export type OpenOnboardingScreenshot = (
  images: string[],
  initialIndex: number
) => void;

export function getStepImageSources(
  steps: { imageSrc?: string }[]
): string[] {
  return steps.filter((step) => step.imageSrc).map((step) => step.imageSrc!);
}

export function getStepImageIndex(
  steps: { imageSrc?: string }[],
  stepIndex: number
): number {
  return (
    steps.slice(0, stepIndex + 1).filter((step) => step.imageSrc).length - 1
  );
}

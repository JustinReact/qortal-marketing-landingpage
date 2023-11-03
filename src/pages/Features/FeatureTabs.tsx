import { FC } from "react";
import { FeatureData } from "./Features";
import {
  FeatureCard,
  FeatureCardImg,
  FeatureCardRow,
  FeatureCardTitle,
  FeatureTabsRow
} from "./Features-styles";

interface FeatureTabsProps {
  featureData: FeatureData;
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const FeatureTabs: FC<FeatureTabsProps> = ({
  featureData,
  activeTab,
  onTabChange
}) => {
  return (
    <FeatureTabsRow>
      {Object.keys(featureData).map((featureKey: string) => (
        <FeatureCard
          key={featureKey}
          className={activeTab === featureKey ? "active" : ""}
          onClick={() => onTabChange(featureKey)}
        >
          <FeatureCardRow>
            <FeatureCardImg
              src={featureData[featureKey].image}
              alt="feature-small-image"
            />
          </FeatureCardRow>
          <FeatureCardTitle>
            {featureData[featureKey].smallTitle}
          </FeatureCardTitle>
          {featureData[featureKey].smallText}
        </FeatureCard>
      ))}
    </FeatureTabsRow>
  );
};

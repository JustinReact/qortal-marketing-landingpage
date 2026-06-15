export interface WikiSearchResult {
  sectionTitle: string;
  pageTitle: string;
  headingTitle: string | null;
  parentHeading: string | null;
  url: string;
  anchorId: string | null;
}

export interface WikiPageProps {
  title: string;
  url: string;
  headings: {
    title: string;
    depth: number;
    id: string;
    parentTitle?: string;
  }[];
}

export interface WikiProps {
  title?: string;
  children: React.ReactNode;
  sections: Record<
    string,
    {
      title: string;
      url: string;
      headings: { title: string; depth: number, id: string }[];
    }[]
  >;
}

export interface SidebarProps {
  sections: Record<
    string,
    {
      title: string;
      url: string;
      headings: { title: string; depth: number, id: string }[];
    }[]
  >;
  handleNavigation: (url: string) => void;
  showInFullScreenMobile: boolean;
  setExpandedMobile: (expanded: boolean) => void;
}

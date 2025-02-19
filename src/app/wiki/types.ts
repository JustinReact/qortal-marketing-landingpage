export interface WikiPageProps {
  title: string;
  url: string;
  headings: {
    title: string;
    depth: number;
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
      headings: { title: string; depth: number }[];
    }[]
  >;
}

export interface SidebarProps {
  sections: Record<
    string,
    {
      title: string;
      url: string;
      headings: { title: string; depth: number }[];
    }[]
  >;
  handleNavigation: (url: string) => void;
}

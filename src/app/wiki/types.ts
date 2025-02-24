export interface WikiPageProps {
  title: string;
  url: string;
  headings: {
    title: string;
    depth: number;
    id: string;
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
}

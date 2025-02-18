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
  pages: WikiPageProps[];
  children: React.ReactNode;
}

export interface SidebarProps {
  pages: WikiPageProps[];
}

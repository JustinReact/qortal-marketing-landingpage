export interface IconTypes {
  color: string;
  height: string;
  width: string;
  onClickFunc?: () => void;
}

export interface ChevronSVGProps extends IconTypes {
  className?: string;
}
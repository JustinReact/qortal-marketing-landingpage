export interface IconTypes {
  color: string;
  height: string;
  width: string;
  className?: string;
  onClickFunc?: ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void) | (() => void);
}

import { FC } from "react";

interface ExtensionProps {
  setTheme: (val: string) => void;
}

export const Extension: FC<ExtensionProps> = ({setTheme}) => {
  return (
    <div>Extension</div>
  )
}

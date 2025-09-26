import { PropsWithChildren } from "react";

export const Container: React.FC<PropsWithChildren<{className?: string}>> = ({ children, className }) => {
  return (
    <div className={`max-w-[1360px] w-full px-[40px] max-sm:px-[15px] mx-auto ${className}`}>{children}</div>
  );
};

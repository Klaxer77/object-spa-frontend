'use client';

import { useScreenWidth } from "@/shared/utils/useScreenWidth";
import { ProgramsDesktop } from "./ProgramsDesktop";
import { ProgramsMobile } from "./ProgramsMobile";

export const Programs: React.FC = () => {
  const width = useScreenWidth()

  return (
    <>
      {
        width > 1440 ? (
          <ProgramsDesktop />
        ) : (
          <ProgramsMobile />
        )
      }
    </>
  );
};

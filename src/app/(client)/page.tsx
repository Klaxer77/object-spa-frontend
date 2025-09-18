import { MainSliderSection } from "@/sections/main_slider";
import { SpaSection } from "@/sections/spa";
import { SteamBaths } from "@/sections/steam_baths";
import { TitleSection } from "@/sections/Title";

export default function Home() {
  return (
    <>
      <TitleSection />
      <MainSliderSection />
      <SteamBaths />
      <SpaSection />
    </>
  );
}

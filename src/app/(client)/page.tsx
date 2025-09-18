import { MainSliderSection } from "@/sections/main_slider";
import { SteamBaths } from "@/sections/steam_baths";
import { TitleSection } from "@/sections/Title";

export default function Home() {
  return (
    <>
      <TitleSection />
      <MainSliderSection />
      <SteamBaths />
    </>
  );
}

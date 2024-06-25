import Anh4 from "@/assets/images/footers/cham-cuu-2.png";
import Anh3 from "@/assets/images/footers/cham-cuu.png";
import Anh2 from "@/assets/images/footers/hiphub.png";
import Anh1 from "@/assets/images/footers/tp.png";
import Anh5 from "@/assets/images/footers/twc-white.png";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

export function Clients() {
  return (
    <Drawer>
      <DrawerTrigger className="font-gta text-xs font-medium uppercase text-black md:text-sm">
        Clients
      </DrawerTrigger>
      <DrawerTitle className="sr-only">Clients</DrawerTitle>
      <DrawerDescription className="sr-only">
        TWC HAS HAD THE PLEASURE OF WORKING WITH SOME TOP NOTCH BRAND. THE LIKES
        OF:
      </DrawerDescription>
      <DrawerContent
        shouldDisplayOverlay={false}
        className="bg-black text-white"
      >
        <div className="container p-6">
          <div className="flex flex-col gap-4">
            <p className="w-full font-epilogue text-xs font-bold md:w-1/3">
              TWC HAS HAD THE PLEASURE OF WORKING WITH SOME TOP NOTCH BRAND. THE
              LIKES OF:
            </p>
            <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] place-items-center gap-4">
              <img className="shrink-0" src={Anh1.src} alt="TPBank" />
              <img className="shrink-0" src={Anh2.src} alt="Hiphub" />
              <img
                className="shrink-0"
                src={Anh3.src}
                alt="Benh vien tram cuu"
              />
              <img
                className="shrink-0"
                src={Anh4.src}
                alt="Benh vien tram cuu 2"
              />
              <img className="shrink-0" src={Anh5.src} alt="TWC" />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

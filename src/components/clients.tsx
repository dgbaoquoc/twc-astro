import Anh4 from "@/assets/images/footers/cham-cuu-2.png";
import Anh3 from "@/assets/images/footers/cham-cuu.png";
import Anh2 from "@/assets/images/footers/hiphub.png";
import Anh1 from "@/assets/images/footers/tp.png";
import Anh5 from "@/assets/images/footers/twc-white.png";
import Anh6 from "@/assets/images/footers/bala.png";
import Anh7 from "@/assets/images/footers/hung-viet.png";
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-4">
              <img
                className="shrink-0 w-24 h-24 object-contain"
                src={Anh1.src}
                alt="TPBank"
              />
              <img
                className="shrink-0 w-24 h-24 object-contain"
                src={Anh2.src}
                alt="Hiphub"
              />
              <img
                className="shrink-0 w-24 h-24 object-contain"
                src={Anh3.src}
                alt="Bệnh viện châm cứu"
              />
              <img
                className="shrink-0 w-24 h-24 object-contain"
                src={Anh4.src}
                alt="Bệnh viện châm cứu 2"
              />
              <img
                className="shrink-0 w-24 h-24 object-contain"
                src={Anh5.src}
                alt="TWC"
              />
              <img
                className="shrink-0 w-24 h-24 object-contain"
                src={Anh6.src}
                alt="Kem Bala"
              />
              <img
                className="shrink-0 w-24 h-24 object-contain"
                src={Anh7.src}
                alt="Bệnh viện Hưng Việt"
              />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

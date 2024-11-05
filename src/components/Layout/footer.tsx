import { cn } from "@/lib/utils";
import { Instagram, Phone } from "lucide-react";

interface FooterProps {
  className?: string; // Optional className prop
}

export function Footer({ className }: FooterProps) {
  // Destructure className from props
  return (
    <div>
      <div className="flex items-center bg-black h-[400px] w-full">
        <div
          className={cn(className, "grid grid-cols-3 gap-8 p-8  text-white ")}
        >
          <div>
            <h1 className="font-black">About Us</h1>
            <p className="mt-4 text-justify">
              At Nkay Fabrics, we take pride in offering the finest selection of
              high-quality fabrics, handpicked to meet your fashion and design
              needs. From traditional to contemporary styles, our collection is
              curated with care to ensure you find the perfect fabric for any
              occasion. With years of experience in the fabric industry, we are
              committed to providing exceptional customer service and helping
              you bring your creative visions to life.
            </p>
          </div>
          <div>
            <h1 className="font-black">Contact Us</h1>
            <div className="flex flex-col gap-2 mt-4">
              <div className="flex items-center gap-2 text-sm">
                <Phone className="h-4" /> <p>+234 803 322 9196</p>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Instagram className="h-4" /> <p>Nkay Fabrics</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full text-center text-white bg-[#0B192C]">Powered by @Tolan</div>
    </div>
  );
}

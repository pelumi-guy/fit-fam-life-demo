import Image from "next/image";
import { images } from "@/lib/images";

/** App-style icon showing only the mascot portion of the logo (cropped with CSS, asset untouched). */
export default function MascotIcon({ className = "size-14" }: { className?: string }) {
  return (
    <span className={`relative block shrink-0 overflow-hidden rounded-[28%] bg-teal shadow-soft ring-2 ring-gold ${className}`}>
      <Image
        src={images.logo}
        alt=""
        sizes="160px"
        className="absolute top-[4%] left-1/2 w-[165%] max-w-none -translate-x-1/2"
      />
    </span>
  );
}

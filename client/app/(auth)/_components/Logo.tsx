import { Poppins } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
import Image from "next/image";
import { cn } from "@/lib/utils";

const font: NextFont = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const Logo = () => {
  return (
    <div className={cn("flex flex-col items-center gap-y-2", font.className)}>
      <div className="bg-white rounded-full p-1">
        <Image
          className={"rounded-full"}
          src={"/logo.webp"}
          alt="twitch logo"
          height={80}
          width={80}
        />
      </div>
      <div className="flex flex-col items-center gap-y-2">
        <p className="text-xl font-semibold">Mind Spark</p>
        <p className="text-sm text-muted-foreground">
          Interactive Learning for Bright Minds
        </p>
      </div>
    </div>
  );
};

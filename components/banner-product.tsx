import Link from "next/link";
import { buttonVariants } from "./ui/button";
import DcLogo from "./dc-logo";
import StarwarsLogo from "./starwars-logo";
import Marvel from "./marvel-logo";

const BannerProduct = () => {
  return (
    <div className="p-5 sm:p-16 md:p-20 bg-gradient-to-b from-purple-600/10 to-transparent text-center rounded-lg border border-purple-200 shadow-md">
      <p className="text-muted-foreground text-white">Sumergete en una experiencia unica</p>
      <div className="flex justify-center items-center gap-8 mt-6">
        <Link
          href="#"
          className="group relative flex justify-center items-center p-4 hover:scale-110 transition-transform duration-300"
        >
          <Marvel />
        </Link>
        <div className="border-l border-purple-200 h-16 mx-4" />
        <Link
          href="#"
          className="group relative flex justify-center items-center p-4 hover:scale-110 transition-transform duration-300"
        >
          <DcLogo/>
        </Link>
        <div className="border-l border-purple-200 h-16 mx-4" />
        <Link
          href="#"
          className="group relative flex justify-center items-center p-4 hover:scale-110 transition-transform duration-300"
        >
          <StarwarsLogo/>
        </Link>
      </div>
      <p className="my-2 text-lg font-bold text-muted-foreground text-white">
        Novedades en Marvel Unlimited
      </p>
      <Link href="#" className={buttonVariants()}>
        ¡Lee estos y más de 30 000 cómics digitales por $9,99 al mes!
      </Link>
    </div>
  );
};

export default BannerProduct;
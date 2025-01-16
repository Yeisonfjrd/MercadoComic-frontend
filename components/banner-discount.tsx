import Link from "next/link";
import { buttonVariants } from "./ui/button";

const BannerDiscount = () => {
  return (
    <div className="p-5 sm:p-16 md:p-20 bg-gradient-to-b from-primary/80 to-transparent text-center rounded-lg shadow-lg">
      <h2 className="uppercase font-black text-3xl sm:text-4xl text-white">
        Consigue hasta un -25%
      </h2>
      <h3 className="mt-4 font-semibold text-lg sm:text-xl text-white/90">
        -20% al gastar 50$ o -25% al gastar 100$. Usa el código de MercadoComic
      </h3>

      <div className="max-w-md mx-auto sm:flex justify-center gap-6 sm:gap-8 mt-6">
        <Link
          href="#"
          className={buttonVariants()}
        >
          Comprar
        </Link>
        <Link
          href="#"
          className={buttonVariants({ variant: "outline" })}
        >
          Más información
        </Link>
      </div>
    </div>
  );
};

export default BannerDiscount;
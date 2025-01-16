/* eslint-disable @next/next/no-img-element */
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useCart } from "@/hooks/use-cart";

import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";

import IconButton from "@/components/icon-button";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const router = useRouter();
  const { addItem } = useCart();
  

  return (
  <Link
    href={`/product/${product.slug}`}
    className="relative flex flex-col items-center justify-between p-6 transition-all duration-300 rounded-lg group border border-[hsl(var(--border))] hover:shadow-lg bg-transparent text-[hsl(var(--foreground))] dark:text-[hsl(var(--foreground))]"
  >
      <div className="absolute top-4 left-4 flex items-center gap-2 z-[1]">
        <p
          className="px-3 py-1 text-xs font-semibold bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full shadow-sm"
        >
          {product.genre}
        </p>
        <p
          className="px-3 py-1 text-xs font-semibold bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-full shadow-sm"
        >
          {product.origin}
        </p>
      </div>

      <div className="relative w-full rounded-lg overflow-hidden">
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0]?.url}`}
          alt={product.productName}
          className="w-full h-48 object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute w-full px-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bottom-4 flex justify-center gap-x-6">
        <IconButton
          onClick={() => router.push(`/product/${product.slug}`)}
          icon={<Expand size={20} className="text-[hsl(var(--primary-foreground))]" />}
          className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] transition-all rounded-full"
        />
        <IconButton
          onClick={() => addItem(product)}
          icon={<ShoppingCart size={20} className="text-[hsl(var(--secondary-foreground))]" />}
          className="bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary-hover))] transition-all rounded-full"
        />
        </div>
      </div>

      <div className="flex flex-col items-center mt-4 space-y-2 text-center">
        <p className="text-lg font-semibold text-[hsl(var(--foreground))]">
          {product.productName}
        </p>
        <p className="text-xl font-bold text-[hsl(var(--primary))]">
          {formatPrice(product.price)}
        </p>
      </div>
  </Link>
  );
};

export default ProductCard;
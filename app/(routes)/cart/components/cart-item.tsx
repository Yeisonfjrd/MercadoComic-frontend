import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductGenreOrigin from "@/components/shared/product-genre-origin";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface CartItemProps {
    product: ProductType
}

const CartItem = (props: CartItemProps) => {
    const { product } = props
    const { removeItem } = useCart()

    return (
<li className="flex py-6 border-b border-[hsl(var(--border))]">
  <ProductImageMinuature
    slug={product.slug}
    url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
  />

  <div className="flex justify-between flex-1 px-6">
    <div>
      <h2 className="text-lg font-semibold text-[hsl(var(--foreground))] dark:text-[hsl(var(--primary-foreground))]">
        {product.productName}
      </h2>
      <p className="font-bold text-[hsl(var(--primary))]">
        {formatPrice(product.price)}
      </p>

      <ProductGenreOrigin genre={product.genre} origin={product.origin} />
    </div>
    <div>
      <button
        className={cn(
          "bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary-hover))] transition-all rounded-full flex items-center justify-center border border-[hsl(var(--border))] shadow-md p-1"
        )}
        onClick={() => removeItem(product.id)}
      >
        <X size={20} className="text-white" />
      </button>
    </div>
  </div>
</li>
    );
}

export default CartItem;
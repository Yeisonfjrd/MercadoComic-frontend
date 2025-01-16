import ProductImageMinuature from "@/components/shared/product-image-miniature";
import ProductGenreOrigin from "@/components/shared/product-genre-origin";
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";

interface LovedItemProductProps {
  product: ProductType;
}

const LovedItemProduct = (props: LovedItemProductProps) => {
  const { product } = props;
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();

  const addToCheckout = () => {
    addItem(product);
  };

  const handleRemoveFromLoved = () => {
    removeLovedItem(product.id);
  };

  return (
    <li className="flex p-6 border-b">
      <ProductImageMinuature
        slug={product.slug}
        url={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
      />

      <div className="flex justify-between flex-1 px-6">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-bold">{formatPrice(product.price)}</p>

          <ProductGenreOrigin origin={product.origin} genre={product.genre} />

          <Button className="mt-5 rounded-full" onClick={addToCheckout}>
            Añadir al carrito
          </Button>
        </div>
        <div>
          <button
            className={cn(
              "bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary-hover))] transition-all rounded-full flex items-center justify-center border border-[hsl(var(--border))] shadow-md p-1"
            )}
            onClick={handleRemoveFromLoved}
          >
            <X size={20} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default LovedItemProduct;
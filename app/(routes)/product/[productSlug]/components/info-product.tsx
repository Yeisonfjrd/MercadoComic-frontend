import ProductGenreOrigin from "@/components/shared/product-genre-origin";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Heart } from "lucide-react";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { addItem } = useCart();
  const { lovedItems, toggleLoveItem } = useLovedProducts();

  const isLoved = lovedItems.some((item) => item.id === product.id);

  return (
    <div className="px-8 py-6 bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
        <h1 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 tracking-tight">
          {product.productName}
        </h1>

        <ProductGenreOrigin
          origin={product.origin}
          genre={product.genre}
        />
      </div>

      <Separator className="my-4" />

      <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-base mb-4">
        {product.description}
      </p>

      <Separator className="my-4" />

      <p className="my-4 text-2xl font-bold text-primary dark:text-primary-foreground text-center">
        {formatPrice(product.price)}
      </p>

      <div className="flex items-center gap-6 justify-center">
        <Button
          className="w-full sm:w-auto py-3 bg-primary hover:bg-primary/80 text-white dark:text-neutral-900 font-semibold rounded-md shadow-md transition duration-300 transform hover:scale-105"
          onClick={() => addItem(product)}
        >
          Comprar
        </Button>

        <div 
          className="cursor-pointer text-primary hover:text-primary/80 transition duration-300 transform hover:scale-110"
          onClick={() => toggleLoveItem(product)}
        >
          <Heart
            width={30}
            strokeWidth={1.5}
            fill={isLoved ? "currentColor" : "none"}
            className={`transition-colors duration-300 transform ${isLoved ? "text-primary" : "text-neutral-500"}`} 
          />
        </div>
      </div>
    </div>
  );
};

export default InfoProduct;
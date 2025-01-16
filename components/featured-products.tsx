/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import SkeletonSchema from "@/components/skeletonSchema";
import { Card, CardContent } from "@/components/ui/card";
import { Expand, ShoppingCart } from "lucide-react";
import IconButton from "@/components/icon-button";
import { useRouter } from "next/navigation";
import { useCart } from "@/hooks/use-cart";

const FeaturedProducts = () => {
  const { result, loading }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();

  const { addItem } = useCart()

  const navigateToProduct = (slug: string) => {
    router.push(`product/${slug}`);
  };

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 text-3xl sm:pb-8 font-bold tracking-wide text-primary dark:text-primary-foreground">
        Productos destacados
      </h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result === null || result.length === 0 ? (
            <p className="text-center text-muted-foreground">
              No hay productos disponibles.
            </p>
          ) : (
            result.map((product: { 
              id: number;
              productName: string;
              slug: string;
              description: string;
              active: boolean;
              isFeatured: boolean;
              genre: string;
              origin: string;
              price: number;
              images: {
                url: string;
                id: number;
              }[];
              category: {
                slug: string;
                categoryName: string;
              };
            }) => {
              const { id, productName, slug, genre, origin, images } = product;

              return (
                <CarouselItem
                  key={id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-4 transition-transform transform group-hover:scale-105">
                    <Card className="py-4 border border-[hsl(var(--border))] shadow-md bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] p-2 group-hover:shadow-[0_4px_12px_hsl(var(--ring)/0.5)] rounded-[var(--radius)] transition-all duration-300">
                      <CardContent className="relative flex flex-col items-center justify-center px-6 py-4">
                        {images?.length > 0 ? (
                          <img
                            src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${images[0].url}`}
                            alt={`Imagen destacada del producto ${slug}`}
                            className="rounded-lg shadow-md w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                          />
                        ) : (
                          <p className="text-[hsl(var(--muted-foreground))]">
                            No image available
                          </p>
                        )}
                        <div className="absolute w-full px-6 transition-opacity duration-300 opacity-0 group-hover:opacity-100 bottom-5">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onClick={() => navigateToProduct(slug)}
                              icon={<Expand size={20} />}
                              className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary-hover))] transition-all rounded-full"
                            />
                            <IconButton 
                              onClick={() => addItem(product)}
                              icon={<ShoppingCart size={20} />}
                              className="bg-[hsl(var(--secondary))] hover:bg-[hsl(var(--secondary-hover))] transition-all rounded-full"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="mt-4">
                        <h3 className="text-lg font-bold text-[hsl(var(--foreground))]">
                          {productName}
                        </h3>
                        <div className="flex items-center justify-between mt-2">
                          <span className="px-3 py-1 text-xs font-medium bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] rounded-full shadow-md">
                            {genre}
                          </span>
                          <span className="px-3 py-1 text-xs font-medium bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] rounded-full shadow-md">
                            {origin}
                          </span>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })
          )}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
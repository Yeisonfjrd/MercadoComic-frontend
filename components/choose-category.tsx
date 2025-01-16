"use client";
import { useGetCategories } from "@/api/getProducts";
import Link from "next/link";
import { ResponseType } from "@/types/response";

const ChooseCategory = () => {
  const { result }: ResponseType = useGetCategories();

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-6 pb-4 text-3xl sm:pb-8 text-primary-foreground">
        Elige tu categoría favorita
      </h3>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {result === null || result.length === 0 ? (
          <p className="text-center text-muted-foreground">
            No hay productos disponibles.
          </p>
        ) : (
          result.map((category: {
            id: number;
            categoryName: string;
            slug: string;
            mainImage: { url: string }[];
          }) => {
            const { id, categoryName, slug, mainImage } = category;

            const imageUrl = mainImage && mainImage.length > 0
              ? mainImage[0]?.url || "/default-image.jpg"
              : "/default-image.jpg";

            return (
              <Link
                key={id}
                href={`/category/${slug}`}
                className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-lg border border-muted"
              >
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${imageUrl}`} 
                  alt={categoryName}
                  className="max-w-full h-[350px] object-cover transition duration-300 ease-in-out rounded-lg hover:scale-105"
                />
                <p className="absolute w-full py-2 text-lg font-bold text-center text-primary-foreground bottom-5 backdrop-blur-lg">
                  {categoryName}
                </p>
              </Link>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChooseCategory;
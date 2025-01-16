"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { Separator } from "@/components/ui/separator";
import { ResponseType } from "@/types/response";
import { useParams, useRouter } from "next/navigation";
import FiltersControlsCategory from "@/app/(routes)/category/components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import ProductCard from "@/app/(routes)/category/components/product-card";
import { ProductType } from "@/types/product";
import { useState } from "react";

export default function Page() {
  const params = useParams();
  const { categorySlug } = params;

  if (!categorySlug) {
    return <p>Category not found or invalid URL</p>;
  }

  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState("");
  const router = useRouter();

  const filteredProducts =
    result !== null &&
    !loading &&
    (filterOrigin === ""
      ? result
      : result.filter(
          (product: ProductType) => product.origin === filterOrigin
        ));

  return (
    <div className="max-w-6xl py-4 mx-auto sm:py-16 sm:px-24">
      {result !== null && !loading && result.length !== 0 && (
        <h1 className="text-3xl font-medium">
          {result[0].category.categoryName}
        </h1>
      )}
      <Separator />

      <div className="sm:flex sm:justify-between">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />

        <div className="grid gap-5 mt-8 sm:grid-cols-2 md:grid-cols-3 md:gap-10">
          {loading && <SkeletonSchema grid={3} />}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {filteredProducts !== null &&
            !loading &&
            filteredProducts.length === 0 && (
              <p>No hay productos con este filtro.</p>
            )}
        </div>
      </div>
    </div>
  );
}
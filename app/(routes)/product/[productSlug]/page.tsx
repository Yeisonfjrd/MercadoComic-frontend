"use client"

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import SkeletonProduct from "@/app/(routes)/product/[productSlug]/components/skeleton-product";
import CarouselProduct from "@/app/(routes)/product/[productSlug]/components/carousel-product";
import InfoProduct from "@/app/(routes)/product/[productSlug]/components/info-product";

export default function Page() {
    const params = useParams();
    const { productSlug } = params;

    if (typeof productSlug !== "string") {
        return <p>Invalid product slug</p>;
    }

    const { result }: ResponseType = useGetProductBySlug(productSlug);

    if (result === null) {
        return <SkeletonProduct />;
    }

    return (
        <div className="max-w-6xl py-4 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh]">
            <div className="grid sm:grid-cols-2">
                <div>
                    <CarouselProduct images={result[0].images} />
                </div>

                <div className="sm:px-12">
                    <InfoProduct product={result[0]} />
                </div>
            </div>
        </div>
    );
}
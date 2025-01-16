"use client"
import { Separator } from "@/components/ui/separator";
import { useLovedProducts } from "@/hooks/use-loved-products"
import LovedItemProduct from "@/app/(routes)/loved-products/components/loved-item-product"

export default function Page() {
    const { lovedItems } = useLovedProducts()

    return (
<div className="max-w-4xl py-6 mx-auto sm:py-32 sm:px-24 lg:min-h-[80vh] bg-white dark:bg-neutral-900 rounded-lg shadow-lg">
    <h1 className="text-3xl font-semibold text-neutral-800 dark:text-neutral-100 sm:text-2xl">
        Productos que te gustan
    </h1>
    <Separator className="my-4" />

    <div className="flex flex-col gap-6">
        {lovedItems.length === 0 ? (
            <p className="text-neutral-600 dark:text-neutral-400 text-lg">
                No hay productos en la sección de Me gusta
            </p>
        ) : (
            <ul>
                {lovedItems.map((item) => (
                    <LovedItemProduct key={item.id} product={item} />
                ))}
            </ul>
        )}
    </div>
</div>
    )
}
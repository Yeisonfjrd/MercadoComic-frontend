"use client"
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from 'embla-carousel-autoplay'

export const dataCarouselTop = [
    {
        id: 1,
        title: "Envío en 24/48 h",
        description: "Como cliente VIP, tus envíos en 24/48 horas. Obtén más información y únete",
        link: "#!"
    },
    {
        id: 2,
        title: "Consigue hasta un -25% en compras superiores a 40€",
        description: "−20 % al gastar 100 € o −25 % al gastar 150 €. Usa el código TARREDEV.",
        link: "#",
    },
    {
        id: 3,
        title: "Devoluciones y entregas gratuitas",
        description: "Como cliente, tienes envíos y devoluciones gratis en un plazo de 30 días en todos los pedidos. Obtén más información y únete",
        link: "#",
    },
    {
        id: 4,
        title: "Comprar novedades",
        description: "Todas las novedades al 50% de descuento",
        link: "#",
    },
]

const CarouselTextBanner = () => {
    const router = useRouter()

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel className="w-full h-full max-w-none mx-auto overflow-hidden" plugins={[Autoplay({ delay: 2500 })]}>
                <CarouselContent className="flex w-full">
                    {dataCarouselTop.map(({ id, title, link, description }) => (
                    <CarouselItem
                        key={id}
                        onClick={() => router.push(link)}
                        className="cursor-pointer w-full h-full flex-shrink-0 group transition-all duration-300"
                    >
                        <div className="flex justify-center items-center w-full h-full">
                        <Card
                            className="w-full h-full shadow-md border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--card-foreground))] rounded-[var(--radius)] group-hover:shadow-[0_4px_12px_hsl(var(--ring)/0.5)] group-hover:scale-105 transition-all duration-300"
                        >
                            <CardContent className="flex flex-col justify-center p-4 items-center text-center w-full h-full space-y-2">
                            <p className="text-sm sm:text-lg font-medium text-[hsl(var(--foreground))]">
                                {title}
                            </p>
                            <p className="text-xs sm:text-sm text-[hsl(var(--muted-foreground))]">
                                {description}
                            </p>
                            </CardContent>
                        </Card>
                        </div>
                    </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
    );
}

export default CarouselTextBanner;

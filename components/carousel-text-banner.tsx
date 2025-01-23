"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from 'embla-carousel-autoplay';
import { Button } from "@/components/ui/button";

export const dataCarouselTop = [
    {
        id: 1,
        title: "¡Envío en 24/48 h!",
        description: "Como cliente VIP, tus envíos en 24/48 horas. ¡Únete ahora!",
        link: "#!",
        icon: "🦸‍♂️",
    },
    {
        id: 2,
        title: "¡Hasta -25% de descuento!",
        description: "−20 % al gastar 100 € o −25 % al gastar 150 €. Usa el código COMICLOVER.",
        link: "#",
        icon: "💥",
    },
    {
        id: 3,
        title: "Devoluciones y entregas gratuitas",
        description: "Envíos y devoluciones gratis en 30 días. ¡Hazte cliente ahora!",
        link: "#",
        icon: "🚀",
    },
    {
        id: 4,
        title: "¡Novedades al 50%!",
        description: "Todos los nuevos lanzamientos con un 50% de descuento. ¡No te lo pierdas!",
        link: "#",
        icon: "🛒",
    },
];

const CarouselTextBanner = () => {
    const router = useRouter();

    return (
        <div className="bg-gray-200 dark:bg-primary">
            <Carousel
                className="w-full h-full max-w-none mx-auto overflow-hidden"
                plugins={[Autoplay({ delay: 2500 })]}
            >
                <CarouselContent className="flex w-full">
                    {dataCarouselTop.map(({ id, title, link, description, icon }) => (
                        <CarouselItem
                            key={id}
                            onClick={() => router.push(link)}
                            className="cursor-pointer w-full h-full flex-shrink-0 group transition-all duration-300"
                        >
                            <div className="flex justify-center items-center w-full h-full comic-pattern bg-cover bg-center">
                                <Card
                                    className="w-full h-full shadow-md border-4 border-black bg-white bg-opacity-90 text-black rounded-lg group-hover:shadow-[0_4px_12px_rgba(0,0,0,0.5)] group-hover:scale-105 transition-all duration-300"
                                >
                                    <CardContent className="flex flex-col justify-center p-4 items-center text-center w-full h-full space-y-2">
                                        <span className="text-4xl mb-2 animate-bounce">{icon}</span> {/* Ícono temático con animación */}
                                        <p className="text-lg sm:text-2xl font-bold comic-font">
                                            {title}
                                        </p>
                                        <p className="text-sm sm:text-base">
                                            {description}
                                        </p>
                                        <div className="absolute top-4 left-4 text-6xl font-bold text-red-600 opacity-50 animate-pulse">
                                            BOOM!
                                        </div>
                                        <div className="absolute bottom-4 right-4 text-6xl font-bold text-yellow-500 opacity-50 animate-pulse">
                                            POW!
                                        </div>
                                        <Button
                                            className="mt-4 bg-primary text-primary-foreground hover:bg-primary-hover"
                                            onClick={() => router.push(link)}
                                        >
                                            Ver más
                                        </Button>
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious className="hidden sm:flex bg-black text-white hover:bg-gray-800" />
                <CarouselNext className="hidden sm:flex bg-black text-white hover:bg-gray-800" />
            </Carousel>
        </div>
    );
};

export default CarouselTextBanner;

const styles = `
  .comic-pattern {
    background-image: radial-gradient(circle, black 10%, transparent 10%),
                      radial-gradient(circle, black 10%, transparent 10%);
    background-size: 20px 20px;
    background-position: 0 0, 10px 10px;
  }
  .comic-font {
    font-family: 'Bangers', cursive;
    text-shadow: 2px 2px 0 yellow, 4px 4px 0 red;
  }
`;

if (typeof document !== 'undefined') {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);
}
import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const dataFooter = [
    {
        id: 1,
        name: "Sobre nosotros",
        link: "#",
    },
    {
        id: 2,
        name: "Productos",
        link: "#",
    },
    {
        id: 3,
        name: "Mi cuenta",
        link: "#",
    },
    {
        id: 4,
        name: "Política de privacidad",
        link: "#",
    },
];

const Footer = () => {
    return (
        <footer className="mt-4 bg-background">
            <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <p className="text-primary-foreground text-lg">
                        <span className="font-bold text-primary">
                            MercadoComic
                        </span>{" "}
                        E-commerce
                    </p>

                    <ul className="flex flex-wrap items-center gap-4 text-sm font-medium text-secondary-foreground sm:gap-6">
                        {dataFooter.map((data) => (
                            <li key={data.id}>
                                <Link
                                    href={data.link}
                                    className="hover:underline transition-colors"
                                >
                                    {data.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <Separator className="my-6 border-border sm:mx-auto lg:my-8" />
                
                <span className="block text-sm text-muted-foreground text-center">
                    &copy; 2024{" "}
                    <Link href="#" className="text-primary hover:underline">
                        MercadoComic.
                    </Link>{" "}
                    Todos los derechos reservados.
                </span>
            </div>
        </footer>
    );
};

export default Footer;
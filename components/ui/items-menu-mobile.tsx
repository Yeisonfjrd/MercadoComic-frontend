import { Menu } from "lucide-react";
import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover";
import Link from "next/link";

const ItemsMenuMobile = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <button
                    aria-label="Open Menu"
                    className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 dark:focus:ring-offset-background"
                >
                    <Menu className="h-6 w-6 text-foreground" />
                </button>
            </PopoverTrigger>
            <PopoverContent className="w-48 p-2 bg-popover text-popover-foreground">
                <nav className="flex flex-col space-y-2">
                    <Link href="/categories/comics" className="hover:underline">
                        Comics
                    </Link>
                    <Link href="/categories/libros" className="hover:underline">
                        Libros
                    </Link>
                    <Link href="/categories/mangas" className="hover:underline">
                        Mangas
                    </Link>
                </nav>
            </PopoverContent>
        </Popover>
    );
};

export default ItemsMenuMobile;
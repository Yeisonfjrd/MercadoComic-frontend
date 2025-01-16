"use client"
import { BaggageClaim, Heart, ShoppingCart, User } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "@/components/ui/items-menu-mobile";
import ToggleTheme from "./toggle-theme"
import { useCart } from "@/hooks/use-cart";

const Navbar = () => {
    const router = useRouter()
    const cart = useCart()

    return (
        <div className="flex items-center justify-between p-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-6xl">
            <h1 className="text-2xl sm:text-3xl font-medium text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200" onClick={() => router.push("/")}>
                Mercado<span className="font-bold">Comic</span>
            </h1>

            <div className="hidden sm:flex items-center justify-between">
                <MenuList />
            </div>

            <div className="flex sm:hidden">
                <ItemsMenuMobile />
            </div>

            <div className="flex items-center justify-between gap-4 sm:gap-7">
              {cart.items.length === 0 ? (
                <ShoppingCart
                    strokeWidth={1}
                    className="cursor-pointer text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
                    onClick={() => router.push("/cart")}
                />
                ) : (
                <div className="flex gap-1 cursor-pointer" onClick={() => router.push("/cart")}>
                    <BaggageClaim strokeWidth={1} />
                    <span>{cart.items.length}</span>
                </div>
                )}
                <Heart
                strokeWidth={1}
                className="cursor-pointer text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
                onClick={() => router.push("/loved-products")}
                />
                <User
                strokeWidth={1}
                className="cursor-pointer text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors duration-200"
                />
                <ToggleTheme />
            </div>
        </div>
    );
  };
  
  export default Navbar;
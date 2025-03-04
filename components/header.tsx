"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const { hasBottleDesign, hasIngredients } = useStore();
  const { theme, setTheme } = useTheme();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            ScentCraft
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/"
            className={`text-sm font-medium ${
              pathname === "/" ? "text-primary" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/design"
            className={`text-sm font-medium ${
              pathname === "/design" ? "text-primary" : ""
            } ${!hasIngredients() ? "pointer-events-none opacity-50" : ""}`}
          >
            Design
          </Link>
          <Link
            href="/summary"
            className={`text-sm font-medium ${
              pathname === "/summary" ? "text-primary" : ""
            } ${!hasBottleDesign() ? "pointer-events-none opacity-50" : ""}`}
          >
            Summary
          </Link>
        </nav>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </div>
    </header>
  );
}

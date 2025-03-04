"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useStore } from "@/store/useStore";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname()
  const { hasBottleDesign, hasIngredients } = useStore();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
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
        <Button variant="outline">ThemeSwitcher</Button>
      </div>
    </header>
  );
}

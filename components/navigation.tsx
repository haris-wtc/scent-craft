"use client"

import type React from "react"

import Link from "next/link"
import { useUserStore } from "@/store/useStore"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export default function Navigation({ currentPath }: { currentPath: string }) {
  const { hasFilledInput } = useUserStore()
  const { toast } = useToast()

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    if (path !== "/" && !hasFilledInput) {
      e.preventDefault()
      toast({
        title: "Please enter your name first",
        description: "You need to enter your name on the home page before proceeding.",
        variant: "destructive",
      })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="text-xl font-bold">
            ScentCraft
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className={`text-sm font-medium ${currentPath === "/" ? "text-primary" : ""}`}>
            Home
          </Link>
          <Link
            href="/design"
            className={`text-sm font-medium ${currentPath === "/design" ? "text-primary" : ""}`}
            onClick={(e) => handleNavigation(e, "/design")}
          >
            Design
          </Link>
          <Link
            href="/summary"
            className={`text-sm font-medium ${currentPath === "/summary" ? "text-primary" : ""}`}
            onClick={(e) => handleNavigation(e, "/summary")}
          >
            Summary
          </Link>
          {currentPath === "/summary" && (
            <Link href="/profile" className="text-sm font-medium" onClick={(e) => handleNavigation(e, "/profile")}>
              Profile
            </Link>
          )}
        </nav>
        <div>
          <Button asChild variant="outline" className="mr-2">
            <Link href="/login">Login</Link>
          </Button>
        </div>
      </div>
    </header>
  )
}


import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 md:px-6 py-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              ScentCraft
            </Link>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-gray-500 hover:text-primary">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium">Company</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  About us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Features
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium">Support</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Contact us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <div className="text-sm font-medium">Legal</div>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Privacy & Terms
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Sitemap
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-500 hover:text-primary">
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center text-sm text-gray-500">
          © 2024 ScentCraft, Inc.
        </div>
      </div>
    </footer>
  );
}

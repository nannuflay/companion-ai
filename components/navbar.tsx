"use client";

import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import MobileSidebar from "./mobile-sidebar";

const font = Poppins({
  weight: "600",
  subsets: ["latin"],
});

export const Navbar = () => {
  return (
    <div className="h-16 fixed w-full z-50 flex justify-between items-center py-2 px-4 border-b border-primary/10 bg-secondary ">
      <div className=" flex items-center">
        <MobileSidebar />
        <Link href="/">
          <h1
            className={cn(
              "hidden md:block text-xl md:text-3xl font-bold text-primary",
              font.className
            )}
          >
            companion.ai
          </h1>
        </Link>
      </div>
      <div className="flex items-center gap-x-3">
        <Button size={"sm"} variant="premium">
          Upgrade
          <Sparkles className=" h-4 w-4 fill-white text-white ml-2" />
        </Button>
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

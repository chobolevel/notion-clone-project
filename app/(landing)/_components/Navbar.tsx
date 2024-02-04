"use client"

import { useScrollTrack } from "@/hooks/use-scroll-track"
import { cn } from "@/lib/utils"
import Logo from "./Logo"
import { ModeToggle } from "@/components/mode-toggle"

const Navbar = () => {
  const scrolled = useScrollTrack()
  return (
    <div className={cn(
      "fixed z-50 top-0 flex items-center w-full p-6 bg-background dark:bg-[#1f1f1f]",
      scrolled && "border-b shadow-sm")}>
      <Logo />
      <div className="w-full flex items-center justify-between gap-x-2 md:ml-auto md:justify-end">
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
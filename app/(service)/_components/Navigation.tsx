"use client"

import { cn } from "@/lib/utils"
import { ChevronsLeft, MenuIcon } from "lucide-react"
import { usePathname } from "next/navigation"
import { ElementRef, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"

const Navigation = () => {
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isResizeingRef = useRef(false)
  const sidebarRef = useRef<ElementRef<"aside">>(null)
  const navbarRef = useRef<ElementRef<"div">>(null)
  const [isResetting, setIsResetting] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(isMobile)
  return (
    <>
      <aside ref={sidebarRef} className={cn("group h-full bg-secondary overflow-y-auto relative w-60 flex flex-col z-[99999]", isResetting && "transition-all ease-in-out duration-300", isMobile && "w-0")}>
        <div role="button" className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover:opacity-100", isMobile && "opacity-100")}>
          <ChevronsLeft className="w-6 h-6" />
        </div>
        <div>
          <p>Action</p>
        </div>
        <div className="mt-4">
          <p>Documents</p>
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />
      </aside>
      <div ref={navbarRef} className={cn("absolute top-0 left-60 z-[99999] w-[calc(100% - 240px)]", isResetting && "transition-all ease-in-out", isMobile && "left-0 w-full")}>
        <nav className="bg-transparent px-4 py-2 w-full">
          {isCollapsed && <MenuIcon role="button" className="h-6 w-6 text-muted-foreground" />}
        </nav>
      </div>
    </>
  )
}

export default Navigation
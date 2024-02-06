"use client"

import { cn } from "@/lib/utils"
import { ChevronsLeft, MenuIcon, PlusCircle, Search, Settings } from "lucide-react"
import { usePathname } from "next/navigation"
import { ElementRef, useEffect, useRef, useState } from "react"
import { useMediaQuery } from "usehooks-ts"
import UserItem from "./UserItem"
import { api } from "@/convex/_generated/api";
import { useMutation } from "convex/react";
import Item from "./Item"
import { toast } from "sonner"

const Navigation = () => {
  const pathname = usePathname()
  const isMobile = useMediaQuery("(max-width: 768px)")
  const create = useMutation(api.documents.create)
  const isResizeingRef = useRef(false)
  const sidebarRef = useRef<ElementRef<"aside">>(null)
  const navbarRef = useRef<ElementRef<"div">>(null)
  const [isResetting, setIsResetting] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(isMobile)
  useEffect(() => {
    if (isMobile) {
      collapse()
    } else {
      resetWidth()
    }
  }, [isMobile])
  useEffect(() => {
    if (isMobile) {
      collapse()
    }
  }, [pathname, isMobile])
  const handleCreate = () => {
    const promise = create({ title: "test" })
    toast.promise(promise, {
      loading: "Creating a new document...",
      success: "New Document Created!",
      error: "Failed to create a new document..."
    })
  }
  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.preventDefault()
    e.stopPropagation()
    isResizeingRef.current = true
    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseup", handleMouseUp)
  }
  const handleMouseMove = (e: MouseEvent) => {
    if (!isResizeingRef.current) return
    let newWidth = e.clientX
    if (newWidth < 240) newWidth = 240
    if (newWidth > 480) newWidth = 480
    if (sidebarRef.current && navbarRef.current) {
      sidebarRef.current.style.width = `${newWidth}px`
      navbarRef.current.style.setProperty("left", `${newWidth}px`)
      navbarRef.current.style.setProperty("width", `calc(100% - ${newWidth}px)`)
    }
  }
  const handleMouseUp = () => {
    isResizeingRef.current = false
    document.removeEventListener("mousemove", handleMouseMove)
    document.removeEventListener("mouseup", handleMouseUp)
  }
  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false)
      setIsResetting(false)
      sidebarRef.current.style.width = isMobile ? "100%" : "240px"
      navbarRef.current.style.setProperty("width", isMobile ? "0" : "calc(100% - 240px")
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px")
      setTimeout(() => setIsResetting(false), 300)
    }
  }
  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true)
      setIsResetting(true)
      sidebarRef.current.style.width = "0"
      navbarRef.current.style.setProperty("width", "100%")
      navbarRef.current.style.setProperty("left", "0")
      setTimeout(() => setIsResetting(false), 300)
    }
  }
  return (
    <>
      <aside ref={sidebarRef} className={cn("group h-full bg-secondary overflow-y-auto relative w-60 flex flex-col z-[9999] transition-all ease-in-out duration-300", isMobile && "w-0")}>
        <div onClick={collapse} role="button" className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover:opacity-100", isMobile && "opacity-100")}>
          <ChevronsLeft className="w-6 h-6" />
        </div>
        <div>
          <UserItem />
          <Item
            onClick={() => { }}
            label="Search"
            icon={Search}
            isSearch
          />
          <Item
            onClick={() => { }}
            label="Settings"
            icon={Settings}
          />
          <Item
            onClick={handleCreate}
            label="New Document"
            icon={PlusCircle}
          />
        </div>
        <div className="mt-4">
          documents
        </div>
        <div onMouseDown={handleMouseDown} onClick={resetWidth} className="opacity-0 group-hover:opacity-100 transition cursor-ew-resize absolute h-full w-1 bg-primary/10 right-0 top-0" />
      </aside>
      <div ref={navbarRef} className={cn("absolute top-0 left-60 z-[9999] w-[calc(100% - 240px)] transition-all ease-in-out", isMobile && "left-0 w-full")}>
        <nav className="bg-transparent px-4 py-2 w-full">
          {isCollapsed && <MenuIcon onClick={resetWidth} role="button" className="h-6 w-6 text-muted-foreground transition-all duration-300" />}
        </nav>
      </div>
    </>
  )
}

export default Navigation
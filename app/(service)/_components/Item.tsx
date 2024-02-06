"use client"

import { Skeleton } from "@/components/ui/skeleton"
import { Id } from "@/convex/_generated/dataModel"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight, LucideIcon } from "lucide-react"

interface ItemProps {
  label: string
  onClick: () => void
  icon: LucideIcon
  id?: Id<"documents">
  documentIcon?: string
  active?: boolean
  expanded?: boolean
  isSearch?: boolean
  level?: number
  onExpand?: () => void
}

const Item = ({ label, onClick, icon: Icon, id, documentIcon, active, expanded, isSearch, level = 0, onExpand }: ItemProps) => {
  const ChevronIcon = expanded ? ChevronDown : ChevronRight
  return (
    <div
      onClick={onClick}
      role="button"
      style={{ paddingLeft: level ? `${level * 12 + 12}px` : "12px" }}
      className={cn("group min-h-[27px] text-sm py-1 pr-3 w-full hover:bg-primary/5 flex items-center text-muted-foreground font-medium", active && "bg-primary/5 text-primary")}
    >
      {!!id && (
        <div
          role="button"
          className="h-full mr-1 rounded-sm hover:bg-neutral-300 dark:bg-neutral-600"
          onClick={() => { }}>
          <ChevronIcon className="w-4 h-4 shrink-0 text-muted-foreground" />
        </div>
      )}
      {documentIcon ? (
        <div className="shrink-0 mr-2 text-[18px]">
          {documentIcon}
        </div>
      ) : (
        <Icon className="shrink-0 h-[18px] mr-2 text-muted-foreground" />
      )}
      <span className="truncate">{label}</span>
      {isSearch && (
        <kbd
          className="ml-auto pointer-events-none inline-flex
        h-5 select-none items-center gap-1 rounded border bg-muted
        px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100"
        >
          <span className="text-xs">Ctrl</span>K
        </kbd>
      )}
    </div>
  )
}

Item.Skeleton = function ItemSkeleton({ level }: { level?: number }) {
  return (
    <div
      style={{ paddingLeft: level ? `${(level * 12) + 25}px` : "12px" }}>
      <Skeleton className="w-4 h-4" />
      <Skeleton className="h-4 w-[30%]" />
    </div>
  )
}

export default Item
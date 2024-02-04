import { Button } from "@/components/ui/button"
import Logo from "./Logo"

const Footer = () => {
  return (
    <div className="w-full flex items-center p-6 bg-background z-50 dark:bg-[#1f1f1f]">
      <Logo />
      <div className="flex w-full justify-between items-center gap-x-2 text-muted-foreground md:justify-end md:ml-auto">
        <Button variant="ghost" size="sm">Privacy Policy</Button>
        <Button variant="ghost" size="sm">Terms & Conditions</Button>
      </div>
    </div>
  )
}

export default Footer
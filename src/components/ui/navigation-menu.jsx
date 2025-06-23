import * as React from "react"
import { cn } from "../../lib/utils"

const NavigationMenu = React.forwardRef(({ className, children, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn(
      "relative z-10 flex max-w-max flex-1 items-center justify-center",
      className
    )}
    {...props}
  >
    {children}
  </nav>
))
NavigationMenu.displayName = "NavigationMenu"

const NavigationMenuList = React.forwardRef(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn(
      "group flex flex-1 list-none items-center justify-center space-x-1",
      className
    )}
    {...props}
  />
))
NavigationMenuList.displayName = "NavigationMenuList"

const NavigationMenuItem = React.forwardRef(({ className, ...props }, ref) => (
  <li ref={ref} className={cn("", className)} {...props} />
))
NavigationMenuItem.displayName = "NavigationMenuItem"

const NavigationMenuLink = React.forwardRef(({ className, children, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      "group inline-flex h-10 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-blue-500/10 hover:text-blue-400 focus:bg-blue-500/10 focus:text-blue-400 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-blue-500/20 data-[active]:text-blue-400 data-[state=open]:bg-blue-500/20",
      className
    )}
    {...props}
  >
    {children}
  </a>
))
NavigationMenuLink.displayName = "NavigationMenuLink"

export {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
}
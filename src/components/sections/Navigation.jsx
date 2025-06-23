import React from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from '../ui/navigation-menu'
import { cn } from '../../lib/utils'

const Navigation = ({ 
  darkMode, 
  setDarkMode, 
  scrolled, 
  activeSection, 
  navItems, 
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen 
}) => {
  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "backdrop-blur-md border-b bg-background/80 border-border" : "bg-transparent"
    )}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map(item => (
                  <NavigationMenuItem key={item.id}>
                    <NavigationMenuLink
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "cursor-pointer",
                        activeSection === item.id && "text-blue-400"
                      )}
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="mr-2"
            >
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={cn(
                  "block w-full text-left px-3 py-2 rounded-md transition-colors",
                  activeSection === item.id
                    ? "text-blue-400 bg-blue-400/10"
                    : "text-muted-foreground hover:text-blue-400 hover:bg-blue-400/10"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
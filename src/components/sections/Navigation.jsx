import React from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { Button } from '../ui/button'
import { cn } from '../../lib/utils'

const Navigation = ({ 
  darkMode, 
  setDarkMode, 
  scrolled,
  navVisible,
  activeSection, 
  navItems, 
  scrollToSection,
  mobileMenuOpen,
  setMobileMenuOpen 
}) => {
  return (
    <nav className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b" : "",
      navVisible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
    )}>
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14">
          <button
            onClick={() => scrollToSection('home')}
            className="font-semibold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"
          >
            jinhyeon-dev
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <nav className="flex items-center gap-6 text-sm">
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "transition-colors hover:text-foreground/80",
                    activeSection === item.id ? "text-foreground" : "text-foreground/60"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="relative overflow-hidden"
            >
              <div className="relative w-4 h-4">
                <Sun className={cn(
                  "h-4 w-4 absolute inset-0 transition-all duration-500 ease-in-out",
                  darkMode 
                    ? "opacity-100 rotate-0 scale-100" 
                    : "opacity-0 rotate-180 scale-75"
                )} />
                <Moon className={cn(
                  "h-4 w-4 absolute inset-0 transition-all duration-500 ease-in-out",
                  !darkMode 
                    ? "opacity-100 rotate-0 scale-100" 
                    : "opacity-0 -rotate-180 scale-75"
                )} />
              </div>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className="relative overflow-hidden"
            >
              <div className="relative w-4 h-4">
                <Sun className={cn(
                  "h-4 w-4 absolute inset-0 transition-all duration-500 ease-in-out",
                  darkMode 
                    ? "opacity-100 rotate-0 scale-100" 
                    : "opacity-0 rotate-180 scale-75"
                )} />
                <Moon className={cn(
                  "h-4 w-4 absolute inset-0 transition-all duration-500 ease-in-out",
                  !darkMode 
                    ? "opacity-100 rotate-0 scale-100" 
                    : "opacity-0 -rotate-180 scale-75"
                )} />
              </div>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative overflow-hidden"
            >
              <div className="relative w-5 h-5">
                <Menu 
                  className={cn(
                    "h-5 w-5 absolute inset-0 transition-all duration-300",
                    mobileMenuOpen ? "opacity-0 rotate-180" : "opacity-100 rotate-0"
                  )} 
                />
                <X 
                  className={cn(
                    "h-5 w-5 absolute inset-0 transition-all duration-300",
                    mobileMenuOpen ? "opacity-100 rotate-0" : "opacity-0 -rotate-180"
                  )} 
                />
              </div>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn(
        "md:hidden border-t overflow-hidden transition-all duration-300",
        mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 border-transparent"
      )}>
        <div className="container max-w-6xl mx-auto px-4 py-4 space-y-2">
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => {
                  scrollToSection(item.id)
                  setMobileMenuOpen(false)
                }}
                className={cn(
                  "block w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                  activeSection === item.id
                    ? "bg-accent text-accent-foreground"
                    : "hover:bg-accent/50"
                )}
              >
                {item.label}
              </button>
            ))}
          </div>
      </div>
    </nav>
  )
}

export default Navigation
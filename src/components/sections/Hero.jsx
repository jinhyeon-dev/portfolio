import React from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'

const Hero = ({ scrollToSection }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          안녕하세요, 저는
          <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            김진현 입니다
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-delay">
          앱 개발자 | 아직은 고등학생 | 문제 해결사
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-delay-2">
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a href="https://github.com/jinhyeon-dev" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button asChild variant="outline" size="icon" className="rounded-full">
            <a href="mailto:hello@example.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce"
          aria-label="Scroll to about section"
        >
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </button>
      </div>
    </section>
  )
}

export default Hero
import React from 'react'
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react'
import { Button } from '../ui/button'
import { useToast } from '../ui/toast'
import { useTypewriter } from '../../hooks/useTypewriter'

const Hero = ({ scrollToSection }) => {
  const { addToast } = useToast();
  
  // 타이핑 애니메이션을 위한 훅들
  const { displayText: greeting, isComplete: greetingComplete } = useTypewriter('안녕하세요, 저는', 80, 500);
  const { displayText: name, isComplete: nameComplete } = useTypewriter('김진현', 120, greetingComplete ? 300 : 99999);
  const { displayText: ending } = useTypewriter('입니다.', 100, nameComplete ? 200 : 99999);

  const copyEmailToClipboard = async () => {
    const email = 'jinhyeon.dev@gmail.com';
    try {
      await navigator.clipboard.writeText(email);
      addToast('이메일 주소가 복사되었습니다!', 'success');
    } catch (err) {
      // 폴백: 텍스트 선택 및 복사
      const textArea = document.createElement('textarea');
      textArea.value = email;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      addToast('이메일 주소가 복사되었습니다!', 'success');
    }
  };
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-transparent to-cyan-600/20"></div>
      <div className="relative z-10 text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-5 min-h-[50px] md:min-h-[50px] flex items-center justify-center">
          <span className="relative">
            {greeting}
            {greetingComplete && (
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent ml-2">
                {name}
                {nameComplete && (
                  <span className="text-foreground ml-1">{ending}</span>
                )}
              </span>
            )}
            {/* 커서 효과 */}
            <span className="inline-block w-1 h-[0.8em] bg-primary ml-1 animate-pulse" 
                  style={{ 
                    opacity: ending ? 0 : 1,
                    transition: 'opacity 0.5s ease-in-out'
                  }} 
            />
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
          <Button 
            variant="outline" 
            size="icon" 
            className="rounded-full" 
            onClick={copyEmailToClipboard}
            aria-label="Copy Email"
          >
            <Mail className="h-5 w-5" />
          </Button>
        </div>
      </div>
      <button
        onClick={() => scrollToSection('about')}
        className="absolute bottom-20 animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="h-8 w-8 text-muted-foreground" />
      </button>
    </section>
  )
}

export default Hero
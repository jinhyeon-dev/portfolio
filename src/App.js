import React, { useState, useEffect } from 'react';
import Navigation from './components/sections/Navigation';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { useTheme } from './hooks/useTheme';
import { ToastProvider } from './components/ui/toast';

const Portfolio = () => {
  const { toggleTheme, isDark } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [navVisible, setNavVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // 네비게이션 바 스크롤 감지
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);
      
      // 네비게이션 바 가시성 제어 (200px 이상 스크롤 시 표시)
      setNavVisible(scrollPosition > 200);
      
      // 현재 스크롤 위치에서 화면 중앙 지점 계산
      const centerScrollPosition = window.scrollY + window.innerHeight / 2;
      
      // 섹션 배열
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      let currentActiveSection = 'home';
      
      // 각 섹션의 위치를 확인하여 현재 활성 섹션 결정
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const sectionTop = window.scrollY + rect.top;
          const sectionBottom = sectionTop + rect.height;
          
          // 현재 스크롤 위치가 섹션 범위 내에 있는지 확인
          if (centerScrollPosition >= sectionTop && centerScrollPosition <= sectionBottom) {
            currentActiveSection = sectionId;
            break;
          }
        }
      }
      
      // 페이지 하단에 도달했을 경우 마지막 섹션(contact) 활성화
      const isAtBottom = window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 100;
      if (isAtBottom) {
        currentActiveSection = 'contact';
      }
      
      // 페이지 최상단일 경우 home 활성화
      if (window.scrollY < 100) {
        currentActiveSection = 'home';
      }
      
      setActiveSection(currentActiveSection);
    };

    // 디바운싱을 위한 함수
    let timeoutId;
    const debouncedHandleScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 10);
    };

    // 초기 실행
    handleScroll();
    
    window.addEventListener('scroll', debouncedHandleScroll);
    window.addEventListener('resize', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', debouncedHandleScroll);
      window.removeEventListener('resize', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const navItems = [
    { id: 'home', label: '홈' },
    { id: 'about', label: '소개' },
    { id: 'skills', label: '기술' },
    { id: 'projects', label: '프로젝트' },
    { id: 'contact', label: '연락처' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const navHeight = 56; // 네비게이션 바 높이
      let offset = navHeight;
      
      // 프로젝트 섹션은 추가 오프셋 적용
      if (id === 'projects') {
        offset += 180; // 80px 더 위에서 멈춤
      }
      
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setMobileMenuOpen(false);
  };


  return (
    <ToastProvider>
      <div className="min-h-screen">
      <Navigation
        darkMode={isDark}
        setDarkMode={toggleTheme}
        scrolled={scrolled}
        navVisible={navVisible}
        activeSection={activeSection}
        navItems={navItems}
        scrollToSection={scrollToSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      <Hero scrollToSection={scrollToSection} />
      <About />
      <Skills darkMode={isDark} />
      <Projects darkMode={isDark} />
      <Contact darkMode={isDark} />
        
      </div>
    </ToastProvider>
  );
};

export default Portfolio;
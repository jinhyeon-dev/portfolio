import React from 'react'
import { Mail, Github, Linkedin, Instagram, MapPin, Phone, Copy } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useToast } from '../ui/toast'

const Contact = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [contentRef, contentVisible] = useScrollAnimation({ threshold: 0.2 });
  const [cardsRef, cardsVisible] = useScrollAnimation({ threshold: 0.1 });
  const { addToast } = useToast();

  const copyToClipboard = async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      addToast('이메일 주소가 복사되었습니다!', 'success');
    } catch (err) {
      // 폴백: 텍스트 선택 및 복사
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
      addToast('이메일 주소가 복사되었습니다!', 'success');
    }
  };

  const contactMethods = [
    {
      icon: Mail,
      title: "이메일",
      description: "프로젝트 문의 및 협업 제안",
      value: "jinhyeon.dev@gmail.com",
      onClick: () => copyToClipboard('jinhyeon.dev@gmail.com'),
      isEmail: true,
      color: "from-blue-500 to-blue-600",
      hoverColor: "hover:from-blue-600 hover:to-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      description: "코드와 프로젝트 보기",
      value: "@jinhyeon-dev",
      href: "https://github.com/jinhyeon-dev",
      color: "from-gray-700 to-gray-800",
      hoverColor: "hover:from-gray-800 hover:to-gray-900"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "전문적인 네트워킹",
      value: "김진현",
      href: "https://www.linkedin.com/in/%EC%A7%84%ED%98%84-%EA%B9%80-377784329/",
      color: "from-blue-600 to-blue-700",
      hoverColor: "hover:from-blue-700 hover:to-blue-800"
    },
    {
      icon: Instagram,
      title: "Instagram",
      description: "일상과 개발 여정",
      value: "@rla._wlsgus",
      href: "https://instagram.com/rla._wlsgus",
      color: "from-pink-500 to-purple-600",
      hoverColor: "hover:from-pink-600 hover:to-purple-700"
    }
  ];

  const quickInfo = [
    {
      icon: MapPin,
      label: "위치",
      value: "경상북도, 대한민국"
    },
    {
      icon: Phone,
      label: "상태",
      value: "프리랜스 프로젝트 진행 중"
    }
  ];

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-muted/30 to-muted/10">
      <div className="container max-w-6xl mx-auto px-4">
        {/* 제목 */}
        <div 
          ref={titleRef}
          className={`text-center mb-16 transition-all duration-700 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Contact
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            새로운 프로젝트, 협업 기회, 또는 단순한 인사라도 언제든 환영합니다!
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* 연락처 정보 */}
          <div 
            ref={contentRef}
            className={`lg:col-span-1 space-y-6 transition-all duration-700 delay-200 ${
              contentVisible 
                ? 'opacity-100 translate-x-0' 
                : 'opacity-0 -translate-x-8'
            }`}
          >
            <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <span className="text-lg">👋</span>
                  연락하기
                </CardTitle>
                <CardDescription>
                  빠른 응답을 원하시면 이메일이나 LinkedIn을 추천드립니다.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {quickInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                      <info.icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{info.label}</p>
                      <p className="text-sm text-muted-foreground">{info.value}</p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 상태 카드 */}
            <Card className="border-green-200 dark:border-green-800">
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-700 dark:text-green-300">
                    현재 3개월 현장실습 진행중입니다. 8/18 ~ 11/18
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 소셜 미디어 링크 */}
          <div 
            ref={cardsRef}
            className="lg:col-span-2 grid gap-4 sm:grid-cols-2"
          >
            {contactMethods.map((method, index) => {
              const IconComponent = method.icon;
              return (
                <Card 
                  key={index}
                  className={`group cursor-pointer transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                    cardsVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: cardsVisible ? `${index * 100 + 300}ms` : '0ms'
                  }}
                  onClick={method.isEmail ? method.onClick : undefined}
                >
                  {method.isEmail ? (
                    <div className="block">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} ${method.hoverColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110 relative`}>
                            <IconComponent className="h-6 w-6 text-white" />
                            {method.isEmail && (
                              <Copy className="h-3 w-3 text-white absolute -bottom-1 -right-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                            )}
                          </div>
                          <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs text-muted-foreground">
                              {method.isEmail ? '클릭하여 복사' : '클릭하여 이동'}
                            </span>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                          {method.value}
                        </p>
                      </CardContent>
                    </div>
                  ) : (
                    <a 
                      href={method.href} 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${method.color} ${method.hoverColor} flex items-center justify-center transition-all duration-300 group-hover:scale-110`}>
                            <IconComponent className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-right opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="text-xs text-muted-foreground">클릭하여 이동</span>
                          </div>
                        </div>
                        <CardTitle className="text-lg">{method.title}</CardTitle>
                        <CardDescription>{method.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="font-medium text-primary group-hover:text-primary/80 transition-colors">
                          {method.value}
                        </p>
                      </CardContent>
                    </a>
                  )}
                </Card>
              );
            })}
          </div>
        </div>

        {/* 추가 CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-600 ${
            cardsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-2">함께 멋진 것을 만들어봐요!</h3>
            <p className="text-muted-foreground">
              아이디어가 있으시거나 단순히 기술에 대해 이야기하고 싶으시다면 언제든 연락주세요.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
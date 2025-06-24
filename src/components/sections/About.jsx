import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import { Award, Calendar, MapPin, Users } from "lucide-react";

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [introRef, introVisible] = useScrollAnimation({ threshold: 0.2 });
  const [experienceRef, experienceVisible] = useScrollAnimation({ threshold: 0.1 });
  const [certificationsRef, certificationsVisible] = useScrollAnimation({ threshold: 0.2 });
  const experiences = [
    {
      period: "2025.08.18 - 2025.11.18",
      title: "대구 더블엠소셜컴퍼니 현장실습생",
      description: "현장실습",
      highlights: [
      ],
      type: "current"
    },
    {
      period: "2024.08.12 - 현재",
      title: "USLASH 단체 창립 멤버",
      description: "창업과 IT 분야의 학생 · 청년 성장을 지원합니다.",
      highlights: [
        "U/CON 2025 주최",
        "U/THON 2025 예정",
      ],
      type: "current"
    },
    {
      period: "2025.01 - 현재",
      title: "오픈소스 기여자",
      description: "Flutter 생태계 패키지 개발 및 기여",
      highlights: [
        "pub.dev 패키지 2개 배포",
        "월 100명 이상 사용",
      ],
      type: "current"
    },
    {
      period: "2024.04.01 - 2024.07.11",
      title: "교내 2024년 1학기 캡스톤",
      description: "장려상",
      highlights: [
        "GITMATE - GitHub 통합 메신저 개발",
        "대구 ICT 융합엑스포 전시",
      ],
      type: "past"
    },
  ];

  const certifications = [
    {
      name: "정보처리산업기능사",
      issuer: "한국산업인력공단(HRD)",
      date: "2024.12.24",
      description: "소프트웨어 개발 및 데이터베이스 관리 능력 인증",
      status: "취득"
    },
    {
      name: "아마추어무선기사",
      issuer: "한국방송통신전파진흥원(KCA)",
      date: "2024.06.18",
      description: "컴퓨터 활용 및 문서 작성 능력 인증",
      status: "취득"
    },
  ];

  const personalInfo = [
    {
      icon: MapPin,
      label: "위치",
      value: "경상북도, 대한민국"
    },
    {
      icon: Users,
      label: "상태",
      value: "현장실습 진행중입니다."
    }
  ];

  return (
    <section id="about" className="py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 
          ref={titleRef}
          className={`text-3xl font-bold tracking-tight mb-12 transition-all duration-700 ${
            titleVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            About
          </span>
        </h2>

        <div className="grid gap-16 lg:gap-24">
          {/* 소개 */}
          <Card 
            ref={introRef}
            className={`transition-all duration-700 ${
              introVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* 오른쪽: 정보 */}
                <div className="flex-1 text-center md:text-left space-y-6">
                  {/* 기본 정보 */}
                  <div>
                    <h3 className="text-3xl font-bold mb-2">김진현</h3>
                    <p className="text-xl text-primary font-medium mb-4">Flutter Developer</p>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                      <Badge variant="secondary">경북소프트웨어마이스터고등학교</Badge>
                      <Badge variant="outline">
                        <a
                          href="https://uslash.org"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary transition-colors"
                        >
                          USLASH 활동
                        </a>
                      </Badge>
                    </div>
                    
                    {/* 개인 정보 */}
                    <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-muted-foreground">
                      {personalInfo.map((info, index) => (
                        <div key={index} className="flex items-center gap-1">
                          <info.icon className="h-4 w-4" />
                          <span>{info.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 소개글 */}
                  <div>
                    <p className="text-muted-foreground leading-relaxed">
                      안녕하세요! 도전을 즐기며 크로스플랫폼 프레임워크인 <strong>Flutter</strong>로 서비스를 만드는, 
                      앱에 진심인 개발자입니다.
                    </p>
                  </div>
                  
                  {/* 핵심 가치 - 간단하게 */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🚀</span>
                      <span className="text-sm text-muted-foreground">
                        도전을 두려워하지 않는 <strong>그로스 마인드셋</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">💡</span>
                      <span className="text-sm text-muted-foreground">
                        끝없는 학습을 추구하는 <strong>헝그리 정신</strong>
                      </span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-lg">🎯</span>
                      <span className="text-sm text-muted-foreground">
                        <strong>사용자 중심</strong>의 서비스 개발
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 경험 */}
          <div 
            ref={experienceRef}
            className={`transition-all duration-700 delay-200 ${
              experienceVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8">Experience</h3>
            <div className="grid gap-6">
              {experiences.map((exp, index) => (
                <Card 
                  key={index} 
                  className={`transition-all duration-700 hover:shadow-md ${
                    exp.type === 'current' 
                      ? 'border-primary/20 bg-gradient-to-r from-primary/5 to-transparent' 
                      : 'border-border'
                  } ${
                    experienceVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: experienceVisible ? `${index * 150}ms` : '0ms'
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg flex items-center gap-2">
                          {exp.title}
                          {exp.type === 'current' && (
                            <Badge variant="outline" className="text-xs bg-primary/10 text-primary border-primary/20">
                              현재
                            </Badge>
                          )}
                        </CardTitle>
                        <CardDescription className="mt-1">
                          {exp.period}
                        </CardDescription>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{exp.description}</p>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight, idx) => (
                        <Badge
                          key={idx}
                          variant="secondary"
                          className="text-xs hover:bg-primary/10 transition-colors"
                        >
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* 자격증 */}
          <div 
            ref={certificationsRef}
            className={`transition-all duration-700 delay-400 ${
              certificationsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <h3 className="text-2xl font-semibold mb-8">Certifications</h3>
            <div className="grid gap-4 md:grid-cols-2">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className={`transition-all duration-500 hover:shadow-md hover:-translate-y-1 ${
                    certificationsVisible 
                      ? 'opacity-100 translate-y-0' 
                      : 'opacity-0 translate-y-8'
                  }`}
                  style={{
                    transitionDelay: certificationsVisible ? `${index * 200}ms` : '0ms'
                  }}
                >
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <Badge 
                          variant="outline" 
                          className="text-xs bg-green-50 text-green-700 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800"
                        >
                          {cert.status}
                        </Badge>
                      </div>
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                    <CardDescription className="text-sm">{cert.issuer}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-2">
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {cert.date}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        {cert.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

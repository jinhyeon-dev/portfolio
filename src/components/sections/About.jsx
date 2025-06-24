import React from "react";
import { Badge } from "../ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { useScrollAnimation } from "../../hooks/useScrollAnimation";
import profileImage from '../../assets/images/profile.jpg'

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [introRef, introVisible] = useScrollAnimation({ threshold: 0.2 });
  const [experienceRef, experienceVisible] = useScrollAnimation({ threshold: 0.1 });
  const [valuesRef, valuesVisible] = useScrollAnimation({ threshold: 0.2 });
  const [interestsRef, interestsVisible] = useScrollAnimation({ threshold: 0.2 });
  const [quoteRef, quoteVisible] = useScrollAnimation({ threshold: 0.3 });
  const experiences = [
    {
      period: "2024.03 - 현재",
      title: "모바일 앱 개발 프리랜서",
      description: "스타트업과 개인 사업자를 위한 맞춤형 앱 개발",
      highlights: [
        "Flutter 앱 5개 출시",
        "평균 평점 4.8/5.0",
        "MAU 10,000+ 달성",
      ],
      type: "current"
    },
    {
      period: "2023.06 - 2024.02",
      title: "교내 프로그래밍 동아리 리더",
      description: "15명 규모 동아리 운영 및 멘토링",
      highlights: [
        "주간 세미나 진행",
        "해커톤 3회 주최",
        "신입생 교육 프로그램 개발",
      ],
      type: "past"
    },
    {
      period: "2022.09 - 현재",
      title: "오픈소스 기여자",
      description: "Flutter 생태계 패키지 개발 및 기여",
      highlights: [
        "pub.dev 패키지 2개 배포",
        "GitHub 스타 200+",
        "이슈 30+ 해결",
      ],
      type: "current"
    },
  ];

  const values = [
    "사용자가 정말 필요로 하는 것을 만드는 개발자",
    "코드 한 줄에도 이유가 있는 개발자",
    "팀과 함께 성장하는 개발자",
    "매일 1% 더 나아지는 개발자",
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
            className={`bg-gradient-to-br from-background to-muted/30 border-0 shadow-sm transition-all duration-700 ${
              introVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/20">
                  <img 
                    src={profileImage}
                    alt="김진현 프로필"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">김진현 | Flutter Developer</h3>
                    <p className="text-muted-foreground">
                      경북소프트웨어마이스터고등학교 재학 | 
                      <a
                        href="https://uslash.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/80 transition-colors underline ml-1"
                      >
                        USLASH
                      </a>
                      {" "}활동
                    </p>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                    <p>
                      🚀 도전을 즐기며 크로스플랫폼 프레임워크인 Flutter로 서비스를 만드는, 앱에 진심인 개발자입니다.
                    </p>
                    <p>
                      💡 처음 Flutter로 앱을 만들었을 때, 제가 만든 앱이 누군가의 일상에 도움이 된다는 사실에 큰 보람을 느꼈습니다.
                    </p>
                    <p>
                      🎯 현재는 Flutter와 React Native를 활용한 크로스플랫폼 개발에 집중하며, 풀스택 개발자로 성장하고 있습니다.
                    </p>
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

          {/* 가치관 */}
          <Card 
            ref={valuesRef}
            className={`transition-all duration-700 delay-300 ${
              valuesVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <CardHeader>
              <CardTitle>개발자로서의 가치관</CardTitle>
              <CardDescription>저를 움직이는 네 가지 원칙</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2">
                {values.map((value, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50 transition-all duration-500 ${
                      valuesVisible 
                        ? 'opacity-100 translate-x-0' 
                        : 'opacity-0 translate-x-4'
                    }`}
                    style={{
                      transitionDelay: valuesVisible ? `${index * 100 + 400}ms` : '0ms'
                    }}
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-sm font-bold">{index + 1}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 현재 관심사 */}
          <Card 
            ref={interestsRef}
            className={`bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/10 transition-all duration-700 delay-400 ${
              interestsVisible 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12'
            }`}
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span className="text-lg">🎯</span>
                현재 관심 분야
              </CardTitle>
              <CardDescription>지금 가장 집중하고 있는 기술과 방향성</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="p-4 rounded-lg border border-border/50 hover:border-primary/20 transition-colors">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-sm">⚡</span>
                    기술적 도전
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    마이크로서비스 아키텍처와 서버리스 환경에서의 앱 백엔드 구축
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 hover:border-primary/20 transition-colors">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-sm">👥</span>
                    사용자 경험
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    접근성을 고려한 디자인과 오프라인 우선 앱 개발
                  </p>
                </div>
                <div className="p-4 rounded-lg border border-border/50 hover:border-primary/20 transition-colors">
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <span className="text-sm">🤝</span>
                    팀 문화
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    효과적인 코드 리뷰 문화와 지식 공유 시스템 구축
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;

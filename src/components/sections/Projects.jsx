import React from 'react'
import { ArrowUpRight, Github, Star, Calendar, Users } from 'lucide-react'
import { Card, CardDescription, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import gbswTodayImage from '../../assets/images/gbsw_today.png'

const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation({ threshold: 0.3 });
  const [projectsRef, projectsVisible] = useScrollAnimation({ threshold: 0.1 });

  const projects = [
    {
      title: 'GBSW 급식 자동 스토리 봇',
      description: '인스타그램에 매일 6시에 자동적으로 급식을 알려주는 서비스입니다. NEIS API를 통해 실시간 급식 정보를 가져와 학생들에게 편리함을 제공합니다.',
      tech: ['Python', 'NEIS API', 'AWS', 'Instagrapi'],
      image: gbswTodayImage,
      link: 'https://www.instagram.com/gbsw_today/',
      github: 'https://github.com/jinhyeon-dev/gbsw_today',
      featured: true,
      status: '서비스',
      year: '2025',
      impact: '개인 프로젝트'
    },
    {
      title: 'WODGO',
      description: 'AI 추천 기반 크로스핏 운동 관리 서비스',
      tech: ['Flutter', 'Dart', 'FastAPI', 'Spring Boot', 'MySQL', 'AWS'],
      image: null,
      link: null,
      github: 'https://github.com/WODGO',
      featured: false,
      status: '진행중',
      year: '2025',
      impact: 'Team Project'
    },
  ]

  const getStatusColor = (status) => {
    switch (status) {
      case '서비스': return 'bg-green-100 text-green-700 dark:bg-green-900/20 dark:text-green-400';
      case '진행중': return 'bg-blue-100 text-blue-700 dark:bg-blue-900/20 dark:text-blue-400';
      case '완료': return 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400';
      default: return 'bg-gray-100 text-gray-700 dark:bg-gray-900/20 dark:text-gray-400';
    }
  };

  return (
    <section id="projects" className="py-24 bg-gradient-to-br from-muted/20 to-background">
      <div className="container max-w-6xl mx-auto px-4">
        {/* 제목 섹션 */}
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
              Projects
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            사용자의 문제를 해결하고 가치를 창출하는 프로젝트들을 소개합니다.
          </p>
        </div>

        {/* 프로젝트 그리드 */}
        <div 
          ref={projectsRef}
          className="space-y-6"
        >
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className={`group transition-all duration-700 hover:shadow-2xl hover:shadow-primary/5 border-0 ${
                project.featured 
                  ? 'bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 ring-1 ring-primary/10' 
                  : 'bg-card hover:bg-card/80'
              } ${
                projectsVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: projectsVisible ? `${index * 200}ms` : '0ms'
              }}
            >
              <div className={`${project.featured ? 'lg:grid lg:grid-cols-5 lg:gap-0' : 'flex flex-col'} overflow-hidden`}>
                {/* 이미지 섹션 */}
                {project.image && (
                  <div className={`relative ${project.featured ? 'lg:order-2 lg:col-span-2' : 'h-48'} bg-muted overflow-hidden`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-primary/90 text-primary-foreground backdrop-blur-sm">
                          <Star className="h-3 w-3 mr-1" />
                          Featured
                        </Badge>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {project.github && (
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-background/90 backdrop-blur-sm hover:bg-background"
                          asChild
                        >
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                      {project.link && (
                        <Button
                          size="sm"
                          className="bg-primary/90 backdrop-blur-sm hover:bg-primary"
                          asChild
                        >
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                )}

                {/* 콘텐츠 섹션 */}
                <div className={`${project.featured ? 'lg:order-1 lg:col-span-3 p-6' : 'p-5'} flex flex-col justify-between`}>
                  <div className="space-y-4">
                    {/* 헤더 */}
                    <div className="flex items-start justify-between">
                      <div className="space-y-2 flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <CardTitle className={`${project.featured ? 'text-xl' : 'text-lg'} group-hover:text-primary transition-colors`}>
                            {project.title}
                          </CardTitle>
                          <Badge 
                            variant="outline" 
                            className={`text-xs ${getStatusColor(project.status)}`}
                          >
                            {project.status}
                          </Badge>
                        </div>
                        
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            {project.year}
                          </div>
                          <div className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {project.impact}
                          </div>
                        </div>
                      </div>

                      {/* 이미지가 없는 경우의 액션 버튼 */}
                      {!project.image && (
                        <div className="flex gap-2">
                          {project.github && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                              asChild
                            >
                              <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                          {project.link && (
                            <Button
                              size="sm"
                              variant="ghost"
                              className="opacity-0 group-hover:opacity-100 transition-opacity"
                              asChild
                            >
                              <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ArrowUpRight className="h-4 w-4" />
                              </a>
                            </Button>
                          )}
                        </div>
                      )}
                    </div>

                    {/* 설명 */}
                    <CardDescription className={`${project.featured ? 'text-sm' : 'text-sm'} leading-relaxed line-clamp-3`}>
                      {project.description}
                    </CardDescription>

                    {/* 기술 스택 */}
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tech => (
                        <Badge 
                          key={tech} 
                          variant="secondary"
                          className="hover:bg-primary/10 hover:text-primary transition-colors text-xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* CTA Buttons for featured projects */}
                  {project.featured && (
                    <div className="flex gap-2 mt-4 pt-4 border-t border-border/50">
                      {project.link && (
                        <Button size="sm" asChild className="flex-1">
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ArrowUpRight className="h-3 w-3 mr-1" />
                            Live
                          </a>
                        </Button>
                      )}
                      {project.github && (
                        <Button size="sm" variant="outline" asChild className="flex-1">
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="h-3 w-3 mr-1" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 더 많은 프로젝트 CTA */}
        <div 
          className={`text-center mt-12 transition-all duration-700 delay-600 ${
            projectsVisible 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-2">더 많은 프로젝트가 궁금하신가요?</h3>
            <p className="text-muted-foreground mb-6">
              GitHub에서 더 많은 프로젝트와 오픈소스 기여를 확인하실 수 있습니다.
            </p>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70"
              asChild
            >
              <a 
                href="https://github.com/jinhyeon-dev" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Github className="h-5 w-5 mr-2" />
                GitHub에서 더 보기
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects
import React from 'react'
import { ArrowUpRight, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import gbswTodayImage from '../../assets/images/gbsw_today.png'

const Projects = () => {
  const projects = [
    {
      title: 'GBSW 급식 자동 스토리 봇',
      description: '인스타그램에 매일 6시에 자동적으로 급식을 알려주는 서비스',
      tech: ['Python', 'NEIS API', 'AWS', 'Instagram API'],
      image: gbswTodayImage,
      link: 'https://www.instagram.com/gbsw_today/',
      github: 'https://github.com/jinhyeon-dev/gbsw_today'
    },
    {
      title: 'Flutter 날씨 앱',
      description: '실시간 날씨 정보와 일기 예보를 제공하는 모바일 애플리케이션',
      tech: ['Flutter', 'Dart', 'Weather API', 'Provider'],
      link: null,
      github: 'https://github.com/jinhyeon-dev'
    },
    {
      title: 'Task Management App',
      description: 'React Native로 구축한 할 일 관리 애플리케이션',
      tech: ['React Native', 'TypeScript', 'Redux', 'SQLite'],
      link: null,
      github: 'https://github.com/jinhyeon-dev'
    }
  ]

  return (
    <section id="projects" className="py-24">
      <div className="container max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold tracking-tight mb-8">
          <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="group hover:shadow-xl hover:shadow-primary/10 border-primary/10 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {project.description}
                    </CardDescription>
                  </div>
                  <div className="flex gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-all hover:scale-110"
                      >
                        <ArrowUpRight className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <Badge 
                      key={tech} 
                      variant="secondary"
                      className="hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
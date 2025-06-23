import React from 'react'
import { ExternalLink, Github } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import gbswTodayImage from '../../assets/images/gbsw_today.png'

const Projects = ({ darkMode }) => {
  const projects = [
    {
      title: 'GBSW 급식 자동 스토리 봇',
      description: '인스타그램에 매일 6시에 자동적으로 찾아가는 급식 알리미 서비스',
      tech: ['Python', 'NEIS OpenAPI', 'Pillow', 'instagrapi', 'AWS'],
      image: gbswTodayImage,
      link: 'https://www.instagram.com/gbsw_today/',
      github: 'https://github.com/jinhyeon-dev/gbsw_today'
    },
    {
      title: '실시간 채팅 앱',
      description: 'Socket.io를 이용한 실시간 메시징 애플리케이션',
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop',
      link: '#',
      github: '#'
    },
    {
      title: 'AI 대시보드',
      description: '머신러닝 모델 시각화 및 분석 도구',
      tech: ['React', 'D3.js', 'Python', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      link: '#',
      github: '#'
    }
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.title} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tech => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2">
                <Button asChild size="sm" variant="default">
                  <a href={project.link} className="flex items-center gap-2">
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
                <Button asChild size="sm" variant="outline">
                  <a href={project.github} className="flex items-center gap-2">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
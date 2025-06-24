import React from 'react'
import { Badge } from '../ui/badge'
import { Card, CardContent } from '../ui/card'

const Skills = () => {
  const skillCategories = {
    "Languages": ["Dart", "JavaScript", "TypeScript", "Python"],
    "Mobile": ["Flutter", "React Native", "Android", "iOS"],
    "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML/CSS"],
    "Backend": ["FastAPI", "Node.js", "PostgreSQL", "Firebase"],
    "Tools": ["Git", "Docker", "AWS", "VS Code", "Figma"]
  }

  const expertSkills = ["Flutter", "Dart", "React", "Tailwind CSS", "Git"]
  const learningSkills = ["GraphQL", "Kubernetes", "React Query", "Prisma"]

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            모바일 앱 개발을 중심으로 다양한 기술 스택을 보유하고 있습니다.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* 메인 스킬 카드 */}
          <Card className="col-span-full">
            <CardContent className="pt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {Object.entries(skillCategories).map(([category, skills]) => (
                  <div key={category} className="space-y-3">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant={expertSkills.includes(skill) ? "default" : "secondary"}
                          className={expertSkills.includes(skill) 
                            ? "bg-primary/90 hover:bg-primary" 
                            : "hover:bg-secondary/80"
                          }
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 주요 기술 */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">주요 기술</h3>
              <div className="space-y-3">
                {expertSkills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-sm font-medium">{skill}</span>
                    <div className="flex items-center gap-2">
                      <div className="w-24 bg-secondary rounded-full h-2">
                        <div className="bg-primary rounded-full h-2 w-full" />
                      </div>
                      <span className="text-xs text-muted-foreground">Expert</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* 학습 중 */}
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold mb-4">현재 학습 중</h3>
              <p className="text-sm text-muted-foreground mb-4">
                새로운 기술에 대한 지속적인 탐구
              </p>
              <div className="flex flex-wrap gap-2">
                {learningSkills.map((skill) => (
                  <Badge key={skill} variant="outline" className="border-primary/50">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Skills
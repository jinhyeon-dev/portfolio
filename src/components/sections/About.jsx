import React from 'react'
import { Code2, Palette, Zap, Users } from 'lucide-react'
import { Card, CardContent } from '../ui/card'

const About = () => {
  const features = [
    { icon: Code2, label: '클린 코드', color: 'text-purple-400' },
    { icon: Palette, label: 'UI/UX 디자인', color: 'text-pink-400' },
    { icon: Zap, label: '성능 최적화', color: 'text-yellow-400' },
    { icon: Users, label: '팀 협업', color: 'text-blue-400' }
  ]

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
            <img
              src="/images/증명사진.JPG"
              alt="Profile"
              className="relative rounded-lg w-full"
            />
          </div>
          <div>
            <Card className="border-0 shadow-none bg-transparent">
              <CardContent className="p-0 space-y-6">
                <p className="text-lg text-muted-foreground">
                  5년 경력의 풀스택 개발자로, 사용자 중심의 혁신적인 웹 애플리케이션을 만드는 것을 좋아합니다.
                </p>
                <p className="text-lg text-muted-foreground">
                  React, Node.js, TypeScript를 주로 사용하며, 클린 코드와 최적화된 성능을 추구합니다.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature) => {
                    const Icon = feature.icon
                    return (
                      <div key={feature.label} className="flex items-center gap-3">
                        <Icon className={`h-5 w-5 ${feature.color}`} />
                        <span>{feature.label}</span>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
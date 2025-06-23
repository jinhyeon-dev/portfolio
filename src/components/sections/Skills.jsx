import React from 'react'
import { Progress } from '../ui/progress'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

const Skills = ({ darkMode }) => {
  const skills = [
    { name: 'React', level: 90, color: 'from-cyan-400 to-blue-500' },
    { name: 'TypeScript', level: 85, color: 'from-blue-400 to-indigo-500' },
    { name: 'Node.js', level: 80, color: 'from-green-400 to-emerald-500' },
    { name: 'Tailwind CSS', level: 95, color: 'from-purple-400 to-pink-500' }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills
        </h2>
        <Card>
          <CardHeader>
            <CardTitle>Technical Skills</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="relative">
                  <Progress 
                    value={skill.level} 
                    className="h-3"
                    style={{
                      '--progress-color': `linear-gradient(to right, ${skill.color.split(' ')[1]}, ${skill.color.split(' ')[3]})`
                    }}
                  />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Skills
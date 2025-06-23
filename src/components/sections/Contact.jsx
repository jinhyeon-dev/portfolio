import React from 'react'
import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'

const Contact = ({ darkMode }) => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <Card className="text-center border-0 bg-transparent shadow-none">
          <CardHeader>
            <CardTitle className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Get In Touch
            </CardTitle>
            <CardDescription className="text-xl">
              새로운 기회와 협업을 언제나 환영합니다. 연락주세요!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button asChild size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600">
              <a href="mailto:hello@example.com" className="inline-flex items-center gap-2">
                <Mail className="h-5 w-5" />
                <span>이메일 보내기</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Contact
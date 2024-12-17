import ResponsiveBoard from '@/components/custom/responsive-board'
import SwitchBoard from '@/components/custom/switch-board'
import WebBoard from '@/components/custom/web-board'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="flex flex-col justify-evenly min-h-screen container">
      {/* Introduction */}
      <div>
        <h1 className="font-bold text-3xl">I'm Van</h1>
        <p>
          and I'm a
          <span className="text-green-600"> full-stack developer</span>
        </p>
      </div>
      <Card className="bg-slate-50">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">Lorem ipsum dolor sit.</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row justify-end items-center space-x-2">
          <WebBoard />
          <SwitchBoard />
          <ResponsiveBoard />
        </CardContent>
      </Card>
      {/* Stacks */}

      {/* About  */}

      {/* Projects  */}

      {/* Contacts  */}
    </div>
  )
}

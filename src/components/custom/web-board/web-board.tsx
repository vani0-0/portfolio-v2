import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import { WindowContent, WindowHeader } from './web-components'

function WebBoard() {
  return (
    <Card className=" w-[410px]">
      <CardHeader>
        <div className="w-full h-48 border rounded-md flex flex-col overflow-hidden">
          <WindowHeader />
          <WindowContent />
        </div>

      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>
          Responsive Websites
        </CardTitle>
        <Separator />
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores explicabo magni!</p>
      </CardContent>
    </Card>
  )
}

export default WebBoard

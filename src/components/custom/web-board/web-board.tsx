import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import { WindowContent, WindowHeader } from './web-components'

function WebBoard() {
  return (
    <Card className=" w-[410px]">
      <CardHeader className="">
        <div className="w-full h-48 border rounded-md flex flex-col overflow-hidden">
          <WindowHeader />
          <WindowContent />
        </div>
        <CardTitle className="pt-2">
          Responsive Websites
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>Lorem ipsum dolor sit amet</p>
        <p>adipisicing elit. Quaerat blanditiis fuga.</p>
      </CardContent>
    </Card>
  )
}

export default WebBoard

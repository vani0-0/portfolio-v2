import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import Board from './board'

function ResponsiveBoard() {
  return (
    <Card className="w-[420px]">
      <CardHeader>
        <Board />
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle>Multi-Platform Apps</CardTitle>
        <Separator />
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores explicabo magni!</p>
      </CardContent>
    </Card>
  )
}

export default ResponsiveBoard

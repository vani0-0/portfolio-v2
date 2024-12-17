'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import React from 'react'
import BoxSwitch from './box-switch'
import { useBoard } from './use-switch-board'

function SwitchBoard() {
  const { board, cycleLight } = useBoard({ x: 20, y: 10 })

  const handleClick = (row: number, col: number) => {
    cycleLight(row, col)
  }

  return (
    <Card className="bg-slate-900 text-white w-[410px]">
      <CardHeader>
        <div className="cursor-pointer w-fit">
          {board.map((rows, rowIndex) => (
            <div key={rowIndex} className="flex">
              {rows.map((col, colIndex) => (
                <BoxSwitch
                  key={col.id}
                  state={col.state}
                  onMouseEnter={() => handleClick(rowIndex, colIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </CardHeader>
      <CardContent className="space-y-2">
        <CardTitle className="pt-2">Stars?</CardTitle>
        <Separator />
        <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste maiores explicabo magni!</p>
      </CardContent>
    </Card>

  )
}

export default SwitchBoard

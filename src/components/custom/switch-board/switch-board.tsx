'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import React from 'react'
import BoxSwitch from './box-switch'
import { useBoard } from './use-switch-board'

function SwitchBoard() {
  const { board, cycleLight } = useBoard({ x: 20, y: 5 })

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
        <CardTitle className="pt-2">Stars?</CardTitle>
      </CardHeader>
      <CardContent className="text-wrap break-words">
        <p>Lorem ipsum dolor sit amet </p>
        <p>adipisicing elit. In aperiam velit hic!</p>
      </CardContent>
    </Card>

  )
}

export default SwitchBoard

'use client'

import React from 'react'

export interface Grid {
  x: number
  y: number
}

export interface Switch {
  id: number
  state: 'off' | 'high'
}

export function useBoard({ x, y }: Grid) {
  const initializeBoard = React.useMemo(() => {
    return (): Switch[][] =>
      Array.from({ length: y }, (_, rowIndex) =>
        Array.from({ length: x }, (_, colIndex) => ({
          id: rowIndex * x + colIndex,
          state: 'off',
        })))
  }, [x, y])

  const [board, setBoard] = React.useState<Switch[][]>(initializeBoard)

  const cycleState = (currentState: 'off' | 'high'): 'off' | 'high' => {
    return currentState === 'off' ? 'high' : 'off'
  }

  const cycleLight = (row: number, col: number) => {
    setBoard((prevBoard) => {
      const newBoard = prevBoard.map((rowItems, rowIndex) => {
        return rowItems.map((switchItem, colIndex) => {
          if (rowIndex === row && colIndex === col) {
            return { ...switchItem, state: cycleState(switchItem.state) }
          }
          return switchItem
        })
      })
      return newBoard
    })
  }

  return { board, cycleLight }
}

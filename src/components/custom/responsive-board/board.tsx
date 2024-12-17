'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { cn } from '@/lib/utils'
import { Menu } from 'lucide-react'
import { motion } from 'motion/react'
import React, { useEffect, useRef, useState } from 'react'

function Board() {
  const ref = useRef<HTMLDivElement>(null)
  const [width, setWidth] = useState(300)

  useEffect(() => {
    const currentRef = ref.current
    const resizeObserver = new ResizeObserver(() => {
      if (currentRef) {
        setWidth(currentRef.offsetWidth)
      }
    })
    if (currentRef) {
      resizeObserver.observe(currentRef)
    }
    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef)
      }
    }
  }, [])

  return (
    <div className="w-full h-[180px] overflow-hidden">
      <motion.div
        className="h-full rounded-md flex justify-center items-center mx-auto"
        animate={{
          width: ['100%', '50%', '50%', '30%'],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          repeatDelay: 2,
          ease: 'easeIn',
        }}
      >
        <div
          ref={ref}
          className={cn(
            'transition-all duration-500 overflow-hidden',
            'border-2 h-full w-full',
            'flex flex-col justify-start',
            width >= 150 ? 'rounded-sm' : 'rounded-3xl',
          )}
        >
          <BoardNav width={width} />
          <BoardContent width={width} />
          <BoardFooter width={width} />
        </div>
      </motion.div>
    </div>
  )
}

export default Board

interface BoardProp {
  width: number
}

function BoardNav({ width }: BoardProp) {
  return (
    <div className="h-[20px] border-b-2">
      <div className={
        cn(
          'h-full w-full p-2',
          'transition-all duration-500 bg-purple-50',
          'flex flex-row justify-between items-center',
        )
      }
      >
        <Skeleton className={cn('h-[10px] bg-gray-600 transition-all duration-500', width >= 300
          ? 'w-1/3'
          : width >= 150
            ? 'w-1/3'
            : 'w-1/5')}
        />

        {width > 300
          ? (
              <div className="flex space-x-2">
                <div className="w-2 h-2 rounded-full bg-green-200"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-200"></div>
                <div className="w-2 h-2 rounded-full bg-red-200"></div>
              </div>
            )
          : <div><Menu width={12} height={12} /></div>}

      </div>
    </div>
  )
}

function BoardFooter({ width }: BoardProp) {
  return width <= 150
    ? (
        <div className="flex w-full bg-purple-50 border-t-2">
          <div className="w-4 h-4 border-2 my-1 rounded-full mx-auto bg-purple-100"></div>
        </div>
      )
    : null
}

function BoardContent({ width }: BoardProp) {
  return (
    <div
      className={cn('flex-1 transition-all duration-500 overflow-hidden', 'flex px-2', width >= 300
        ? 'flex-row space-x-2'
        : width >= 150
          ? 'px-4'
          : '')}
    >
      <div className={cn('mx-auto space-y-2 pt-2', width <= 300 ? 'hidden' : '')}>
        <motion.div
          className="w-12 h-12 border"
          animate={{ borderRadius: ['100%', '10%'] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 2,
            ease: 'easeIn',
          }}
        >
        </motion.div>
        <Skeleton className="w-full h-2 rounded-md`" />
        <Skeleton className="w-full h-2 rounded-md`" />
        <Skeleton className="w-full h-2 rounded-md`" />
        <Skeleton className="w-1/6 h-2 rounded-md`" />
      </div>

      <div className="flex-1 overflow-hidden pt-2">
        <motion.div
          className={cn('space-y-2 flex-1')}
          animate={{
            y: ['0', '-50%'],
          }}
          transition={{
            delay: 5,
            type: 'spring',
            duration: 1,
            repeat: Infinity,
            repeatDelay: 4,
            repeatType: 'mirror',
          }}
        >
          <div className="border max-w-48 mr-auto h-12 p-2 ">
            <div className="flex flex-col justify-center space-y-1">
              <div className="flex w-full space-x-1 items-center">
                <Skeleton className="w-4 h-4 rounded-full" />
                <div className="w-full space-y-1">
                  <Skeleton className="w-full h-2 bg-gray-600" />
                </div>
              </div>
              <Skeleton className="w-full h-1" />
              <Skeleton className="w-full h-1" />
            </div>
          </div>
          <div className="border max-w-48 mr-auto h-12 p-2 ">
            <div className="flex flex-col justify-center space-y-1">
              <div className="flex w-full space-x-1 items-center">
                <Skeleton className="w-4 h-4 rounded-full" />
                <div className="w-full space-y-1">
                  <Skeleton className="w-full h-2 bg-gray-600" />
                </div>
              </div>
              <Skeleton className="w-full h-1" />
              <Skeleton className="w-full h-1" />
            </div>
          </div>
          <div className="border max-w-48 mr-auto h-12 p-2 ">
            <div className="flex flex-col justify-center space-y-1">
              <div className="flex w-full space-x-1 items-center">
                <Skeleton className="w-4 h-4 rounded-full" />
                <div className="w-full space-y-1">
                  <Skeleton className="w-full h-2 bg-gray-600" />
                </div>
              </div>
              <Skeleton className="w-full h-1" />
              <Skeleton className="w-full h-1" />
            </div>
          </div>
          <div className="border max-w-48 mr-auto h-12 p-2 ">
            <div className="flex flex-col justify-center space-y-1">
              <div className="flex w-full space-x-1 items-center">
                <Skeleton className="w-4 h-4 rounded-full" />
                <div className="w-full space-y-1">
                  <Skeleton className="w-full h-2 bg-gray-600" />
                </div>
              </div>
              <Skeleton className="w-full h-1" />
              <Skeleton className="w-full h-1" />
            </div>
          </div>
          <Skeleton className="mx-auto h-2 rounded-lg bg-gray-600 w-1/5" />
        </motion.div>
      </div>

      <div className={cn('mx-auto w-1/4 space-y-1 border-l pl-2 pt-2', width <= 300 ? 'hidden' : '')}>
        <Skeleton className="w-full h-3 rounded-md bg-gray-600" />
        <Skeleton className="w-1/2 h-2 rounded-md ml-auto" />
        <Skeleton className="w-1/2 h-2 rounded-md ml-auto" />
      </div>
    </div>
  )
}

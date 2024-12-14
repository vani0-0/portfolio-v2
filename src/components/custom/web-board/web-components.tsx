'use client'
import { Skeleton } from '@/components/ui/skeleton'
import { Triangle } from 'lucide-react'
import { motion } from 'motion/react'
import React from 'react'

export function WindowsActions() {
  return (
    <div className="flex space-x-2">
      <div className="w-4 h-4 border rounded-full bg-white"></div>
      <div className="w-4 h-4 border rounded-full bg-white"></div>
      <div className="w-4 h-4 border rounded-full bg-white"></div>
    </div>
  )
}

export function WindowHeader() {
  return (
    <div className="p-1 border-b bg-purple-50">
      <WindowsActions />
    </div>
  )
}

export function WindowContent() {
  return (
    <div className="flex flex-1">
      <div className="p-4 w-20 space-y-1">
        <motion.div
          className="w-12 h-12 border-2 flex items-center justify-center"
          initial={{ borderRadius: '5%' }}
          animate={{ borderRadius: '100%' }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 3,
            ease: 'easeInOut',
          }}
        >
          <Triangle width={18} height={18} fill="black" />
        </motion.div>
        <Skeleton className="w-full h-3 bg-gray-500 border rounded" />
        <Skeleton className="w-2/3 h-2 bg-gray-200 border rounded" />
        <Skeleton className="w-3/4 h-2 bg-gray-200 border rounded" />
      </div>
      <div className="flex-1">
        <div className="py-4 px-2 space-y-2">
          <div className="flex justify-between">
            <Skeleton className="w-4 h-4 border rounded-full" />
            <Skeleton className="w-1/5 h-4 border rounded-full bg-gray-500" />
          </div>
          <div className="flex space-x-2">
            <Skeleton className="w-2/12 h-2" />
            <Skeleton className="w-full h-2" />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 px-2 ">
          <div className="grid gap-2">
            <AnimatedHeightDiv initialHeight={50} animateHeight={40} />
            <AnimatedHeightDiv initialHeight={50} animateHeight={30} />
            <AnimatedHeightDiv initialHeight={50} animateHeight={80} />
          </div>
          <div className="grid gap-2">
            <AnimatedHeightDiv initialHeight={30} animateHeight={50} />
            <AnimatedHeightDiv initialHeight={20} animateHeight={50} />
            <AnimatedHeightDiv initialHeight={100} animateHeight={50} />
          </div>
        </div>
      </div>
    </div>
  )
}

interface AnimatedHeightProps {
  initialHeight: number
  animateHeight: number
}

export function AnimatedHeightDiv({ initialHeight, animateHeight }: AnimatedHeightProps) {
  return (
    <motion.div
      className="w-full border-2 rounded-sm"
      initial={{ height: initialHeight }}
      animate={{ height: animateHeight }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: 'reverse',
        repeatDelay: 5,
        ease: 'easeInOut',
      }}
    >
    </motion.div>
  )
}

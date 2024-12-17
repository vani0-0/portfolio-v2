import { cn } from '@/lib/utils'
import React from 'react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  state?: 'off' | 'high'
}

function BoxSwitch({ state = 'off', ...props }: Props) {
  return (
    <div
      className="p-2"
      {...props}
    >
      <div
        className={cn(
          'transition-all duration-5000 rounded w-[2px] h-[2px]',
          {
            'bg-slate-950': state === 'off',
            'bg-emerald-300 shadow-[0_0_5px_1px_rgba(255,255,255,0.8)] ring-2 ring-opacity-15': state === 'high',
            'animate-pulse': state === 'high',
          },
        )}
      >
      </div>
    </div>
  )
}

export default BoxSwitch

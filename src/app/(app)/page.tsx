import SwitchBoard from '@/components/custom/switch-board'
import WebBoard from '@/components/custom/web-board'

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
      <div className="flex lg:flex-row flex-col gap-2">
        <WebBoard />
        <SwitchBoard />
      </div>
      {/* Stacks */}

      {/* About  */}

      {/* Projects  */}

      {/* Contacts  */}
    </div>
  )
}

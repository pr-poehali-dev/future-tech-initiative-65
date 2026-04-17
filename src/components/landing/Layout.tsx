import { ReactNode } from 'react'
import { Squares } from "./squares-background"

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="h-screen overflow-hidden bg-[#EAF4FB] relative">
      <div className="absolute inset-0 z-10">
        <Squares
          direction="diagonal"
          speed={0.5}
          squareSize={40}
          borderColor="#B8D9EF"
          hoverFillColor="#D0EAF8"
        />
      </div>
      <div className="relative z-20 h-full">
        {children}
      </div>
    </div>
  )
}
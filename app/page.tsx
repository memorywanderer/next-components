'use client'

import { Slider } from "@/components/ui/slider/slider";

export default function Home() {

  return (
    <main className="flex-col w-screen h-screen flex items-center justify-center p-4">
      <Slider defaultValue={[150]} max={500} step={2} variant="range" />
    </main>
  )
}

'use client'

import { Checkbox } from "@/components/ui/checkbox/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group/radio-group"


export default function Home() {

  return (
    <main className="w-screen h-screen flex items-center justify-center p-4">
      <form>
        <RadioGroup>
          <div className="flex items-center">
            <RadioGroupItem id='r1' value="default" />
            <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r1">Default</label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem id='r2' value="sdsd" />
            <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r2">sdsd</label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem id='r3' value="aaa" />
            <label className="text-white text-[15px] leading-none pl-[15px]" htmlFor="r3">aaa</label>
          </div>
        </RadioGroup>


      </form>
    </main>
  )
}

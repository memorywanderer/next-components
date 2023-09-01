'use client'

import { Checkbox } from "@/components/ui/checkbox/checkbox"
import { Label } from "@/components/ui/label/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group/radio-group"


export default function Home() {

  return (
    <main className="w-screen h-screen flex items-center justify-center p-4">
      <form>
        <RadioGroup>
          <div className="flex items-center">
            <RadioGroupItem id='r1' value="default" />
            <Label className="px-4 cursor-pointer" htmlFor="r1">Default</Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem id='r2' value="compact" />
            <Label className="px-4 cursor-pointer" htmlFor="r2">Compact</Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem id='r3' value="expand" disabled />
            <Label className="px-4 cursor-pointer" htmlFor="r3">Expand</Label>
          </div>
        </RadioGroup>


      </form>
    </main>
  )
}

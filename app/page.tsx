'use client'

import { Checkbox } from "@/components/ui/checkbox/checkbox"


export default function Home() {

  return (
    <main className="w-screen h-screen flex items-center justify-center p-4">
      <>
        <Checkbox id="c1" defaultChecked />
        <label className="pl-[15px] cursor-pointer leading-none " htmlFor="c1">
          Accept terms and conditions.
        </label>
      </>
    </main>
  )
}

'use client'

import { Checkbox } from "@/components/ui/checkbox/checkbox"
import { Label } from "@/components/ui/label/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group/radio-group"
import { ScrollArea } from "@/components/ui/scroll-area/scroll-area";
import { Separator } from "@/components/ui/separator/separator";

const TAGS = Array.from({ length: 50 }).map((_, i, a) => `v1.2.0-beta.${a.length - i}`);
export default function Home() {

  return (
    <main className="flex-col w-screen h-screen flex items-center justify-center p-4">
      <ScrollArea>
        {TAGS.map((tag) => (
          <div
            className="text-mauve12 text-[13px] leading-[18px] mt-2.5 pt-2.5 border-t border-t-mauve6"
            key={tag}
          >
            {tag}
          </div>
        ))}
      </ScrollArea>
      <Separator />
    </main>
  )
}

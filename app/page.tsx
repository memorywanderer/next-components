'use client'

import { Icons } from "@/components/icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion/accordion"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio/aspect-ratio"
import { Button } from "@/components/ui/button/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card/card"
import { Checkbox } from "@/components/ui/checkbox/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog/dialog"
import { Label } from "@/components/ui/label/label"
import { Input } from "@/components/ui/input/input"
// import { NavigationListItem, NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation/nav"
import { Typography } from "@/components/ui/typography/typography"
import Image from "next/image"
import Link from "next/link"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select/select"
import { SelectGroup, SelectLabel } from "@radix-ui/react-select"
import { Separator } from "@/components/ui/separator/separator"
import { Slider } from "@/components/ui/slider/slider"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs"
import { useEffect, useRef, useState } from "react"
import { FormWithReactHookForm } from "@/components/ui/form/form-old"
import { Form } from "@/components/ui/form/form"
import { TestForm } from "@/components/forms/test-form"
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationListItem } from "@/components/ui/navigation/navigation"
import { DesktopNav } from "@/components/desktop-nav"
import { siteConfig } from "@/config/site"
import { Header } from "@/components/site-header"
import { toast } from "sonner"
import { Toaster } from "@/components/ui/toaster/toaster"
import { Toast } from "@/components/ui/toast/toast"
import { Grid } from "@/components/layouts/grid/grid"
import { Shell } from "@/components/shell/shell"
import { Hero } from "@/components/pages/hero/hero"


function oneWeekAway(date?: Date) {
  const now = new Date();
  const inOneWeek = now.setDate(now.getDate() + 7);
  return new Date(inOneWeek);
}

function prettyDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'full', timeStyle: 'short' }).format(date);
}

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Alert Dialog",
    href: "/docs/primitives/alert-dialog",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Hover Card",
    href: "/docs/primitives/hover-card",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Progress",
    href: "/docs/primitives/progress",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "Scroll-area",
    href: "/docs/primitives/scroll-area",
    description: "Visually or semantically separates content.",
  },
  {
    title: "Tabs",
    href: "/docs/primitives/tabs",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
  },
  {
    title: "Tooltip",
    href: "/docs/primitives/tooltip",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
  },
]

export default function Home() {
  const [open, setOpen] = useState(false)
  const eventDateRef = useRef(new Date())
  const timerRef = useRef(0)

  useEffect(() => {
    return () => clearTimeout(timerRef.current)
  }, [])

  return (
    <>
      <main className="w-full">
        <Hero title="Пластиковые окна" description="15 лет гарантии на окна ПВХ, комплектующие и монтаж!" buttonTitle="Бесплатный замер" />
      </main>
    </>
  )
}

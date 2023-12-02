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
import { Toast } from "@/components/ui/toast-new/toast-new"


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

      <main className="flex flex-wrap h-screen gap-2">
        {/* <nav className="h-full p-4 border-r w-60 border-outline-tertiary">
          <ul className='flex flex-col gap-4'>
            <li>
              <Link href="#" className="flex justify-center px-4 py-2 border bg-surface-primary rounded-3xl border-outline-tertiary hover:bg-surface-accent hover:text-on-surface-accent">
                <Typography type="body-large" className="font-bold">Читай</Typography>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex justify-center px-4 py-2 border bg-surface-primary rounded-3xl border-outline-tertiary hover:bg-surface-accent hover:text-on-surface-accent">
                <Typography type="body-large" className="font-bold">Смотри</Typography>
              </Link>
            </li>
            <li>
              <Link href="#" className="flex justify-center px-4 py-2 border bg-surface-primary rounded-3xl border-outline-tertiary hover:bg-surface-accent hover:text-on-surface-accent">
                <Typography type="body-large" className="font-bold">Слушай</Typography>
              </Link>
            </li>
            <li>
              <Button variant="accent" className="w-full px-5 py-6 rounded-full">
                <Typography tag="span" type="interface-primary" className="font-bold">Опубликовать пост</Typography>
              </Button>
            </li>
          </ul>
        </nav> */}

        <div className="pt-4 ml-48 max-w-[800px]">
          <Typography tag="h1" type="title-desktop" className="mb-6 text-on-surface-primary">
            Двухфакторная авторизация на госуслугах станет обязательной для всех: как ее настроить
          </Typography>
          <Image
            src="/richard-horvath-_nWaeTF6qo0-unsplash.jpg"
            alt="preparing car for winter"
            width={720}
            height={480}
            className="object-cover rounded-md"
          />
          <div className="flex p-4 bg-surface-primary">
            <Toaster />
            <Button variant="secondary" onClick={() => Toast({ title: "Внимание", description: "Поле email должно быть заполнено", type: "error" })}>Покажи мне тост!</Button>
          </div>
          <div className="flex p-4 bg-surface-secondary">
            <Button variant="tertiary">Привет!</Button>
          </div>

          <div className="flex flex-col max-w-xs gap-2 p-4 bg-surface-seconadry">
            <Label htmlFor="opinion" className="p-2 rounded-lg max-w-fit bg-surface-accent text-on-surface-accent">
              Мнение
            </Label>

            <Button >Привет!</Button>
            <Button variant="secondary">Привет!</Button>
            <Button variant="tertiary">Привет!</Button>
            <Button variant="outline">Привет!</Button>
            <Button variant="ghost">Привет!</Button>
            <Button variant="link">Привет!</Button>
            <Button variant="negative">Привет!</Button>
          </div>
          {/* <div className="p-4 border bg-surface-positive text-on-surface-positive border-outline-positive rounded-xl">
            <Typography tag="h1" type="heading-four-desktop">
              Двухфакторная авторизация
            </Typography>
            <Typography>
              Кажется, что вкусно есть и хорошо себя чувствовать — понятия несовместимые: все вкусное вредно, а пресное и однообразное — полезно
            </Typography>
          </div>
          <div className="p-4 border bg-surface-warning text-on-surface-warning border-outline-warning rounded-xl">
            <Typography tag="h1" type="heading-four-desktop">
              Двухфакторная авторизация
            </Typography>
            <Typography>
              Кажется, что вкусно есть и хорошо себя чувствовать — понятия несовместимые: все вкусное вредно, а пресное и однообразное — полезно
            </Typography>
          </div>
          <div className="p-4 border bg-surface-negative text-on-surface-negative border-outline-negative rounded-xl">
            <Typography tag="h1" type="heading-four-desktop">
              Двухфакторная авторизация
            </Typography>
            <Typography>
              Кажется, что вкусно есть и хорошо себя чувствовать — понятия несовместимые: все вкусное вредно, а пресное и однообразное — полезно
            </Typography>
          </div>
          <div className="p-4 border bg-surface-accent text-on-surface-accent border-outline-accent rounded-xl">
            <Typography tag="h1" type="heading-four-desktop">
              Двухфакторная авторизация
            </Typography>
            <Typography>
              Кажется, что вкусно есть и хорошо себя чувствовать — понятия несовместимые: все вкусное вредно, а пресное и однообразное — полезно
            </Typography>
          </div> */}
          <Typography tag="h1" type="title-desktop" className="mb-6 text-on-surface-primary">
            Двухфакторная авторизация на госуслугах станет обязательной для всех: как ее настроить
          </Typography>
          <Typography tag="h1" type="heading-two-desktop" className="mb-4 text-on-surface-faint">
            Кажется, что вкусно есть и хорошо себя чувствовать — понятия несовместимые: все вкусное вредно, а пресное и однообразное — полезно
          </Typography>
          <Typography type="body-primary-desktop" className="mb-4 text-on-surface-secondary">
            На самом деле ограничивать себя не нужно: можно есть то, что нравится, и не беспокоиться о здоровье. В нашем курсе мы расскажем, как разобраться в принципах здорового питания без диет и запретов. Вы узнаете, какие у вас пищевые привычки, как не переедать и постепенно улучшать рацион — при этом не отказываясь от любимых продуктов и не переплачивая.
          </Typography>
          <Typography type="body-primary-desktop" className="mb-4 text-on-surface-secondary">
            Поправка вступила в силу 18 октября 2023 года. До этого момента в тексте ГОСТ 50577-2018 «Знаки государственные регистрационные транспортных средств» было сказано, что на автомобилях с нестандартным местом крепления регистрационного знака разрешается установка квадратного номера сзади. Речь идет об автономерах типа 1А. Это касалось в том числе японских и американских автомобилей.

            Измененный гост теперь разрешает устанавливать такие номера и спереди автомобиля. Но только если конструкция транспортного средства не позволяет установить стандартные прямоугольные знаки. Например, если на бампере есть специальное углубление под крепление квадратного знака.
          </Typography>
          <Typography type="body-primary-desktop" className="mb-4 text-on-surface-secondary">
            Внимание на изменение этого госта обратила газета «Коммерсант». По данным издания, ГИБДД 20 октября разослала в региональные управления разъяснения с просьбой рассказать сотрудникам об изменении стандарта, чтобы не допустить неправомерного привлечения водителей к ответственности.

            За установку нестандартных номеров, если этого не предусматривает конструкция автомобиля, грозит административная ответственность по ст. 12.2 КоАП РФ. Водителя могут оштрафовать на 500 ₽.
          </Typography>
        </div>
        {/* <ToastProvider swipeDirection="right">
          <Button
            onClick={() => {
              setOpen(false);
              window.clearTimeout(timerRef.current);
              timerRef.current = window.setTimeout(() => {
                eventDateRef.current = oneWeekAway();
                setOpen(true);
              }, 100);
            }}
          >
            Show must go on
          </Button>
          <Toast
            variant="interactive"
            open={open}
            onOpenChange={setOpen}
          >
            <ToastTitle className="[grid-area:_title]">
              <Typography tag="h3" type="heading-three" className="text-on-surface-interactive">Scheduled: Catch up</Typography>
            </ToastTitle>
            <ToastDescription asChild>
              <time
                className="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
                dateTime={eventDateRef.current.toISOString()}
              >
                {prettyDate(eventDateRef.current)}
              </time>
            </ToastDescription>
            <ToastAction className="[grid-area:_action]" asChild altText="Goto schedule to undo">
              <Button variant="accent">
                <Typography>
                  undo
                </Typography>
              </Button>
            </ToastAction>
          </Toast>
          <ToastViewport className="[--viewport-padding:_25px] " />
        </ToastProvider>
        <Tabs defaultValue="one">
          <TabsList>
            <TabsTrigger value="one">one</TabsTrigger>
            <TabsTrigger value="two">two</TabsTrigger>
            <TabsTrigger value="three">three</TabsTrigger>
          </TabsList>
          <TabsContent value="one">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quibusdam, repudiandae nisi omnis maiores porro pariatur esse mollitia placeat velit aperiam, in necessitatibus eveniet excepturi ad iste. Consequuntur, eveniet sequi.
          </TabsContent>
          <TabsContent value="two">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde eius tempore adipisci, odit placeat totam est, distinctio, eos dicta possimus nobis voluptas ab! Quasi cum quod aperiam natus provident odio?
          </TabsContent>
          <TabsContent value="three">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit vitae accusantium magni ut, excepturi quod possimus porro sed praesentium illum maxime repellat recusandae perferendis nisi distinctio quibusdam reiciendis. Atque, cupiditate.
          </TabsContent>
        </Tabs>
        <Typography tag="h1" type="title-desktop">
          Двухфакторная авторизация на госуслугах станет обязательной для всех: как ее настроить
        </Typography>
        <Typography tag="h1" type="heading-two-desktop">
          Кажется, что вкусно есть и хорошо себя чувствовать — понятия несовместимые: все вкусное вредно, а пресное и однообразное — полезно
        </Typography>
        <Typography type="body-large">
          На самом деле ограничивать себя не нужно: можно есть то, что нравится, и не беспокоиться о здоровье. В нашем курсе мы расскажем, как разобраться в принципах здорового питания без диет и запретов. Вы узнаете, какие у вас пищевые привычки, как не переедать и постепенно улучшать рацион — при этом не отказываясь от любимых продуктов и не переплачивая.
        </Typography>

        <form>
          <Label htmlFor="surname">
            Surname
            <Input name="surname" placeholder="Your surname" />
          </Label>
          <Label htmlFor="name">
            Name
            <Input name="name" placeholder="Your name" disabled />
          </Label>
          <Label className="flex item-center">
            <Checkbox />
            Check it
          </Label>
        </form>
        <Accordion
          className="w-full bg-surface-secondary"
          type="single"
          defaultValue='item-1'
          collapsible
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>Click me</AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A non dolores, nostrum debitis consequatur voluptas, esse vitae sunt maiores magni aliquid minima id deserunt temporibus eligendi numquam qui assumenda at.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>I'm behind</AccordionTrigger>
            <AccordionContent>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum laudantium voluptate voluptas laboriosam nobis! Ratione eum, dicta, asperiores mollitia perspiciatis, nulla velit id aut neque ad nesciunt. Amet, quam earum!</AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Stay close
            </AccordionTrigger>
            <AccordionContent>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, eos aut delectus eum consequatur aliquam, quasi quaerat alias veritatis repellat nesciunt consectetur, odit unde id necessitatibus quis ab et harum!
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="secondary">
              <Typography type="interface-primary">Показать диалог</Typography>
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <AspectRatio ratio={4 / 3}>
                <Image
                  src='/artur-stanulevich-F_zWvxrQeCk-unsplash.jpg'
                  alt="lighting strike in the night sky"
                  fill
                  className="object-cover rounded-md"
                />
              </AspectRatio>
            </DialogHeader>
            <DialogTitle>Welcome back!</DialogTitle>
            <DialogDescription className='text-xs'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic vel autem quae repellendus molestias eaque sit ea tenetur vitae aliquid?
            </DialogDescription>
          </DialogContent>
        </Dialog>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          <Card className="h-full overflow-hidden max-w-[270px]" border="lg">
            <CardHeader className="py-4">
              <AspectRatio ratio={4 / 3}>
                <div
                  aria-label="Placeholder"
                  role="img"
                  aria-roledescription="placeholder"
                  className="flex items-center justify-center w-full h-full bg-background "
                >
                  <Icons.placeholder
                    className="h-9 w-9 text-muted-foreground"
                    aria-hidden="true"
                  />
                </div>
              </AspectRatio>
            </CardHeader>
            <CardContent>
              <Typography tag="h3" type="heading-three" className="mb-4">
                Смартфон Apple iPhone 11 128GB Black</Typography>
              <Separator />
              <Slider />
              <Typography type="body-large" className="font-bold">314 990 ₸</Typography>
            </CardContent>
            <CardFooter className="flex flex-col">
              <div className='flex items-center mb-2'>
                <Checkbox id="c1" />
                <label className="pl-[15px] text-[15px] leading-none text-foreground cursor-pointer" htmlFor="c1">
                  Accept terms and conditions.
                </label>
                <RadioGroup>
                  <RadioGroupItem id='r1' value="Item 1" />
                  <label className=" pl-[15px]" htmlFor="r1">
                    <Typography>
                      Default
                    </Typography>
                  </label>
                  <RadioGroupItem id='r2' value="Item 2" />
                  <label className=" pl-[15px]" htmlFor="r2">
                    <Typography>
                      Advanced
                    </Typography>
                  </label>
                  <RadioGroupItem id='r3' value="Item 3" />
                  <label className=" pl-[15px]" htmlFor="r3">
                    <Typography>
                      Pro
                    </Typography>
                  </label>

                </RadioGroup>
              </div>
              <div className='flex items-center mb-2'>
                <Button className='mr-2' variant="accent">В корзину</Button>
                <Button href="/" variant='link' size='link'>Перейти в магазин</Button>
              </div>
            </CardFooter>
          </Card>
        </div>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a fruit" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>
                <Typography>
                  Fruits
                </Typography>
              </SelectLabel>
              <SelectItem value="apple">
                <Typography>Apple</Typography>
              </SelectItem>
              <SelectItem value="pear">
                <Typography>Pear</Typography>
              </SelectItem>
              <SelectItem value="Blueberry">
                <Typography>Blueberry</Typography>
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <div>
          <Image
            src='/viacheslav-kvaratskheliia-939ZR0Q3rq8-unsplash.jpg'
            width={500}
            height={480}
            alt="Life's greatest adventures are born from the seeds of unshakable dreams. For years, I carried this place in my heart, a distant yearning that seemed beyond reach. 6,277 miles and visa hurdles. I set a goal so audacious, it felt like chasing the impossible. Yet, today, I stand on this sacred ground, proof that dreams, determination, and the refusal to give up can defy all odds. Embrace your dreams, for they hold the keys to your most extraordinary journeys."
          />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, perferendis ex animi unde vitae corporis consequuntur delectus necessitatibus aliquam minima doloremque, iure provident voluptas quis dicta? Earum corrupti nihil eius!</p>
        </div>
        <AlertDialog>
          <AlertDialogTrigger
            asChild
          >
            <Button variant="negative">Delete account</Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogTitle>
              This is alert dialog
            </AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your account and remove your
              data from our servers.
            </AlertDialogDescription>
            <div className="flex justify-end gap-[25px]">
              <AlertDialogCancel>
                Cancel
              </AlertDialogCancel>
              <AlertDialogAction>
                Confirm
              </AlertDialogAction>
            </div>
          </AlertDialogContent>
        </AlertDialog> */}

      </main>
    </>
  )
}

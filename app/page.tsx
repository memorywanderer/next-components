'use client'

import { Icons } from "@/components/icons"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion/accordion"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio/aspect-ratio"
import { Button } from "@/components/ui/button/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card"
import { Checkbox } from "@/components/ui/checkbox/checkbox"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog/dialog"
import { Input } from "@/components/ui/input/Input"
import { Label } from "@/components/ui/label/label"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation/navigation"
import { NavigationMenuContent } from "@radix-ui/react-navigation-menu"
import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-screen p-4 bg-background-secondary">
      <header>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Learn
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="one m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr]">
                  <li>
                    <NavigationMenuLink asChild>
                      <a
                        className="focus:shadow-violet7 from-purple9 to-indigo9 flex
                    h-full w-full select-none flex-col justify-end rounded-[6px] bg-gradient-to-b p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px]"
                        href="/"
                      >
                        <svg aria-hidden width="38" height="38" viewBox="0 0 25 25" fill="white">
                          <path d="M12 25C7.58173 25 4 21.4183 4 17C4 12.5817 7.58173 9 12 9V25Z"></path>
                          <path d="M12 0H4V8H12V0Z"></path>
                          <path d="M17 8C19.2091 8 21 6.20914 21 4C21 1.79086 19.2091 0 17 0C14.7909 0 13 1.79086 13 4C13 6.20914 14.7909 8 17 8Z"></path>
                        </svg>
                        <div className="mt-4 mb-[7px] text-[18px] font-medium leading-[1.2] text-white">
                          Radix Primitives
                        </div>
                        <p className="text-mauve4 text-[14px] leading-[1.3]">
                          Unstyled, accessible components for React.
                        </p>
                      </a>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href='#'>Link 1</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href='#'>Link 2</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink asChild>
                      <Link href='#'>Link 3</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                Overview
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul>
                  <li>
                    <NavigationMenuLink>
                      <Link href='#'>Link 1</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Link href='#'>Link 2</Link>
                    </NavigationMenuLink>
                  </li>
                  <li>
                    <NavigationMenuLink>
                      <Link href='#'>Link 3</Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </header>
      <form>
        <Label htmlFor="surname">
          Surname
          <Input name="surname" placeholder="Your surname" radius='lg' />
        </Label>
        <Label htmlFor="name">
          Name
          <Input name="name" placeholder="Your name" radius='lg' disabled />
        </Label>
      </form>
      <Accordion
        className="bg-background"
        type="single"
        defaultValue='item-1'
        collapsible
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Click me</AccordionTrigger>
          <AccordionContent>Lorem ipsum dolor sit amet consectetur adipisicing elit. A non dolores, nostrum debitis consequatur voluptas, esse vitae sunt maiores magni aliquid minima id deserunt temporibus eligendi numquam qui assumenda at.</AccordionContent>
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
          <Button>Show dialog</Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <AspectRatio ratio={4 / 3}>
              <Image
                src='/artur-stanulevich-F_zWvxrQeCk-unsplash.jpg'
                alt="lighting strike in the night sky"
                fill
                className="object-cover"
              />
            </AspectRatio>
          </DialogHeader>
          <DialogTitle>Welcome back!</DialogTitle>
          <DialogDescription>
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
                className="flex h-full w-full items-center justify-center bg-background "
              >
                <Icons.placeholder
                  className="h-9 w-9 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>
            </AspectRatio>
          </CardHeader>
          <CardContent>
            <CardTitle className="mb-4">Смартфон Apple iPhone 11 128GB Black</CardTitle>
            <CardDescription className="text-xl font-bold text-card-foreground">314 990 ₸</CardDescription>
          </CardContent>
          <CardFooter className="flex flex-col">
            <div className='flex items-center mb-2'>
              <Checkbox id="c1" />
              <label className="pl-[15px] text-[15px] leading-none text-foreground cursor-pointer" htmlFor="c1">
                Accept terms and conditions.
              </label>
            </div>
            <div className='flex items-center mb-2'>
              <Button className='mr-2' >В корзину</Button>
              <Button href="/" variant='link' size='link'>Перейти в магазин</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
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
          <Button variant="destructive">Delete account</Button>
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
      </AlertDialog>

    </main>
  )
}

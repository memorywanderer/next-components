'use client'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog/alert-dialog"
import { AspectRatio } from "@/components/ui/aspect-ratio/aspect-ratio"
import { Button } from "@/components/ui/button/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card/card"
import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen p-4 ">
      <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
        <Card className="h-full overflow-hidden rounded-sm">
          <CardHeader>
            <AspectRatio ratio={4 / 3}>
              <Image
                className="object-cover"
                src="/viacheslav-kvaratskheliia-939ZR0Q3rq8-unsplash.jpg"
                alt="artur-stanulevich-F_zWvxrQeCk-unsplash"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            </AspectRatio>
          </CardHeader>
          <CardContent>
            <CardTitle>Title</CardTitle>
            <CardDescription>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia veniam maiores, voluptatem quasi id nihil neque illo, dolore eligendi cupiditate in odio blanditiis? Dolore nam aliquid quaerat. Officiis, sed autem!</CardDescription>
          </CardContent>
          <CardFooter>
            <Button>Buy</Button>
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
          <Button variant="outline">Delete account</Button>
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

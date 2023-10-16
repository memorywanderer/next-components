'use client'

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog/alert-dialog"
import { Button } from "@/components/ui/button/button"
import Image from "next/image"


export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center w-screen h-screen p-4 ">
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
          <Button variant="default">Delete account</Button>
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

'use client'
import Image from 'next/image'
import img from '@/public/artur-stanulevich-F_zWvxrQeCk-unsplash.jpg'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog/dialog'
import { Button } from '@/components/ui/button/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from '@radix-ui/react-navigation-menu'


export default function Home() {

  return (
    <main className="w-screen h-screen flex items-center justify-center p-4 bg-white">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Learn
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, distinctio. Quibusdam reprehenderit error tenetur consectetur veritatis neque. Similique repudiandae error facilis cum numquam distinctio deleniti minima deserunt, sunt corporis necessitatibus!
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  )
}

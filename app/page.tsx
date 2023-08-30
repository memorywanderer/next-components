'use client'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuIndicator
} from '@/components/ui/navigation/navigation'


export default function Home() {

  return (
    <main className="w-screen h-screen flex items-center justify-center p-4">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Learn
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p className='sm:w-[500px]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, distinctio. Quibusdam reprehenderit error tenetur consectetur veritatis neque. Similique repudiandae error facilis cum numquam distinctio deleniti minima deserunt, sunt corporis necessitatibus!
              </p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>
              Learn
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <p className='sm:w-[500px]'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, distinctio. Quibusdam reprehenderit error tenetur consectetur veritatis neque. Similique repudiandae error facilis cum numquam distinctio deleniti minima deserunt, sunt corporis necessitatibus!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, distinctio. Quibusdam reprehenderit error tenetur consectetur veritatis neque. Similique repudiandae error facilis cum numquam distinctio deleniti minima deserunt, sunt corporis necessitatibus!
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem, distinctio. Quibusdam reprehenderit error tenetur consectetur veritatis neque. Similique repudiandae error facilis cum numquam distinctio deleniti minima deserunt, sunt corporis necessitatibus!
              </p>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuIndicator />
        </NavigationMenuList>
      </NavigationMenu>
    </main>
  )
}

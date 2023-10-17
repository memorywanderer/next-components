import Image from 'next/image'
import * as React from 'react'
import { AspectRatio } from '../ui/aspect-ratio/aspect-ratio'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card/card'
import { Button } from '../ui/button/button'
import { Icons } from '../icons'


export const ProductCard = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <Card className="h-full overflow-hidden max-w-[270px]" border="lg" {...props}>
    <CardHeader className="py-4">
      <AspectRatio ratio={4 / 3}>
        <div
          aria-label="Placeholder"
          role="img"
          aria-roledescription="placeholder"
          className="flex h-full w-full items-center justify-center bg-secondary"
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
    <CardFooter>
      <Button className='w-full mr-2'>В корзину</Button>
      <Button className='w-6'>1</Button>
    </CardFooter>
  </Card>
)
"use client"
import { cn } from '@/lib/utils'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { ComponentProps, HTMLAttributes, useCallback, useEffect } from 'react'
import { Button } from '../button/button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  '/lukas-bato-4LkjvMlVhOw-unsplash.jpg',
  '/nat-uN9OSpSsw4A-unsplash.jpg',
  '/timothy-eberly-LHm2nLdtC9g-unsplash.jpg'
]

const Carousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes())
    }
  }, [emblaApi])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <div className='relative md:p-2'>
      <div ref={emblaRef} className="overflow-hidden">
        <CarouserContainer>
          {slides.length > 0 && slides.map((item) => (
            <CarouselSlide>
              <CarouselImage src={item} alt={item} width={3000} height={2000} />
            </CarouselSlide>
          ))}
        </CarouserContainer>
        <div className="absolute flex flex-col gap-2 bottom-2 left-2 md:left-14 md:bottom-10">
          <CarouselButton onClick={scrollPrev}>
            <ChevronLeft />
          </CarouselButton>
          <CarouselButton onClick={scrollNext}>
            <ChevronRight />
          </CarouselButton>
        </div>
      </div>
    </div>
  )
}


interface CarouselContainerProps
  extends HTMLAttributes<HTMLElement> { }

const CarouserContainer = ({ className, children }: CarouselContainerProps) => (
  <div className={cn(
    "backface-invisible flex touch-pan-y ml-[calc(var(--slide-spacing)_*-1)]",
    className
  )}>
    {children}
  </div>
)


interface CarouselSlideProps
  extends HTMLAttributes<HTMLElement> { }

const CarouselSlide = ({ className, children }: CarouselSlideProps) => (
  <div className={cn(
    "flex-grow-0 flex-shrink-0 basis-[var(--slide-size)] min-w-0 pl-[var(--slide-spacing)] relative",
    className
  )}>
    {children}
  </div>
)

interface CarouselImageProps
  extends ComponentProps<typeof Image> { }

const CarouselImage = ({
  className,
  src,
  alt,
  width,
  height
}: CarouselImageProps) => (
  <Image
    className={className}
    src={src}
    alt={alt}
    width={width}
    height={height}
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    objectFit='cover'
  />
)

interface CarouselButtonProps
  extends HTMLAttributes<HTMLButtonElement> { }

const CarouselButton = ({ className, children, ...props }: CarouselButtonProps) => (
  <Button rounded="lg" className={cn(
    'z-[1] p-1 md:p-4 ',
    className
  )}
    {...props}
  >
    {children}
  </Button>
)



export {
  Carousel
}
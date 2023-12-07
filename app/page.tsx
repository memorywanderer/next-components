'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs"
import { Section, SectionBody, SectionDescription, SectionHeader, SectionHeading, SectionLink } from "@/components/pages/section/section"
import { Typography } from "@/components/ui/typography/typography"
import { Hero, HeroDescription, HeroHeading } from "@/components/pages/hero/hero"
import { Button } from "@/components/ui/button/button"
import Image from "next/image"
import { Carousel } from "@/components/ui/carousel/carousel"

export default function Home() {

  return (
    <>
      <main className="w-full">
        {/* <FullscreenHero
          title="Создаем СИИ для блага всего человечества"
          description="Обладая обширными общими знаниями и опытом в предметной области, GPT-4 может следовать сложным инструкциям на естественном языке и точно решать сложные проблемы."
          buttonTitle="Узнать больше о AI"
        /> */}
        {/*
        src="https://assets.mixkit.co/videos/preview/mixkit-set-of-plateaus-seen-from-the-heights-in-a-sunset-26070-large.mp4"
      */}
        <Hero imageSrc="/nat-uN9OSpSsw4A-unsplash.jpg" alt="iamgeeeee">
          <HeroHeading className="mb-4 md:text-6xl">
            Создаем безопасный СИИ для блага всего человечества
          </HeroHeading>
          <HeroDescription>
            Обладая обширными общими знаниями и опытом в предметной области, GPT-4 может следовать сложным инструкциям на естественном языке и точно решать сложные проблемы.
          </HeroDescription>
          <Button className="w-fit" variant="accent" size="lg" rounded="lg">Узнать больше о AI</Button>
        </Hero>

        <Section variant="vertical">
          <SectionHeader variant="centered">
            <SectionHeading>
              Cистема искусственного интеллекта GPT
            </SectionHeading>
            <SectionDescription>
              Обладая обширными общими знаниями и опытом в предметной области, GPT-4 может следовать сложным инструкциям на естественном языке и точно решать сложные проблемы.
            </SectionDescription>
          </SectionHeader>
          <SectionBody variant="vertical">
            <Typography type="body-primary">
              You can now show ChatGPT images and start a chat. Troubleshoot why your grill won’t start, explore the contents of your fridge to plan a meal, or analyze a complex graph for work-related data.
            </Typography>
            <Typography type="body-primary">
              Create images simply by describing them in ChatGPT. Invent new logos, comic strips, and photorealistic scenes right in the chat. You can bring your ideas to life with our most capable image model, DALL·E 3.
            </Typography>
            <Typography type="body-primary">
              You can now use voice to engage in a back-and-forth conversation with ChatGPT. Speak with it on the go, request a bedtime story for your family, or settle a dinner table debate.
            </Typography>
          </SectionBody>
        </Section>
        <Section variant="horizontal">
          <SectionHeader variant="vertical" order="last">
            <SectionHeading>
              Cистема искусственного интеллекта GPT
            </SectionHeading>
            <SectionDescription>
              Обладая обширными общими знаниями и опытом в предметной области, GPT-4 может следовать сложным инструкциям на естественном языке и точно решать сложные проблемы.
            </SectionDescription>
          </SectionHeader>
          <SectionBody variant="vertical">
            <Image
              className="rounded-xl"
              src="/nat-uN9OSpSsw4A-unsplash.jpg"
              alt="A lonely plaent in the dark space"
              width={3000}
              height={2000}
              quality={90}
              loading="lazy"
              sizes="(min-width: 1540px) 740px, (min-width: 1280px) 612px, (min-width: 1040px) 484px, (min-width: 780px) 736px, (min-width: 680px) 608px, calc(94.44vw - 15px)"
            />
            {/* <Typography>
              You can now show ChatGPT images and start a chat. Troubleshoot why your grill won’t start, explore the contents of your fridge to plan a meal, or analyze a complex graph for work-related data.
            </Typography>
            <Typography>
              Create images simply by describing them in ChatGPT. Invent new logos, comic strips, and photorealistic scenes right in the chat. You can bring your ideas to life with our most capable image model, DALL·E 3.
            </Typography>
            <Typography>
              You can now use voice to engage in a back-and-forth conversation with ChatGPT. Speak with it on the go, request a bedtime story for your family, or settle a dinner table debate.
            </Typography> */}
          </SectionBody>
        </Section>
        <Section variant="vertical">
          <SectionHeader variant="horizontal" className="gap-8">
            <SectionHeading>
              Cистема искусственного интеллекта GPT может следовать сложным
            </SectionHeading>
            <SectionDescription>
              Обладая обширными общими знаниями и опытом в предметной области, GPT-4 может следовать сложным инструкциям на естественном языке и точно решать сложные проблемы. Обладая обширными общими знаниями и опытом в предметной области, GPT-4 может следовать сложным инструкциям на естественном языке и точно решать сложные проблемы.
            </SectionDescription>
          </SectionHeader>
          <SectionBody variant="vertical">
            <Typography>
              You can now show ChatGPT images and start a chat. Troubleshoot why your grill won’t start, explore the contents of your fridge to plan a meal, or analyze a complex graph for work-related data.
            </Typography>
            <Typography>
              Create images simply by describing them in ChatGPT. Invent new logos, comic strips, and photorealistic scenes right in the chat. You can bring your ideas to life with our most capable image model, DALL·E 3.
            </Typography>
            <Typography>
              You can now use voice to engage in a back-and-forth conversation with ChatGPT. Speak with it on the go, request a bedtime story for your family, or settle a dinner table debate.
            </Typography>
          </SectionBody>
        </Section>
      </main>
    </>
  )
}

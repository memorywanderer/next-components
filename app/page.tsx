'use client'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs/tabs"
import { useEffect, useRef, useState } from "react"
import { FullscreenHero, FullscreenVideoHero, Hero } from "@/components/pages/hero/hero"
import { Section, SectionLink, SectionSubtitle, SectionTitle } from "@/components/pages/section/section"
import { Typography } from "@/components/ui/typography/typography"


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

  return (
    <>
      <main className="w-full">
        <FullscreenHero
          title="Создаем СИИ для блага всего человечества"
          description="Обладая обширными общими знаниями и опытом в предметной области, GPT-4 может следовать сложным инструкциям на естественном языке и точно решать сложные проблемы."
          buttonTitle="Узнать больше о AI"
        />
        <Section>
          <SectionTitle>
            DALL·E
          </SectionTitle>
          <SectionSubtitle>
            DALL·E — это система искусственного интеллекта, которая может создавать реалистичные изображения и произведения искусства на основе описания на естественном языке.
          </SectionSubtitle>
          <SectionLink href="#">
            Узнать о DALL·E
          </SectionLink>
          <Tabs defaultValue="generation" className="max-w-3xl p-4 bg-background rounded-2xl">
            <TabsList>
              <TabsTrigger value="generation">
                <Typography type="interface-primary">
                  Генерация изображений
                </Typography>
              </TabsTrigger>
              <TabsTrigger value="outpainting">
                <Typography type="interface-primary">
                  Перекраска
                </Typography>
              </TabsTrigger>
              <TabsTrigger value="inpainting">
                <Typography type="interface-primary">
                  Живопись
                </Typography>
              </TabsTrigger>
              <TabsTrigger value="variations">
                <Typography type="interface-primary">
                  Вариации
                </Typography>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="generation">
              <Typography type="body-large" className="max-w-xl">
                DALL·E 2 может создавать оригинальные реалистичные изображения и рисунки из текстового описания. Он может сочетать концепции, атрибуты и стили.
              </Typography>
            </TabsContent>
            <TabsContent value="outpainting">
              <Typography type="body-large" className="max-w-xl">
                DALL·E 2 может расширять изображения за пределы исходного холста, создавая новые обширные композиции.
              </Typography>
            </TabsContent>
            <TabsContent value="inpainting">
              <Typography type="body-large" className="max-w-xl">
                DALL·E 2 can make realistic edits to existing images from a natural language caption. It can add and remove elements while taking shadows, reflections, and textures into account.
              </Typography>
            </TabsContent>
            <TabsContent value="variations">
              <Typography type="body-large" className="max-w-xl">
                DALL·E 2 может взять изображение и создать различные его вариации, вдохновленные оригиналом.
              </Typography>
            </TabsContent>
          </Tabs>
        </Section>
      </main>
    </>
  )
}

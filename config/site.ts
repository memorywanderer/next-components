import { DesktopNavItem, FooterItem } from "@/types";

export type SiteConfig = typeof siteConfig

const links = {
  x: "https://x.com",
  github: "https://github.com",
  instagram: "https://instagram.com",
  vk: "https://vk.ru",
}

export const siteConfig = {
  name: "Luden",
  description: "A modern website build with next.js 13",
  url: "",
  ogImage: "",
  links,
  desktopNav: [
    {
      title: "Учеб",
      items: [
        {
          title: "Test link 1",
          href: "/test1",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Test link 2",
          href: "/test2",
          description: "Buy your own product.",
          items: [],
        },
        {
          title: "Test link 2",
          href: "/test2",
          description: "Buy your own product.",
          items: [],
        },
        {
          title: "Test link 2",
          href: "/test2",
          description: "Buy your own product.",
          items: [],
        }, {
          title: "Test link 2",
          href: "/test2",
          description: "Buy your own product.",
          items: [],
        }, {
          title: "Test link 2",
          href: "/test2",
          description: "Buy your own product.",
          items: [],
        },
        {
          title: "Test link 3",
          href: "/test3",
          description: "Read our latest blog posts.",
          items: [],
        }
      ]
    },
    {
      title: "О нас",
      items: [
        {
          title: "Test 2 link 1",
          href: "/test1",
          description: "All the products we have to offer.",
          items: [],
        },
        {
          title: "Test 2 link 2",
          href: "/test2",
          description: "Buy your own product.",
          items: [],
        },
        {
          title: "Test 2 link 3",
          href: "/test3",
          description: "Read our latest blog posts.",
          items: [],
        }
      ]
    },
    {
      title: "Наши работы",
      href: "/test3"
    },
    {
      title: "Карьера",
      href: "/test4"
    },
    {
      title: "Контакты",
      href: "/test5"
    },
  ] satisfies DesktopNavItem[],
  footerNav: [
    {
      title: "Credits",
      items: [
        {
          title: "OneStopShop",
          href: "https://onestopshop.jackblatch.com",
          external: true,
        },
        {
          title: "Acme Corp",
          href: "https://acme-corp.jumr.dev",
          external: true,
        },
        {
          title: "craft.mxkaske.dev",
          href: "https://craft.mxkaske.dev",
          external: true,
        },
        {
          title: "Taxonomy",
          href: "https://tx.shadcn.com/",
          external: true,
        },
        {
          title: "shadcn/ui",
          href: "https://ui.shadcn.com",
          external: true,
        },
      ]
    },
    {
      title: "Social",
      items: [
        {
          title: "Twitter",
          href: links.x,
          external: true,
        },
        {
          title: "GitHub",
          href: links.github,
          external: true,
        },
        {
          title: "Instagram",
          href: links.instagram,
          external: true,
        },
        {
          title: "VK",
          href: links.vk,
          external: true,
        },
      ],
    },
  ] satisfies FooterItem[]
}
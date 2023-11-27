import { Icons } from "@/components/icons";
import { FileWithPath } from "react-dropzone";

export type FileWithPreview = FileWithPath & {
  preview: string
}


/*
  Navigation menu types
*/
export interface NavItem {
  title: string,
  href?: string,
  disabled?: boolean,
  external?: boolean,
  icon?: keyof typeof Icons,
  label?: string,
  description?: string,
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[]
}

export type DesktopNavItem = NavItemWithOptionalChildren

export type SidebarNavItem = NavItemWithChildren
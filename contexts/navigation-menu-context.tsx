"use client"

import { createContext, useContext, useState } from "react";


type navigationMenuProviderProps = {
  children: React.ReactNode
}

type MenuContext = {
  isOpen: boolean,
  toggleMenu: () => void
}

export const NavigationMenuContext = createContext<MenuContext | null>(null)

export const NavigationMenuContextProvider = ({
  children
}: navigationMenuProviderProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }
  return (
    <NavigationMenuContext.Provider
      value={{
        isOpen,
        toggleMenu
      }}
    >
      {children}
    </NavigationMenuContext.Provider>
  )
}

export const useNavgationMenuContext = () => {
  const context = useContext(NavigationMenuContext)

  if (!context) {
    throw new Error(
      'useNavigationMenuContext must be used within NavigationMenuProvider'
    )
  }

  return context
}
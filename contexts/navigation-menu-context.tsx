"use client"

import { createContext, useContext, useEffect, useState } from "react";


type navigationMenuProviderProps = {
  children: React.ReactNode
}

type MenuContext = {
  openIndex: number | null,
  toggleMenuAtIndex: (index: number) => void,
}

export const NavigationMenuContext = createContext<MenuContext | null>(null)

export const NavigationMenuContextProvider = ({
  children
}: navigationMenuProviderProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleMenuAtIndex = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index))
  }

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const menuElement = document.getElementById(`menu-content-${openIndex}`)
      if (menuElement && !menuElement.contains(event.target as Node)) {
        setOpenIndex(null)
      }
    }

    if (openIndex !== null) {
      document.addEventListener('click', handleOutsideClick)
    }

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [openIndex])

  return (
    <NavigationMenuContext.Provider
      value={{
        openIndex,
        toggleMenuAtIndex
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
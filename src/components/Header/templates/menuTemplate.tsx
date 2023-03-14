import Link from 'next/link'

import { Menu } from '@headlessui/react'

import { navBarLiStyle } from './../styles'

export interface MenuProps {
  route: string
  name: string
}

export const DesktopMenuTemplate = ({ route, name }: MenuProps) => {
  return (
    <li className={navBarLiStyle} key={`${name}desktop`}>
      <Link
        className="font-title text-primary text-2xl font-bold uppercase"
        href={route}
      >
        {name}
      </Link>
    </li>
  )
}

export const MobileMenuTemplate = ({ route, name }: MenuProps) => {
  return (
    <Menu.Item key={`${name}mobile`}>
      <li className="hover:bg-blue-500 w-full p-4 list-none cursor-pointer flex items-center justify-center">
        <Link
          className="font-title text-xl md:text-2xl font-bold uppercase"
          href={route}
        >
          {name}
        </Link>
      </li>
    </Menu.Item>
  )
}

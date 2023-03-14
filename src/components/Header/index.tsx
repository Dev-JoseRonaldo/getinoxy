import { useState } from 'react'
import { Icon } from '@iconify/react'
import { Menu, Transition } from '@headlessui/react'

import {
  DesktopMenuTemplate,
  MenuProps,
  MobileMenuTemplate
} from './templates/menuTemplate'

import { Logo } from '../Logo'
import { Button } from '../Button'

import {
  navBarStyle,
  navBarUlStyle,
  navBarMenuMobuleButtonStyle,
  navBarMenuMobuleIconStyle,
  navBarMenuMobuleTransitionContextStyle,
  navBarMenuMobuleItemsStyle,
  HeaderContainerStyle,
  HeaderButtonBoxStyle,
  HeaderButtonMobileStyle
} from './styles'

export interface HeaderStylesProps {
  menu: string
  logo: string
}

export interface HeaderMenuProps {
  menu: MenuProps[]
}

export const Header = ({ menu }: HeaderMenuProps) => {
  const [isOpenMenuMobile, setIsOpenMenuMobile] = useState(false)

  const handleMenuMobile = () => {
    setIsOpenMenuMobile(prev => !prev)
  }
  return (
    <header className={HeaderContainerStyle}>
      <nav className={`${navBarStyle}`}>
        <Logo />

        <ul className={navBarUlStyle}>{menu.map(DesktopMenuTemplate)}</ul>
        <div className={HeaderButtonBoxStyle}>
          <Button>Login</Button>
          <Button size="flexible" variant="primary">
            Resgistrar
          </Button>
        </div>

        <Menu>
          {({ open }) => (
            <>
              <Menu.Button
                className={navBarMenuMobuleButtonStyle}
                aria-label={isOpenMenuMobile ? 'Fechar Menu' : 'Abrir Menu'}
                onClick={handleMenuMobile}
              >
                <Icon
                  className={navBarMenuMobuleIconStyle}
                  icon="bx:menu"
                  width={50}
                />
              </Menu.Button>

              <Transition
                show={open}
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-y-0 opacity-0"
                enterTo="transform scale-y-100 opacity-100"
                leave="transition duration-300 ease-out"
                leaveFrom="transform scale-y-100 opacity-100"
                leaveTo="transform scale-y-0 opacity-0"
                className={navBarMenuMobuleTransitionContextStyle}
              >
                <Menu.Items static className={navBarMenuMobuleItemsStyle}>
                  {menu.map(MobileMenuTemplate)}

                  <Button className={HeaderButtonMobileStyle}>Login</Button>
                  <Button className={HeaderButtonMobileStyle}>Registrar</Button>
                </Menu.Items>
              </Transition>
            </>
          )}
        </Menu>
      </nav>
    </header>
  )
}

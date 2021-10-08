import React from 'react'
import { NavLinkProps } from '../../../types/types'
import NavMenu from '../navMenu'

type Props = {
  listNavLinks: NavLinkProps[]
  smallDevice?: boolean
  menuHeight?: string
}

const Header = ({
  listNavLinks,
  smallDevice = true,
  menuHeight = '50px'
}: Props) => {
  return (
    <NavMenu
      listNavLinks={listNavLinks}
      smallDevice={smallDevice}
      menuHeight={menuHeight}
    />
  )
}

export default Header

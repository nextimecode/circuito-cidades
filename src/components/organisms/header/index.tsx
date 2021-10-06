import React from 'react'
import { NavLinkProps } from '../../../types/types'
import NavMenu from '../navMenu'

type Props = {
  listNavLinks: NavLinkProps[]
}

const Header = ({
  listNavLinks
}: Props) => {
  return (
    <header>
      <NavMenu
        listNavLinks={listNavLinks}
      />
    </header>
  )
}

export default Header

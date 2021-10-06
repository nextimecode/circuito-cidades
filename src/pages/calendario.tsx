import React from 'react'
import NavMenu from '../components/organisms/navMenu'
import { listNavLinks } from './api/listNavLinks'

const Calendario = () => {
  return (
    <>
      <NavMenu listNavLinks={listNavLinks} />
      <h1>Calendário</h1>
    </>
  )
}

export default Calendario

import React from 'react'
import NavMenu from '../components/organisms/navMenu'
import { listNavLinks } from './api/listNavLinks'

const Documentos = () => {
  return (
    <>
      <NavMenu listNavLinks={listNavLinks} />
      <h1>Documentos</h1>
    </>
  )
}

export default Documentos

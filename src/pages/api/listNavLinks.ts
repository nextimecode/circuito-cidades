import { NavLinkProps } from '../../types/types'

export const listNavLinks: NavLinkProps[] = [
  {
    href: '/',
    label: 'O Circuito'
  },
  {
    href: '/modalidades',
    label: 'Modalidades',
    arrowIcon: true
  },
  {
    href: '/cidades',
    label: 'Cidades',
    arrowIcon: true
  },
  {
    href: '/final',
    label: 'Etapa Final',
    starIcon: true
  },
  {
    href: '/documentos',
    label: 'Documentos'
  },
  {
    href: '/calendario',
    label: 'Calendário'
  },
  {
    href: '/inscricoes',
    label: 'Inscreva-se',
    buttonTyped: true
  }
]

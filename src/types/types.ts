export interface NewsProps {
    id: string
    date: string
    content: ContentProps
  }

export interface ContentProps {
    title: string
    subtitle: string
    content: string
    imgUrl: string
  }

export interface EventProps {
    eventName: string
    season?: string
    stage?: string
    date: string
    place: string
    imgUrl?: string
    content?: string
  }

export interface NavLinkProps {
    href: string
    label: string
    star?: boolean
    buttonTyped?: boolean
    items?: NavItemsProps[]
  }

export interface NavItemsProps {
    href: string
    label: string
  }

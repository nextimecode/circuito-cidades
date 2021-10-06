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
  buttonTyped?: boolean
  starIcon?: boolean
  arrowIcon?: boolean
  items?: NavItemsProps[]
}

export interface NavItemsProps {
  href: string
  label: string
}

export interface AccordionPostProps {
  title: string
  content: string
  imgUrl?: string
  categories: string
}

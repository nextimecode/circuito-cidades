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
  target?: string
}

export interface AccordionPostProps {
  title: string
  content: string
  imgUrl?: string
  categories: string
  rulesUrl?: string
  info?: EnrollmentInfoProps
  stages?: StagesProps[]
}

export interface StagesProps {
  stage: string
  date?: string
  modalities: string
  finished?: boolean
  dueDate?: string
  reportUrl: string
}

export interface EnrollmentInfoProps {
  place?: string
  location?: string
  contact?: string
}

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

export interface Image {
  id: string
  url: string
}

export interface CityProps {
  id?: string
  title?: string
  content?: string
  image?: Image
  symbol?: Image
  categories?: string
  rulesUrl?: string
  place?: string
  location?: string
  contact?: string
  gallery?: string
  levels?: LevelsProps[]
  registrations?: RegistrationProps[]
}
export interface RegistrationProps {
  label: string
  finished?: boolean
  url?: string
}

export interface LevelsProps {
  id?: string
  title: string
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

export interface MonthForCalendarProps {
  label: string
  stages: StagesForCalendarProps[]
}

export interface StagesForCalendarProps {
  date: string
  city: string
  modalityList: ModalityListProps
}

export interface ModalityListProps {
  caminhada?: boolean
  ciclismoMtb?: boolean
  corrida?: boolean
  damas?: boolean
  desafioNba?: boolean
  eSports?: boolean
  futebolFreestyle?: boolean
  futebolMesa?: boolean
  futevolei?: boolean
  pesca?: boolean
  peteca?: boolean
  sinuca?: boolean
  slackLine?: boolean
  taekwondo?: boolean
  tenisCampo?: boolean
  tenisMesa?: boolean
  voleiDupla?: boolean
  xadrez?: boolean
}

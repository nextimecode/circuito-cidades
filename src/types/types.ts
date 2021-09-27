export interface NoticiaProps {
    id: string
    date: string
    content: ConteudoProps
  }

export interface ConteudoProps {
    title: string
    subtitle: string
    content: string
    imgUrl: string
  }

export interface EventoProps {
    eventName: string
    season?: string
    stage?: string
    date: string
    place: string
    imgUrl?: string
    content?: string
  }

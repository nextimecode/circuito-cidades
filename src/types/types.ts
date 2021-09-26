export interface NewsProps {
    date: string
    content: ContentProps
  }

export interface ContentProps {
    title: string
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
